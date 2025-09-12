import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Franke Motorsport | Simracing, Kartsport & Live Motorsport News",
    template: "%s | Franke Motorsport"
  },
  description: "🏁 Franke Motorsport: Premium Simracing Team, Kartsport Action, Live-Streams auf Twitch, aktuelle Motorsport News & Setup-Guides. Deutschlands führende Motorsport-Community!",
  keywords: [
    // Hauptkeywords
    "franke motorsport", "simracing deutschland", "kartsport team", "motorsport livestream",
    // Simracing Keywords
    "simracing", "iracing", "assetto corsa competizione", "gran turismo", "forza motorsport",
    "racing simulator", "sim racing setups", "racing wheel", "simracing championship",
    // Kartsport Keywords
    "kartsport", "go kart racing", "kartbahn", "karting deutschland", "kart championship",
    "rotax", "shifter kart", "rental kart", "outdoor karting", "kartsport verein",
    // Motorsport Allgemein
    "motorsport", "racing", "formula 1", "f1", "gt3", "dtm", "nürburgring",
    "motorsport blog", "racing team", "motorsport community", "racing news",
    // Streaming & Content
    "twitch streamer", "youtube gaming", "livestream", "racing content", "gaming",
    "esports", "sim racing streams", "motorsport entertainment",
    // News & Updates
    "motorsport news", "racing news", "f1 news", "motorsport nachrichten",
    "racing updates", "motorsport feed", "rss news", "aktuelle motorsport news",
    // Location & Legal
    "motorsport deutschland", "racing germany", "simracing community",
    "impressum", "datenschutz", "rechtliche hinweise"
  ],
  authors: [{ name: "Franke Motorsport Team", url: "https://franke-motorsport.de" }],
  creator: "Franke Motorsport",
  publisher: "Franke Motorsport",
  metadataBase: new URL('https://franke-motorsport.de'),
  openGraph: {
    title: "Franke Motorsport | Premium Simracing & Kartsport Community",
    description: "🏁 Deutschlands führende Motorsport-Community: Live Simracing Streams, Kartsport Action, aktuelle News & professionelle Setup-Guides. Jetzt live dabei sein!",
    url: 'https://franke-motorsport.de',
    siteName: 'Franke Motorsport',
    images: [
      {
        url: '/franke-motorsport-banner.PNG',
        width: 1200,
        height: 350,
        alt: 'Franke Motorsport - Premium Simracing & Kartsport Team Deutschland',
        type: 'image/png',
      },
      {
        url: '/franke-motorsport-logo.PNG',
        width: 512,
        height: 512,
        alt: 'Franke Motorsport Logo - Simracing & Kartsport',
        type: 'image/png',
      },
    ],
    locale: 'de_DE',
    type: 'website',
    countryName: 'Germany',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@frankemotorsport',
    creator: '@frankemotorsport',
    title: '🏁 Franke Motorsport | Live Simracing & Kartsport',
    description: 'Premium Simracing Team ⚡ Kartsport Action ⚡ Live-Streams ⚡ Setup-Guides ⚡ Motorsport News. Deutschlands #1 Racing Community!',
    images: [
      {
        url: '/franke-motorsport-banner.PNG',
        alt: 'Franke Motorsport - Live Simracing & Kartsport Streams',
        width: 1200,
        height: 350,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Durch echten Google Search Console Code ersetzen
    yandex: 'your-yandex-verification-code', // TODO: Yandex Webmaster Tools
    // bing: 'your-bing-verification-code', // TODO: Bing Webmaster Tools (not supported by Next.js metadata)
  },
  alternates: {
    canonical: 'https://franke-motorsport.de',
    languages: {
      'de-DE': 'https://franke-motorsport.de',
      'x-default': 'https://franke-motorsport.de',
    },
  },
  other: {
    'google-adsense-account': 'ca-pub-2355675085639342',
    'application-name': 'Franke Motorsport',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Franke Motorsport',
    'format-detection': 'telephone=no',
    'handheld-friendly': 'true',
    'MobileOptimized': '320',
    'target-densitydpi': 'device-dpi',
    'viewport-fit': 'cover',
    'web_author': 'Franke Motorsport Team',
    'website_coverage': 'Worldwide',
    'website_distribution': 'Global',
    'content_rating': 'General',
    'revisit-after': '1 days',
    'contact_email': 'webmaster@franke-motorsport.de',
    'owner': 'Franke Motorsport',
    'url': 'https://franke-motorsport.de',
    'identifier-URL': 'https://franke-motorsport.de',
    'directory': 'submission',
    'category': 'Sports, Gaming, Entertainment, Community',
    'geo_coverage': 'Germany',
    'global_distribution': 'Global',
    'safety_rating': 'Safe For Kids',
    'copyright': 'Franke Motorsport',
    'designer': 'Franke Motorsport Team',
    'info_email': 'webmaster@franke-motorsport.de',
    'og:email': 'webmaster@franke-motorsport.de',
    'article:author': 'Franke Motorsport',
  },
  category: 'Sports & Gaming',
  classification: 'Motorsport Entertainment & Community',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  itunes: {
    appId: 'your-app-id', // Falls es eine App gibt
    appArgument: 'https://franke-motorsport.de',
  },
  appleWebApp: {
    title: 'Franke Motorsport',
    statusBarStyle: 'default',
    capable: true,
  },
};

// Viewport configuration (moved from metadata)
export const viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Google AdSense Auto-Ads Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2355675085639342"
          crossOrigin="anonymous"
        ></script>

        {/* Google Analytics via next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="ga-inline-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
  {/* Enhanced Favicon and App Icons */}
  <link rel="icon" href="/favicon.ico" sizes="48x48" />
  <link rel="apple-touch-icon" sizes="180x180" href="/franke-motorsport-logo.PNG" />
  <link rel="icon" type="image/png" sizes="512x512" href="/franke-motorsport-logo.PNG" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  
  {/* Enhanced Theme Colors */}
  <meta name="theme-color" content="#6366f1" media="(prefers-color-scheme: light)" />
  <meta name="theme-color" content="#18181b" media="(prefers-color-scheme: dark)" />
  <meta name="msapplication-TileColor" content="#18181b" />
  <meta name="msapplication-config" content="/browserconfig.xml" />
  
  {/* Performance & Preloading */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="preconnect" href="https://www.googletagmanager.com" />
  <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
  <link rel="preconnect" href="https://player.twitch.tv" />
  <link rel="preconnect" href="https://www.youtube.com" />
  
  {/* DNS Prefetch for external resources */}
  <link rel="dns-prefetch" href="//twitch.tv" />
  <link rel="dns-prefetch" href="//youtube.com" />
  <link rel="dns-prefetch" href="//racefans.net" />
  <link rel="dns-prefetch" href="//reddit.com" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Franke Motorsport" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Franke Motorsport" />
        
        {/* Enhanced Mobile Support */}
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="target-densitydpi" content="device-dpi" />
        <meta name="viewport-fit" content="cover" />
        
        {/* Social Media & Sharing */}
        <meta property="og:site_name" content="Franke Motorsport" />
        <meta property="og:locale" content="de_DE" />
        <meta property="article:author" content="Franke Motorsport" />
        <meta name="twitter:domain" content="franke-motorsport.de" />
        <meta name="twitter:url" content="https://franke-motorsport.de" />
        
        {/* Business Information */}
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Deutschland" />
        <meta name="ICBM" content="51.1657, 10.4515" />
        <meta name="geo.position" content="51.1657;10.4515" />
        
        {/* Content Classification */}
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="copyright" content="© 2024 Franke Motorsport. All rights reserved." />
        <meta name="author" content="Franke Motorsport Team" />
        <meta name="designer" content="Franke Motorsport" />
        <meta name="owner" content="Franke Motorsport" />
        <meta name="url" content="https://franke-motorsport.de" />
        <meta name="identifier-URL" content="https://franke-motorsport.de" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="Safe For Kids" />
        <meta name="revisit-after" content="1 day" />
        
        {/* Additional Structured Data - Rich Snippets */}
        <meta name="news_keywords" content="motorsport, simracing, kartsport, formula 1, f1, racing, deutschland, live stream, gaming, esports" />
        <meta name="article:section" content="Sports" />
        <meta name="article:tag" content="Motorsport,Simracing,Kartsport,Gaming,Live Stream" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
