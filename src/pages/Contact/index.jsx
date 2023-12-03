import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Contact from "../../components/ContactContent";

function ContactPage() {
  return (
    <>
      <Header
        title="CONTACT US"
        prevLink="/"
        prevPage="Home"
        currentLink="/contact"
        currentPage="CONTACT US"
      />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;
