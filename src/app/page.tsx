import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import DonateButton from '@/components/DonateButton';
import DynamicContent from '@/components/DynamicContent';

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
