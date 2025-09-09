"use client";

import { useState, useEffect } from 'react'
export function TwitchPlayer() {
  const [twitchParent, setTwitchParent] = useState<string | null>(null);
  const twitchChannel = 'frankemotorsport';
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      if (host.endsWith('.vercel.app')) {
        setTwitchParent(host);
      } else if (host !== 'localhost') {
        setTwitchParent(host);
      } else {
        setTwitchParent('localhost');
      }
    }
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-heading font-semibold mb-6 text-gray-900">Live Stream</h2>
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
      <h2 className="text-2xl font-heading font-semibold mb-6 text-gray-900">YouTube Playlist</h2>
      <iframe
        src={`https://www.youtube.com/embed/videoseries?list=${youtubePlaylist}`}
        className="w-full aspect-video rounded-lg border border-gray-200"
        allowFullScreen
      />
    </div>
  );
}
