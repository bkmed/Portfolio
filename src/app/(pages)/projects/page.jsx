import React, { Suspense } from "react";
import AppData from "@data/app.json";
import ProjectsMasonry from "@components/ProjectsMasonry";
import { getSortedProjectsData } from "@library/projects";

export const metadata = {
  title: {
    default: AppData.header.menu[2].children[0].label,
  },
  description: AppData.settings.siteDescription,
};

async function Projects() {
  const projects = await getAllProjects();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsMasonry projects={projects} categories={AppData.projects.categories} />
      </Suspense>
    </>
  );
}
export default Projects;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
