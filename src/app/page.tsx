"use client";
import { TwitchPlayer } from '@/components/StreamPlayer'
import YouTubePlaylistGallery from '@/components/RumbleGallery'
// import ShopLinks from '@/components/ShopLinks' // Temporär ausgeblendet
import DonateButton from '@/components/DonateButton'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import NewsSection from '@/components/NewsSection'
import { useEffect, useState } from 'react'
// Animationen werden mit Tailwind CSS und eigenen Klassen umgesetzt

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  // Hydration Fix - nur nach dem Mounting ausführen
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scrollbar-Progressbar Animation - nur nach Hydration
  useEffect(() => {
    if (!isMounted) return;
    
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
  }, [isMounted]);

  // Verhindere Hydration-Fehler durch frühe Rückkehr
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Navigation />
      <div id="scroll-progress-bar"></div>
      <main className="min-h-screen bg-white">
      
      {/* Professional Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold mb-6 text-gray-900 tracking-tight">
            Franke Motorsport
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professionelles Simracing • Kartsport • Live-Streams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://twitch.tv/frankemotorsport" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 px-8 py-4 text-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
              </svg>
              <span>Live Stream anschauen</span>
            </a>
            <a 
              href="#videos" 
              className="btn-secondary inline-flex items-center space-x-2 px-8 py-4 text-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Videos entdecken</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        
        {/* About Section - Professional */}
        <section id="about" className="professional-section">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold mb-6 text-gray-900">Über Franke Motorsport</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Franke Motorsport zeigt die Aktivitäten unserer Familie im Simracing, Kartsport und Motorsport. Wir sind gemeinsam auf der PlayStation im Simracing unterwegs, nehmen am Kartslalom und an Rundstreckenrennen teil und besuchen regelmäßig spannende Motorsport-Veranstaltungen.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Folge uns, schau rein und unterstütze unser Familienprojekt mit einer Spende, damit wir noch mehr Motorsport-Momente erleben und teilen können. Wir freuen uns auf dich im Stream und auf der Strecke! 
              </p>
            </div>
          </div>
        </section>
        
        {/* Live Stream Section */}
        <section id="streams" className="professional-section">
          <TwitchPlayer />
        </section>
        
        {/* YouTube Video Gallery */}
        <YouTubePlaylistGallery />
        
        {/* News Section */}
        <NewsSection />
        
        <DonateButton />
        
        {/* ShopLinks temporär ausgeblendet - Code beibehalten für spätere Aktivierung */}
        {/* <ShopLinks /> */}
        
      </div>
      <Footer />
      </main>
    </>
  )
}
