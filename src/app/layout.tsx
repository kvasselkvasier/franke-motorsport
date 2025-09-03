import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron'
});

export const metadata: Metadata = {
  title: "Franke Motorsport | Simracing & Kartsport Streamer",
  description: "Erlebe spannende Simracing und Kartsport Action mit Franke Motorsport. Live Streams auf Twitch, Videos auf YouTube. Jetzt folgen und supporten!",
  keywords: "simracing, motorsport, kartsport, twitch streamer, gaming, racing, formula 1, gt3, iracing, assetto corsa",
  authors: [{ name: "Franke Motorsport" }],
  creator: "Franke Motorsport",
  publisher: "Franke Motorsport",
  metadataBase: new URL('https://franke-motorsport.vercel.app'),
  openGraph: {
    title: "Franke Motorsport | Simracing & Kartsport Streamer",
    description: "Erlebe spannende Simracing und Kartsport Action mit Franke Motorsport. Live Streams auf Twitch, Videos auf YouTube.",
    url: 'https://franke-motorsport.vercel.app',
    siteName: 'Franke Motorsport',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Franke Motorsport',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franke Motorsport | Simracing & Kartsport Streamer',
    description: 'Erlebe spannende Simracing und Kartsport Action mit Franke Motorsport.',
    creator: '@frankemotorsport',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Google AdSense - Ersetzen Sie "ca-pub-XXXXXXXXX" mit Ihrer echten AdSense Publisher ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2355675085639342"
          crossOrigin="anonymous"
        ></script>
        
        {/* Optional: Google Analytics - Ersetzen Sie GA_MEASUREMENT_ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Franke Motorsport",
              "url": "https://franke-motorsport.vercel.app",
              "sameAs": [
                "https://twitch.tv/frankemotorsport",
                "https://youtube.com/@frankemotorsport"
              ],
              "jobTitle": "Simracing & Kartsport Streamer",
              "description": "Professioneller Simracing und Kartsport Content Creator"
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${orbitron.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
