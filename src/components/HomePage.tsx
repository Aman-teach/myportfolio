import Link from "next/link";
import { Blog } from "@/types/blog.ts";
import { Project } from "@/types/project.ts";

type HomePageProps = {
  featuredContent?: Blog | Project | null;
};

const HomePage = ({ featuredContent }: HomePageProps) => {
  return (
    <>
      <div className="sm:p-0 pb-2 max-w-[800px] mx-auto space-y-12 md:space-y-16">
        
        {/* Header & Bio */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-tight">
            I turn talking-head footage into videos people actually finish.
          </h1>

          <div className="text-base sm:text-lg tracking-wide font-normal space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I’m Aman, a self-taught editor from Himachal Pradesh. I’m also a college student, building my own thing on the side.
            </p>
            <p>
              I started editing on VN editor, moved to CapCut, and now I’m deep in Adobe Premiere Pro. And in between I picked up logo design, branding, and Instagram content, because I like building the whole thing, not just cutting the video. I do that for myself and for my clients.
            </p>
            <p>
              I’ve been editing real content for about 2 years and I love editing short-form that builds trust between a creator and their viewer, because trust is what eventually turns into revenue. So I focus on storytelling: a video that makes its point clearly, so the viewer gets the idea without having to work for it.
            </p>
          </div>
        </div>

        {/* Featured Showreel */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Featured Showreel</h3>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 shadow-sm transition-all hover:shadow-md">
            <iframe 
              src="https://player.vimeo.com/video/76979871?title=0&byline=0&portrait=0" 
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Selected Case Study Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Selected Case Study</h3>
            <span className="text-xs text-gray-400 font-mono">01 / Featured</span>
          </div>

          <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-b from-gray-50/80 to-transparent dark:from-gray-900/40 dark:to-transparent p-6 sm:p-8 space-y-6 transition-all hover:border-gray-300 dark:hover:border-gray-700">
            {/* Badges / Meta row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                ● 0 Ad Spend
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                Instagram Growth
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                Forex Trading
              </span>
              <span className="sm:ml-auto text-xs text-gray-500 font-medium">
                Byron Walsh · 90 Days
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
                58 followers to 3,015 in 90 days
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                I ran his Instagram end to end: strategy, profile, content and editing. One reel hit 222K views with zero ad spend.
              </p>
            </div>

            {/* Metrics Dashboard Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  3,015
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                  Followers <span className="text-emerald-600 dark:text-emerald-400">(from 58)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  222K
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                  Best Reel Views
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  237K
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                  Peak Monthly Views
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  100+
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                  Posts Delivered
                </div>
              </div>
            </div>

            {/* Read Case Study Action */}
            <div className="pt-2 flex items-center justify-between border-t border-gray-200/60 dark:border-gray-800/60">
              <Link
                href="/projects/byron-walsh"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>Read the full case study</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>


        {/* CTA */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 space-y-6">
           <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
             Building a personal brand and need content that grows? I’m one DM away.
           </p>
           <div className="flex gap-4">
             <Link href="https://calendly.com/" target="_blank" className="px-6 py-2.5 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium rounded-lg hover:opacity-90 transition-opacity">
               Get in touch
             </Link>
             <Link href="#" className="px-6 py-2.5 bg-transparent text-gray-900 dark:text-gray-100 font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
               Say hi on X
             </Link>
           </div>
        </div>

      </div>
    </>
  );
};

export default HomePage;
