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
    <section className="bg-gradient-to-br from-purple-900/60 to-gray-800/80 rounded-lg p-6 w-full mb-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-400">Twitch Livestream</h2>
      {twitchParent ? (
        <iframe
          src={`https://player.twitch.tv/?channel=${twitchChannel}&parent=${twitchParent}`}
          className="w-full aspect-video rounded mb-4 border-2 border-purple-600"
          allowFullScreen
        />
      ) : (
        <div className="w-full aspect-video flex items-center justify-center text-gray-400 mb-4">Lade Twitch Player...</div>
      )}
    </section>
  );
}

export function YoutubePlayer() {
  const youtubePlaylist = 'PLhZym3bCWpAQXJ1m0TWxgI1LUwdwS3Qqu';
  return (
    <section className="bg-gradient-to-br from-red-900/60 to-gray-800/80 rounded-lg p-6 w-full mb-8">
      <h2 className="text-2xl font-bold mb-4 text-red-400">YouTube Playlist</h2>
      <iframe
        src={`https://www.youtube.com/embed/videoseries?list=${youtubePlaylist}`}
        className="w-full aspect-video rounded mb-4 border-2 border-red-600"
        allowFullScreen
      />
    </section>
  );
}
