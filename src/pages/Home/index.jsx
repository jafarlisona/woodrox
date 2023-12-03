import React from "react";
import HeaderHome from "../../components/HeaderHome";
import Footer from "../../layout/Footer";
import ProjectImages from "../../components/ProjectsImages";
import Labels from "../../components/Labels";
import Features from "../../components/Features";
function HomePage() {
  return (
    <>
      <HeaderHome />
      <ProjectImages />
      <Features/>
      <Labels />
      <Footer />
    </>
  );
}

export default HomePage;
