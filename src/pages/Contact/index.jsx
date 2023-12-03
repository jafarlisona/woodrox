import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

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

      <Footer />
    </>
  );
}

export default ContactPage;
