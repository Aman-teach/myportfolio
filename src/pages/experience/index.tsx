import React, { useState } from 'react';
import experiencesData from "@/data/experiencesData.ts";
import { Timeline } from '@/components/ui/timeline';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Play } from 'lucide-react';
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/site.config";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

type VideoReviewProps = {
  wistiaId: string;
  author: string;
  label?: string;
};

const VideoReviewCard = ({ wistiaId, author, label }: VideoReviewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const poster = `https://fast.wistia.com/embed/medias/${wistiaId}/swatch`;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group mt-2.5 inline-flex items-center gap-3 p-2 pr-4 rounded-xl border border-emerald-500/30 dark:border-emerald-500/20 bg-emerald-50/70 dark:bg-emerald-950/20 hover:bg-emerald-100/70 dark:hover:bg-emerald-950/40 hover:border-emerald-500/50 transition-all duration-200 cursor-pointer text-left shadow-xs hover:shadow-sm"
        >
          {/* Video Swatch Thumbnail with Play Icon */}
          <div className="relative w-11 h-14 rounded-lg overflow-hidden bg-black flex-shrink-0 shadow-xs">
            <Image
              src={poster}
              alt={`Review from ${author}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="44px"
            />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white/95 flex items-center justify-center text-black shadow-xs group-hover:scale-110 transition-transform">
                <Play size={10} className="fill-current ml-0.5" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
                Client Video Review
              </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100">
              {author}
            </span>
            <span className="text-[11px] text-gray-500 dark:text-zinc-400">
              {label || "Watch Byron's Video Review"} &rarr;
            </span>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-[340px] sm:max-w-[380px] p-2 bg-black/95 border-zinc-800 rounded-2xl overflow-hidden">
        <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black">
          {isOpen && (
            <iframe
              src={`https://fast.wistia.net/embed/iframe/${wistiaId}?autoPlay=true&playerColor=000000`}
              title={`Video review from ${author}`}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const JourneyPage: React.FC = () => {

  const timelineData = experiencesData.map((exp) => ({
    title: exp.date,
    content: (
      <div className='flex flex-col gap-2 text-sm'>
        <div className="flex flex-wrap items-baseline gap-2">
          <span className='text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 tracking-tight'>
            {exp.role}
          </span>
          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-zinc-400">
            &middot; {exp.companyName}
          </span>
        </div>

        <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl'>
          {exp.description}
        </p>

        {exp.points && exp.points.length > 0 && (
          <ul className="text-gray-600 dark:text-gray-300 text-xs md:text-sm space-y-1.5 pt-1">
            {exp.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-400 dark:text-gray-500 mr-2 select-none">&bull;</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {exp.videoReview && (
          <div className="pt-1">
            <VideoReviewCard {...exp.videoReview} />
          </div>
        )}

        {exp.techStack && exp.techStack.length > 0 && (
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {exp.techStack.map((tech, index) => (
                <span
                  className='text-[11px] font-medium text-gray-600 dark:text-zinc-300 bg-gray-100/80 dark:bg-zinc-800/60 px-2 py-0.5 rounded-md border border-gray-200/60 dark:border-zinc-700/60'
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }));

  return (
    <>
      <SEO
        title="Experience"
        description={`Work history and client productions for ${siteConfig.name}.`}
        keywords={`${siteConfig.name}, experience, video editor, creative lead, Raw Brand Media`}
        canonicalPath="/experience"
      />
      <div className="mx-auto space-y-3 md:space-y-6">
        <div className="relative w-full overflow-clip">
          <Timeline 
            data={timelineData} 
            title="Experience"
            description="Where I've worked, agency productions, and creator sprints."
          />
        </div>

        {siteConfig.resume && (
          <div>
            <Link
              className='flex cursor-pointer hover:underline items-center gap-2 py-6 text-sm text-gray-700 dark:text-gray-300'
              href={siteConfig.resume}
              target='_blank'
            >
              View Full Resume <ExternalLink size={12} />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default JourneyPage;
