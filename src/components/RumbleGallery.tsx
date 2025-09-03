"use client";
import React, { useState, useEffect } from "react";

// Trage hier deinen YouTube Data API Key und die Playlist-ID ein
const YOUTUBE_API_KEY = "AIzaSyCRQ6JaCb-6-pCYg6Wr-LnrsJdKW1LZa9U";
const PLAYLIST_ID = "PLhZym3bCWpAQo8LYnZyjHVShL2O0S3t3l";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

const YouTubePlaylistGallery = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`
        );
        if (!res.ok) throw new Error("Fehler beim Laden der Playlist");
        const data = await res.json();
        const vids = data.items.map((item: any) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url || "",
        }));
        setVideos(vids);
      } catch (e: any) {
        setError(e.message || "Unbekannter Fehler");
      }
    }
    fetchVideos();
  }, []);

  return (
    <section className="bg-gradient-to-br from-orange-900/60 to-gray-800/80 rounded-lg p-6 w-full mb-8">
      <h2 className="text-2xl font-bold mb-4 text-orange-400">YouTube Playlist Galerie</h2>
  {error && <div className="text-red-200 mb-4 font-semibold">{error}</div>}
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
            className="mt-2 px-4 py-1 bg-primary text-white rounded hover:bg-primary-dark transition"
            onClick={() => setSelectedVideo(null)}
          >
            Galerie anzeigen
          </button>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {videos.slice(0, 10).map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video.id)}
            className="block group text-left focus:outline-none"
            aria-label={`Video abspielen: ${video.title}`}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-36 md:h-40 lg:h-44 object-cover rounded-lg border-2 border-orange-300 group-hover:border-white transition"
            />
            <div className="mt-2 text-orange-50 text-xs md:text-sm font-semibold truncate">
              {video.title}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default YouTubePlaylistGallery;
