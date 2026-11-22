import React from 'react';

import {getSortedPostsData} from '@/lib/projects';
import ProjectsList from "@/components/Projects/ProjectsList";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import SEO from "@/components/SEO.tsx";

import {Project} from "@/types/project.ts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type ProjectsHomeProps = {
  allPostsData: Project[]
}

const ProjectsHome = ({allPostsData}: ProjectsHomeProps) => {

  return (
    <>
      <SEO
        title="Work & Case Studies"
        description="High-retention talking heads, organic viral short-form, and client post-production case studies."
        keywords="video editing, short-form, reels, tiktok, premiere pro, capcut, byron walsh"
        canonicalPath="/projects"
      />
      <BackgroundBeamsWithCollision className="min-h-full">
        <ProjectsList posts={allPostsData}/>
      </BackgroundBeamsWithCollision>
    </>
  )
};

export default ProjectsHome;
