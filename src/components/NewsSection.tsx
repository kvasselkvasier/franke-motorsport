'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './NewsSection.module.css';

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

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const categoryParam = selectedCategory !== 'all' ? `?category=${selectedCategory}` : '';
      const response = await fetch(`/api/news${categoryParam}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: NewsResponse = await response.json();
      
      if (data.success) {
        setNews(data.data);
        setLastUpdated(data.lastUpdated);
      } else {
        throw new Error('Failed to fetch news');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setError(error instanceof Error ? error.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (!isMounted) return;
    
    fetchNews();
    // Auto-refresh every 30 minutes
    const interval = setInterval(fetchNews, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [isMounted, fetchNews]);

  const categories = [
    { value: 'all', label: 'Alle News' },
    { value: 'motorsport', label: 'Motorsport' },
    { value: 'f1', label: 'Formel 1' },
    { value: 'simracing', label: 'Sim Racing' },
    { value: 'karting', label: 'Kartsport' }
  ];

  const formatDate = (dateString: string) => {
    if (!isMounted) {
      // During SSR, show a simple format to prevent hydration mismatches
      return new Date(dateString).toISOString().split('T')[0];
    }
    
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      motorsport: '#6C757D', // Text Secondary (Professional Gray)
      f1: '#6C757D',          // Text Secondary (Professional Gray)  
      simracing: '#495057',   // Dark Gray
      karting: '#C9A96E'      // Motorsport Gold
    };
    return colors[category as keyof typeof colors] || '#6C757D';
  };

  // Prevent hydration mismatch by showing consistent initial state
  if (!isMounted) {
    return (
      <section id="news" className="professional-section">
        <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Aktuelle Motorsport News</h2>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p className="flex items-center space-x-2 text-gray-600">
            <svg className="w-5 h-5 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Lade aktuelle News...</span>
          </p>
        </div>
      </section>
    );
  }

  if (loading && news.length === 0) {
    return (
      <section id="news" className="professional-section">
        <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Aktuelle Motorsport News</h2>
        <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Lade aktuelle News...</span>
            </p>
          </div>
      </section>
    );
  }

  if (error && news.length === 0) {
    return (
      <section id="news" className="professional-section">
        <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Aktuelle Motorsport News</h2>
        <div className={styles.error}>
            <div className="flex items-center space-x-2 mb-4 text-red-600">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <p>Fehler beim Laden der News: {error}</p>
            </div>
            <button onClick={fetchNews} className={`${styles.retryButton} flex items-center space-x-2`}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
              <span>Erneut versuchen</span>
            </button>
          </div>
      </section>
    );
  }

  return (
    <section id="news" className="professional-section">
      <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Aktuelle Motorsport News</h2>
      <div className={styles.header}>
          <div className={styles.filters}>
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`${styles.filterButton} ${
                  selectedCategory === category.value ? styles.active : ''
                }`}
              >
                {category.value === 'all' && (
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                )}
                {category.value === 'motorsport' && (
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                )}
                {category.value === 'f1' && (
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                )}
                {category.value === 'simracing' && (
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM9 10v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1zm8 0v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1z"/>
                  </svg>
                )}
                {category.value === 'karting' && (
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                )}
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {lastUpdated && (
          <p className={styles.lastUpdated} suppressHydrationWarning>
            Zuletzt aktualisiert: {formatDate(lastUpdated)}
          </p>
        )}

        <div className={styles.newsGrid}>
          {news.map((item, index) => (
            <article key={`${item.source}-${index}`} className={styles.newsItem}>
              <div className={styles.newsHeader}>
                <span 
                  className={styles.category}
                  style={{ backgroundColor: getCategoryColor(item.category) }}
                  data-category={item.category}
                >
                  {item.category.toUpperCase()}
                </span>
                <span className={styles.source}>
                  {item.source}
                </span>
              </div>
              
              <h3 className={styles.newsTitle}>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.newsLink}
                >
                  {item.title}
                </a>
              </h3>
              
              <p className={styles.newsExcerpt}>
                {item.excerpt}
              </p>
              
              <div className={styles.newsFooter}>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <time className={styles.newsDate} suppressHydrationWarning>
                    {formatDate(item.pubDate)}
                  </time>
                </div>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.readMore} flex items-center space-x-1`}
                >
                  <span>Weiterlesen</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.disclaimer}>
          <p>
            <small>
              <svg className="w-4 h-4 inline mr-1 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              News aggregiert von öffentlichen RSS-Feeds. 
              Alle Rechte bei den ursprünglichen Quellen. 
              <a href="/impressum" target="_blank">Impressum</a> | 
              <a href="/datenschutz" target="_blank">Datenschutz</a>
            </small>
          </p>
        </div>

        <div className={styles.refreshButton}>
          <button 
            onClick={fetchNews} 
            disabled={loading}
            className={`${styles.refresh} flex items-center space-x-2`}
          >
            <svg 
              className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
            </svg>
            <span>{loading ? 'Aktualisiere...' : 'News aktualisieren'}</span>
          </button>
        </div>
    </section>
  );
}
