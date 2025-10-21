import { Suspense } from 'react';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import DonateButton from '@/components/DonateButton';
import DynamicContent from '@/components/DynamicContent';

// Spezifische Metadata für die Startseite
export const metadata: Metadata = {
  title: "Franke Motorsport | Simracing, Kartsport & Live Motorsport News",
  description: "Authentisches Familien-Racing-Team seit 2024: Simracing auf PlayStation, echte Kartrennen, Live-Streams auf Twitch, Setup-Guides auf YouTube & Community Building. Von der Konsole bis zur Rennstrecke!",
  
  // KORREKTER Canonical Tag für die Startseite
  alternates: {
    canonical: 'https://www.franke-motorsport.de',
    languages: {
      'de-DE': 'https://www.franke-motorsport.de',
      'x-default': 'https://www.franke-motorsport.de',
    },
  },
  
  // Spezifische Open Graph Tags für die Startseite
  openGraph: {
    title: "Franke Motorsport | Authentisches Familien-Racing seit 2024",
    description: "Familien-Racing-Team: PlayStation Simracing, echte Kartrennen, Live-Streams, Setup-Guides & Community Building. Authentisch, lehrreich und ohne Filter - von der Konsole bis zur Rennstrecke!",
    url: 'https://www.franke-motorsport.de',
    siteName: 'Franke Motorsport',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: '/franke-motorsport-banner.PNG',
        width: 1200,
        height: 350,
        alt: 'Franke Motorsport - Premium Simracing & Kartsport Team Deutschland',
        type: 'image/png',
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Franke Motorsport | Simracing & Kartsport',
    description: 'Authentisches Familien-Racing-Team: Von PlayStation Simracing bis zu echten Kartrennen.',
    images: ['/franke-motorsport-banner.PNG'],
  },
  
  // Robots für die Startseite
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
};

export default function Home() {

  return (
    <>
      <Navigation />
      <ScrollProgressBar />
      <main className="min-h-screen bg-white">
        
        {/* Hero Section - Server Component */}
        <HeroSection />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 space-y-12">
          
          {/* About Section - Server Component */}
          <AboutSection />
          
          {/* Dynamic Content - Client Component with Lazy Loading */}
          <DynamicContent />
          
          <DonateButton />
          
          {/* ShopLinks temporär ausgeblendet - Code beibehalten für spätere Aktivierung */}
          {/* <ShopLinks /> */}
          
        </div>
        <Footer />
      </main>
    </>
  )
}
