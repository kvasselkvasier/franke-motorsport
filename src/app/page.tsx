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
              className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-medium transition-all duration-200 text-white rounded-md transform hover:scale-105 hover:shadow-lg"
              style={{ 
                background: '#9146FF',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#7c3aed';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#9146FF';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
              </svg>
              <span>Live Stream anschauen</span>
            </a>
            <a 
              href="#videos" 
              className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-medium transition-all duration-200 text-white rounded-md transform hover:scale-105 hover:shadow-lg"
              style={{ 
                background: '#FF0000',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#dc2626';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FF0000';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Videos entdecken</span>
            </a>
            <a 
              href="https://instagram.com/franke_motorsport" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-medium transition-all duration-200 text-white rounded-md transform hover:scale-105 hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(45deg, #E4405F, #F56040, #FFDC80)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(45deg, #d63384, #f57c00, #ffa726)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(45deg, #E4405F, #F56040, #FFDC80)';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram folgen</span>
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
