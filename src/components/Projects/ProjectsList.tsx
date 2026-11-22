import React from 'react';
import ContainerTitle from "@/components/Common/ContainerTitle";
import ProjectCard from "@/components/Projects/ProjectCard";
import ShortformCard from "@/components/Projects/ShortformCard";
import { shortformVideos } from "@/data/shortformVideos";
import { Project } from "@/types/project.ts";

type ProjectsListProps = {
  posts: Project[];
  minimized?: boolean;
};

const ProjectsList = ({ posts, minimized = false }: ProjectsListProps) => {
  if (!posts || posts.length === 0) {
    return <p className="text-gray-500">No projects found.</p>;
  }

  if (minimized) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Project) => (
          <ProjectCard key={post.slug} item={post} />
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto space-y-8 md:space-y-10">
      {/* Page Header */}
      <div className="space-y-1.5">
        <ContainerTitle title="Project Collection" />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          A curated collection of short-form content, viral pacing edits, and client case studies.
        </p>
      </div>

      {/* Section 1: Short-Form Content */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
          <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
            Short-Form Content
          </h2>
          <span className="text-xs text-gray-500 dark:text-zinc-400 font-mono">
            {shortformVideos.length} Videos
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {shortformVideos.map((video, index) => (
            <ShortformCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>

      {/* Section 2: Deep Dives & Client Sprints */}
      <div className="space-y-3.5 pt-2">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
          <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
            Case Studies
          </h2>
          <span className="text-xs text-gray-500 dark:text-zinc-400 font-mono">
            {posts.filter((a) => !a.hidden).length} Breakdown
          </span>
        </div>

        <div className="min-w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {posts
            .filter((a) => !a.hidden)
            .map((post: Project) => (
              <ProjectCard key={post.slug} item={post} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
