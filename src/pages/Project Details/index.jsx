import React from "react";
import Details from "../../components/Details";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

function ProjectDetailsPage() {
  return (
    <>
      <Header
        title="PROJECT DETAILS"
        prevLink="/projects"
        prevPage="Projects"
        currentLink="/project-details"
        currentPage="Project Details"
      />
      <Details />
      <Footer />
    </>
  );
}

export default ProjectDetailsPage;
