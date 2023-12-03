import React from "react";
import HeaderHome from "../../components/HeaderHome";
import Footer from "../../layout/Footer";
import ProjectImages from "../../components/ProjectsImages";
import Labels from "../../components/Labels";
import Features from "../../components/Features";
import Impress from "../../components/Impress";
import Popular from "../../components/Popular";
// import Posts from "../../components/Posts";
function HomePage() {
  return (
    <>
      <HeaderHome />
      <Popular />
      <ProjectImages />
      <Features />
      <Impress />
      {/* <Posts /> */}
      <Labels />
      <Footer />
    </>
  );
}

export default HomePage;
