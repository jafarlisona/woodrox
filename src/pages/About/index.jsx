import React from "react";
import Features from "../../components/Features";
import Labels from "../../components/Labels";
import ProjectImages from "../../components/ProjectsImages";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

function AboutPage() {
  return (
    <>
      <Header title="ABOUT US" prevLink="/" prevPage="Home" currentLink="/about" currentPage="About Us"/>
      <ProjectImages/>
      <Features/>
      <Labels/>
      <Footer/>
    </>
  );
}

export default AboutPage;
