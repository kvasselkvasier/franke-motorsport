'use client'

import { useState, useEffect } from 'react'

export default function StreamPlayer() {
  const [platform, setPlatform] = useState<'twitch' | 'youtube'>('twitch');
  const [twitchParent, setTwitchParent] = useState<string | null>(null);

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
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Live Stream</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setPlatform('twitch')}
            className={`px-4 py-2 rounded ${
              platform === 'twitch' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-700 text-gray-300'
            }`}
          >
            Twitch
          </button>
          <button
            onClick={() => setPlatform('youtube')}
            className={`px-4 py-2 rounded ${
              platform === 'youtube' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-700 text-gray-300'
            }`}
          >
            YouTube
          </button>
        </div>
      </div>

      <div className="aspect-video bg-black rounded">
        {platform === 'twitch' ? (
          twitchParent ? (
            <iframe
              src={`https://player.twitch.tv/?channel=frankemotorsport&parent=${twitchParent}`}
              className="w-full h-full rounded"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">Lade Twitch Player...</div>
          )
        ) : (
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLhZym3bCWpAQXJ1m0TWxgI1LUwdwS3Qqu"
            className="w-full h-full rounded"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
