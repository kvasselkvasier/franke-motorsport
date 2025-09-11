import { NextApiRequest, NextApiResponse } from 'next';
import Parser from 'rss-parser';

// TypeScript interfaces
interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  category: string;
  description: string;
  excerpt: string;
  timestamp: number;
}

interface NewsResponse {
  success: boolean;
  count: number;
  data: NewsItem[];
  lastUpdated: string;
  disclaimer: string;
}

interface ErrorResponse {
  error: string;
  message?: string;
}

type ApiResponse = NewsResponse | ErrorResponse;

// RSSFeed interface entfernt da nicht verwendet

const parser = new Parser({
  customFields: {
    item: ['media:content', 'media:thumbnail']
  }
});

// Legale RSS-Feeds mit expliziter Erlaubnis
const RSS_FEEDS = [
  {
    url: 'https://www.racefans.net/feed/',
    name: 'RaceFans',
    category: 'motorsport'
  },
  {
    url: 'https://www.reddit.com/r/simracing/.rss',
    name: 'Reddit Sim Racing',
    category: 'simracing'
  },
  {
    url: 'https://www.reddit.com/r/karting/.rss',
    name: 'Reddit Karting',
    category: 'karting'
  },
  {
    url: 'https://www.reddit.com/r/formula1/.rss',
    name: 'Reddit Formula 1',
    category: 'f1'
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  // CORS Headers für lokale Entwicklung
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { category, limit = 20 } = req.query;
    const allNews: NewsItem[] = [];

    // Filter nach Kategorie wenn angegeben
    const feedsToFetch = category 
      ? RSS_FEEDS.filter(feed => feed.category === category)
      : RSS_FEEDS;

    console.log(`Fetching ${feedsToFetch.length} RSS feeds...`);

    // Parallel alle Feeds abrufen
    const feedPromises = feedsToFetch.map(async (feedConfig) => {
      try {
        console.log(`Fetching: ${feedConfig.name}`);
        const feed = await parser.parseURL(feedConfig.url);
        
        return feed.items.slice(0, 10).map((item: unknown) => {
          // Type guard für RSS item properties
          const rssItem = item as Record<string, unknown>;
          return {
            title: (rssItem.title as string) || 'Untitled',
            link: (rssItem.link as string) || '#',
            pubDate: (rssItem.pubDate as string) || (rssItem.isoDate as string) || new Date().toISOString(),
            source: feedConfig.name,
            category: feedConfig.category,
            description: ((rssItem.contentSnippet as string) || (rssItem.content as string) || '').slice(0, 200) + '...',
            // Rechtssicher: Nur Auszug verwenden
            excerpt: ((rssItem.contentSnippet as string) || (rssItem.content as string) || '').slice(0, 150) + '...',
            // Für bessere SEO
            guid: (rssItem.guid as string) || (rssItem.link as string),
            // Datum normalisieren
            timestamp: new Date((rssItem.pubDate as string) || (rssItem.isoDate as string) || Date.now()).getTime()
          } as NewsItem;
        });
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error(`Error fetching ${feedConfig.name}:`, errorMessage);
        return [];
      }
    });

    const feedResults = await Promise.all(feedPromises);
    
    // Alle Ergebnisse zusammenfassen
    feedResults.forEach(items => {
      allNews.push(...items);
    });

    // Nach Datum sortieren (neueste zuerst)
    allNews.sort((a, b) => b.timestamp - a.timestamp);

    // Duplikate entfernen (basierend auf Titel)
    const uniqueNews = allNews.filter((item, index, array) => 
      index === array.findIndex(t => t.title === item.title)
    );

    // Limit anwenden
    const limitedNews = uniqueNews.slice(0, parseInt(limit as string));

    console.log(`Successfully fetched ${limitedNews.length} news items`);

    res.status(200).json({
      success: true,
      count: limitedNews.length,
      data: limitedNews,
      lastUpdated: new Date().toISOString(),
      // Rechtliche Information
      disclaimer: 'News aggregiert von öffentlichen RSS-Feeds. Alle Rechte bei den ursprünglichen Quellen.'
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('News API Error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch news',
      message: errorMessage 
    });
  }
}
