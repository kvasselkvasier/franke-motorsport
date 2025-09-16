'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load heavy components in Client Component
const TwitchPlayer = dynamic(() => import('@/components/StreamPlayer').then(mod => ({ default: mod.TwitchPlayer })), {
  loading: () => (
    <div className="professional-section">
      <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Live Stream</h2>
      <div className="w-full aspect-video rounded-lg bg-gray-200 animate-pulse flex items-center justify-center">
        <span className="text-gray-500">Loading Stream...</span>
      </div>
    </div>
  ),
  ssr: false
});

const YouTubePlaylistGallery = dynamic(() => import('@/components/RumbleGallery'), {
  loading: () => (
    <div className="professional-section">
      <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-video bg-gray-200 animate-pulse rounded-lg"></div>
        ))}
      </div>
    </div>
  ),
  ssr: false
});

const NewsSection = dynamic(() => import('@/components/NewsSection'), {
  loading: () => (
    <div className="professional-section">
      <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Aktuelle Motorsport News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
        ))}
      </div>
    </div>
  ),
  ssr: false
});

export default function DynamicContent() {
  return (
    <>
      {/* Live Stream Section - Lazy Loaded */}
      <Suspense fallback={
        <section id="streams" className="professional-section">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Live Stream</h2>
          <div className="w-full aspect-video rounded-lg bg-gray-200 animate-pulse flex items-center justify-center">
            <span className="text-gray-500">Loading Stream...</span>
          </div>
        </section>
      }>
        <section id="streams" className="professional-section">
          <TwitchPlayer />
        </section>
      </Suspense>
      
      {/* YouTube Video Gallery - Lazy Loaded */}
      <Suspense fallback={
        <section className="professional-section">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-video bg-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </section>
      }>
        <YouTubePlaylistGallery />
      </Suspense>
      
      {/* News Section - Lazy Loaded */}
      <Suspense fallback={
        <section className="professional-section">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Aktuelle Motorsport News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </section>
      }>
        <NewsSection />
      </Suspense>
    </>
  );
}