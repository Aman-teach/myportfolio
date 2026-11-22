import React from 'react';
import ContainerTitle from "@/components/Common/ContainerTitle";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/site.config";

type Tool = {
  name: string;
  role: string;
  category: string;
  logo: string;
  bg: string;
  border: string;
  scale?: string;
};

const TOOLS: Tool[] = [
  {
    name: "Premiere Pro",
    role: "Assembly, J-Cuts & Audio Pacing",
    category: "Primary NLE",
    logo: "/images/tools/premiere.webp",
    bg: "bg-[#00005b]",
    border: "border-[#9999ff]/20",
  },
  {
    name: "After Effects",
    role: "Motion Graphics & Kinetic Typography",
    category: "VFX & Motion",
    logo: "/images/tools/aftereffects.webp",
    bg: "bg-[#00005b]",
    border: "border-[#d291ff]/20",
  },
  {
    name: "Photoshop",
    role: "Thumbnail Compositing & Brand Assets",
    category: "Image",
    logo: "/images/tools/photoshop.webp",
    bg: "bg-[#001e36]",
    border: "border-[#31a8ff]/20",
  },
  {
    name: "CapCut",
    role: "Fast Turnaround & Dynamic Captions",
    category: "Short-Form",
    logo: "/images/tools/capcut.webp",
    bg: "bg-white",
    border: "border-zinc-200",
  },
  {
    name: "Canva",
    role: "Thumbnails, Carousels & Social Graphics",
    category: "Design",
    logo: "/images/tools/canva.jpg",
    bg: "bg-white",
    border: "border-[#00C4CC]/30",
    scale: "scale-125",
  },
  {
    name: "Figma",
    role: "Instagram Grids & Clinic Brand Direction",
    category: "Layout",
    logo: "/images/tools/figma.png",
    bg: "bg-white",
    border: "border-zinc-200",
    scale: "scale-150",
  },
  {
    name: "Notion",
    role: "Project Management & Client Docs",
    category: "Workflow",
    logo: "/images/tools/notion.webp",
    bg: "bg-white",
    border: "border-zinc-200",
  },
  {
    name: "Miro",
    role: "Strategy Boards & Campaign Planning",
    category: "Planning",
    logo: "/images/tools/miro.png",
    bg: "bg-[#FFD02F]",
    border: "border-[#FFD02F]/50",
  },
];

const ToolsPage = () => {
  return (
    <>
      <SEO
        title="Tools"
        description={`The creative software stack used by ${siteConfig.name}.`}
        keywords="premiere pro, after effects, capcut, canva, figma, notion, miro, photoshop, video editor stack"
        canonicalPath="/tools"
      />
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* Apple-style Minimal Header */}
        <div className="space-y-2">
          <ContainerTitle title="The Suite" />
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Every tool in my daily post-production and brand workflow.
          </p>
        </div>

        {/* Apple Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="group relative flex flex-col justify-between p-5 rounded-2xl border border-gray-200/90 dark:border-zinc-800/80 bg-white/80 dark:bg-[#0d0e12]/80 backdrop-blur-md shadow-xs transition-all duration-300 hover:border-gray-400 dark:hover:border-zinc-600 hover:shadow-xl hover:-translate-y-1 cursor-default"
            >
              {/* App Icon */}
              <div className="flex items-center justify-between">
                <div
                  className={`w-14 h-14 rounded-2xl ${tool.bg} border ${tool.border} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 overflow-hidden`}
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className={`w-10 h-10 object-contain transition-transform duration-200 ${tool.scale || ""}`}
                  />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800/60 border border-gray-200/60 dark:border-zinc-700/60">
                  {tool.category}
                </span>
              </div>

              {/* Name & Role */}
              <div className="pt-5 space-y-1">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
                  {tool.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
                  {tool.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToolsPage;
