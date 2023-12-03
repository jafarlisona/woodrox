import React from "react";
import CompletedProjects from "../../components/CompletedProjects";
import ProjectImages from "../../components/ProjectsImages";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

function ProjectPage() {
  return (
    <>
      <Header
        title="PROJECTS"
        prevLink="/"
        prevPage="Home"
        currentLink="/projects"
        currentPage="Projects"
      />
      <CompletedProjects />
      <ProjectImages />
      <Footer />
    </>
  );
}

export default ProjectPage;
