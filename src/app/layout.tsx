import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Franke Motorsport | Simracing, Kartsport & Livestreams",
  description: "Franke Motorsport bietet Simracing, Kartsport, Livestreams, Tipps, Setups und Motorsport-Community. Jetzt Streams & Videos entdecken!",
  keywords: [
    "simracing", "motorsport", "kartsport", "twitch streamer", "gaming", "racing", 
    "formula 1", "gt3", "iracing", "assetto corsa", "livestream", "setup", 
    "community", "youtube", "esports", "kart", "motorsport blog", "racing team",
    "franke motorsport", "simracing deutschland", "kartsport livestream"
  ],
  authors: [{ name: "Franke Motorsport" }],
  creator: "Franke Motorsport",
  publisher: "Franke Motorsport",
  metadataBase: new URL('https://franke-motorsport.de'),
  openGraph: {
    title: "Franke Motorsport | Simracing, Kartsport & Livestreams",
    description: "Franke Motorsport bietet Simracing, Kartsport, Livestreams, Tipps, Setups und Motorsport-Community.",
    url: 'https://franke-motorsport.de',
    siteName: 'Franke Motorsport',
    images: [
      {
        url: '/franke-motorsport-banner.png',
        width: 1200,
        height: 350,
        alt: 'Franke Motorsport Banner - Simracing und Kartsport',
      },
      {
        url: '/franke-motorsport-logo.png',
        width: 512,
        height: 512,
        alt: 'Franke Motorsport Logo',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franke Motorsport | Simracing, Kartsport & Livestreams',
    description: 'Franke Motorsport: Simracing, Kartsport, Livestreams, Tipps, Setups und Community.',
    creator: '@frankemotorsport',
    images: ['/franke-motorsport-banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Durch echten Google Search Console Code ersetzen
  },
  alternates: {
    canonical: 'https://franke-motorsport.de',
  },
  other: {
    'google-adsense-account': 'ca-pub-2355675085639342',
  },
  category: 'sports',
  classification: 'Motorsport Entertainment',
  referrer: 'origin-when-cross-origin',
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
        
        {/* Structured Data für SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://franke-motorsport.de/#organization",
                  "name": "Franke Motorsport",
                  "url": "https://franke-motorsport.de",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://franke-motorsport.de/franke-motorsport-logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "description": "Familien-Motorsport Team für Simracing, Kartsport und Livestreams",
                  "sameAs": [
                    "https://twitch.tv/frankemotorsport",
                    "https://youtube.com/@frankemotorsport"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "availableLanguage": "German"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://franke-motorsport.de/#website",
                  "url": "https://franke-motorsport.de",
                  "name": "Franke Motorsport",
                  "description": "Franke Motorsport - Simracing, Kartsport, Livestreams und Community",
                  "publisher": {
                    "@id": "https://franke-motorsport.de/#organization"
                  },
                  "inLanguage": "de-DE",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://franke-motorsport.de/?search={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://franke-motorsport.de/"
                    }
                  ]
                }
              ]
            })
          }}
        />
        
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/franke-motorsport-logo.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="/franke-motorsport-logo.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#6366f1" />
  <meta name="msapplication-TileColor" content="#18181b" />
  <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Franke Motorsport" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Franke Motorsport" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Franke Motorsport",
              "url": "https://franke-motorsport.de",
              "logo": "https://franke-motorsport.de/franke-motorsport-logo.png",
              "sameAs": [
                "https://twitch.tv/frankemotorsport",
                "https://youtube.com/@frankemotorsport"
              ],
              "description": "Simracing, Kartsport, Livestreams, Tipps, Setups und Motorsport-Community."
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
