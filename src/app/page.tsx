"use client";
import { TwitchPlayer, YoutubePlayer } from '@/components/StreamPlayer'
import Banner from '@/components/Banner'
import YouTubePlaylistGallery from '@/components/RumbleGallery'
import ShopLinks from '@/components/ShopLinks'
import DonateButton from '@/components/DonateButton'
import AdSense from '@/components/AdSense'
import Logo from '@/components/Logo'
import { useEffect } from 'react'
// Animationen werden mit Tailwind CSS und eigenen Klassen umgesetzt

export default function Home() {
  // Scrollbar-Progressbar Animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollBar = document.getElementById('scroll-progress-bar');
      if (!scrollBar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollBar.style.width = percent + '%';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="scroll-progress-bar"></div>
      <main className="min-h-screen bg-gray-900 text-white">
      {/* Header */}

      {/* Banner */}
      <Banner />


      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="fade-in-up delay-100">
          <TwitchPlayer />
        </div>
        <AdSense 
          adSlot="8938787528" 
          adFormat="horizontal"
          fullWidth={true}
          className="my-6"
        />
        <div className="fade-in-up delay-200">
          <YoutubePlayer />
        </div>
        <AdSense 
          adSlot="1706616022" 
          adFormat="horizontal"
          fullWidth={true}
          className="my-6"
        />
        <YouTubePlaylistGallery />
        <AdSense 
          adSlot="2827577269" 
          adFormat="horizontal"
          fullWidth={true}
          className="my-6"
        />
        <div className="fade-in-up delay-300">
          <DonateButton />
        </div>
        <AdSense 
          adSlot="5956852220" 
          adFormat="horizontal"
          fullWidth={true}
          className="my-6"
        />
        <div className="fade-in-up delay-400">
          <ShopLinks />
        </div>
        <AdSense 
          adSlot="6472406283" 
          adFormat="rectangle"
          className="mt-8"
        />
        <div className="text-center mt-8 fade-in-up delay-500">
          <a href="/impressum" className="text-xs text-gray-400 hover:text-red-400 underline transition-colors">Impressum</a>
        </div>
      </div>
      </main>
    </>
  )
}