'use client'

import { useState } from 'react'

export default function StreamPlayer() {
  const [platform, setPlatform] = useState<'twitch' | 'youtube'>('twitch')

  // Twitch parent-Domain dynamisch bestimmen
  let twitchParent = 'localhost';
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    // Vercel-Preview und Production Domains erlauben
    if (host.endsWith('.vercel.app')) {
      twitchParent = host;
    } else if (host !== 'localhost') {
      twitchParent = host;
    }
  }

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
          <iframe
            src={`https://player.twitch.tv/?channel=frankemotorsport&parent=${twitchParent}`}
            className="w-full h-full rounded"
            allowFullScreen
          />
        ) : (
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLhZym3bCWpAQXJ1m0TWxgI1LUwdwS3Qqu"
            className="w-full h-full rounded"
            allowFullScreen
          />
        )}
      </div>
    </div>
  )
}
