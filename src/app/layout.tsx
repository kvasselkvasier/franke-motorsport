import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron'
});

export const metadata: Metadata = {
  title: "Franke Motorsport | Simracing, Kartsport & Livestreams",
  description: "Franke Motorsport bietet Simracing, Kartsport, Livestreams, Tipps, Setups und Motorsport-Community. Jetzt Streams & Videos entdecken!",
  keywords: "simracing, motorsport, kartsport, twitch streamer, gaming, racing, formula 1, gt3, iracing, assetto corsa, livestream, setup, community, youtube, esports, kart, motorsport blog, racing team",
  authors: [{ name: "Franke Motorsport" }],
  creator: "Franke Motorsport",
  publisher: "Franke Motorsport",
  metadataBase: new URL('https://franke-motorsport.vercel.app'),
  openGraph: {
    title: "Franke Motorsport | Simracing, Kartsport & Livestreams",
    description: "Franke Motorsport bietet Simracing, Kartsport, Livestreams, Tipps, Setups und Motorsport-Community.",
    url: 'https://franke-motorsport.vercel.app',
    siteName: 'Franke Motorsport',
    images: [
      {
        url: '/franke-motorsport-banner.png',
        width: 1200,
        height: 350,
        alt: 'Franke Motorsport Banner',
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
  <link rel="apple-touch-icon" sizes="180x180" href="/franke-motorsport-logo.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="/franke-motorsport-logo.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Franke Motorsport",
              "url": "https://franke-motorsport.vercel.app",
              "logo": "https://franke-motorsport.vercel.app/franke-motorsport-logo.png",
              "sameAs": [
                "https://twitch.tv/frankemotorsport",
                "https://youtube.com/@frankemotorsport"
              ],
              "description": "Simracing, Kartsport, Livestreams, Tipps, Setups und Motorsport-Community."
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
