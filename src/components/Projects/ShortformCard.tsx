import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { ShortformVideo } from '@/data/shortformVideos';

type ShortformCardProps = {
  video: ShortformVideo;
  index?: number;
};

const ShortformCard = ({ video, index = 0 }: ShortformCardProps) => {
  const { title, wistiaId, thumbnail } = video;
  const [isPlaying, setIsPlaying] = useState(false);

  const posterImage = thumbnail || (wistiaId ? `https://embed-ssl.wistia.com/deliveries/${wistiaId}.jpg?image_crop_resized=720x1280` : "");
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800/90 bg-white dark:bg-[#0d0e12] shadow-sm transition-all duration-300 hover:border-gray-400 dark:hover:border-zinc-600 hover:shadow-xl">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50/80 dark:bg-[#121318] border-b border-gray-100 dark:border-zinc-800/70">
        <span className="text-[10px] font-mono font-medium text-gray-500 dark:text-zinc-400">
          {formattedIndex} / SHORT-FORM
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Talking Head
        </span>
      </div>

      {/* 9:16 Video Frame */}
      <div 
        className="relative w-full aspect-[9/16] bg-black overflow-hidden cursor-pointer select-none"
        onClick={() => setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe
            src={`https://fast.wistia.net/embed/iframe/${wistiaId}?autoPlay=true&playerColor=000000`}
            title={title || "Video edit"}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : (
          <div className="relative w-full h-full">
            {posterImage && (
              <Image
                src={posterImage}
                alt={title || "Video edit"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}

            {/* Subtle Gradient & Centered Play Button */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-13 h-13 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-200 group-hover:scale-110 group-hover:bg-white group-hover:text-black shadow-xl">
                <Play size={22} className="fill-current ml-0.5" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Brand Bar (Exact match to reference site) */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-gray-50/80 dark:bg-[#121318] border-t border-gray-100 dark:border-zinc-800/70">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0 bg-zinc-700 relative">
            <Image
              src="/images/avatar.png"
              alt="Aman"
              width={20}
              height={20}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
            Aman
          </span>
        </div>

        <span className="text-[11px] font-mono text-gray-500 dark:text-zinc-400">
          Premiere Pro
        </span>
      </div>
    </div>
  );
};

export default ShortformCard;
