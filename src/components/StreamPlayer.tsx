"use client";

import { useState, useEffect } from 'react'

export function TwitchPlayer() {
  const [twitchParent, setTwitchParent] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const twitchChannel = 'frankemotorsport';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;
    
    const host = window.location.hostname;
    if (host.endsWith('.vercel.app')) {
      setTwitchParent(host);
    } else if (host !== 'localhost') {
      setTwitchParent(host);
    } else {
      setTwitchParent('localhost');
    }
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div>
        <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Live Stream</h2>
        <div className="w-full aspect-video rounded-lg bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Live Stream</h2>
      {twitchParent ? (
        <iframe
          src={`https://player.twitch.tv/?channel=${twitchChannel}&parent=${twitchParent}`}
          className="w-full aspect-video rounded-lg"
          allowFullScreen
        />
      ) : (
        <div className="w-full aspect-video flex items-center justify-center text-gray-500 border border-gray-200 rounded-lg">Lade Twitch Player...</div>
      )}
    </div>
  );
}

export function YoutubePlayer() {
  const youtubePlaylist = 'PLhZym3bCWpAQXJ1m0TWxgI1LUwdwS3Qqu';
  return (
    <div className="professional-card">
      <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">YouTube Playlist</h2>
      <iframe
        src={`https://www.youtube.com/embed/videoseries?list=${youtubePlaylist}`}
        className="w-full aspect-video rounded-lg border border-gray-200"
        allowFullScreen
      />
    </div>
  );
}
