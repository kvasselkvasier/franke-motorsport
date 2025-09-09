"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// YouTube API Key und Playlist-ID aus Umgebungsvariablen (API-Key als NEXT_PUBLIC_... für Client-Komponenten) funzt
const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "";
const PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID || "PLhZym3bCWpAQo8LYnZyjHVShL2O0S3t3l";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface YouTubeApiSnippet {
  resourceId: { videoId: string };
  title: string;
  thumbnails?: {
    high?: { url: string };
    default?: { url: string };
  };
}

interface YouTubeApiItem {
  snippet: YouTubeApiSnippet;
}

const YouTubePlaylistGallery = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      // Fallback-Videos wenn API-Key nicht verfügbar ist
      const fallbackVideos: Video[] = [
        {
          id: "dQw4w9WgXcQ",
          title: "Franke Motorsport - Highlights",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
        },
        {
          id: "3JZ_D3ELwOQ",
          title: "Racing Action - Live Stream",
          thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg"
        },
        {
          id: "kJQP7kiw5Fk",
          title: "Kartsport Adventures",
          thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg"
        }
      ];

      if (!YOUTUBE_API_KEY) {
        console.warn("YouTube API Key nicht verfügbar, verwende Fallback-Videos");
        setVideos(fallbackVideos);
        return;
      }

      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`
        );
        if (!res.ok) {
          console.warn("YouTube API-Fehler, verwende Fallback-Videos");
          setVideos(fallbackVideos);
          return;
        }
        const data = await res.json();
        const vids = (data.items as YouTubeApiItem[]).map((item) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url || "",
        }));
        setVideos(vids);
      } catch (e) {
        console.warn("YouTube API-Fehler, verwende Fallback-Videos:", e);
        setVideos(fallbackVideos);
      }
    }
    fetchVideos();
  }, []);

  return (
    <section id="videos" className="professional-section">
      <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">YouTube Videos</h2>
      {selectedVideo && (
        <div className="mb-6">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <button
            className="btn-secondary mt-4 px-6 py-2 rounded-lg transition-all duration-300"
            onClick={() => setSelectedVideo(null)}
          >
            ← Zurück zur Galerie
          </button>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {videos.slice(0, 10).map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video.id)}
            className="professional-card hover:shadow-lg group text-left focus:outline-none p-3 transition-all duration-300"
            aria-label={`Video abspielen: ${video.title}`}
          >
            <div className="relative aspect-video mb-3 overflow-hidden rounded-lg">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={320}
                height={180}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
                priority={true}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="text-gray-900 text-xs md:text-sm font-medium line-clamp-2 leading-tight">
              {video.title}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default YouTubePlaylistGallery;
