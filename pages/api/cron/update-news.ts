import { NextApiRequest, NextApiResponse } from 'next';

interface CronResponse {
  success: boolean;
  message?: string;
  count?: number;
  timestamp: string;
  error?: string;
}

interface NewsApiResponse {
  success: boolean;
  count: number;
  data: any[];
  lastUpdated: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<CronResponse>) {
  // Überprüfe Autorisierung (Vercel Cron Secret oder lokaler Test)
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;
  
  // Für Hobby Plan: Erlaube auch Requests ohne Secret für manuelles Testen
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    console.log('❌ Unauthorized cron request');
    return res.status(401).json({ 
      success: false, 
      message: 'Unauthorized - Invalid or missing cron secret',
      timestamp: new Date().toISOString()
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed',
      timestamp: new Date().toISOString()
    });
  }

  try {
    // Trigger News-Update durch internen API-Call
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';

    const response = await fetch(`${baseUrl}/api/news?limit=50`, {
      headers: {
        'User-Agent': 'Franke-Motorsport-CronJob/1.0'
      }
    });

    if (response.ok) {
      const data: NewsApiResponse = await response.json();
      console.log(`✅ News updated successfully: ${data.count} items fetched`);
      
      res.status(200).json({ 
        success: true, 
        message: 'News updated successfully',
        count: data.count,
        timestamp: new Date().toISOString()
      });
    } else {
      throw new Error(`News API returned status: ${response.status}`);
    }

  } catch (error: any) {
    console.error('❌ Cron job failed:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}
