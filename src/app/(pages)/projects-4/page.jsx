import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { ProjectsMasonry } from "@components/DynamicComponents";

import { getSortedProjectsData } from "@library/projects";

export const metadata = {
  title: {
    default: 'projects-4',
  },
  description: AppData.settings.siteDescription,
}

async function Projects() {
  const projects = await getAllProjects();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsMasonry projects={projects} categories={AppData.projects.categories} layout={'grid'} columns={3} />
      </Suspense>
    </>
  );
};
export default Projects;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}