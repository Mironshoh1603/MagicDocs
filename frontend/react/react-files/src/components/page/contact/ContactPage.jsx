import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ContactWrapper from "./ContactWrapper";

function ContactPage() {
  return (
    <>
      <Breadcrumb pageName="Contact" pageTitle ="Contact" />
      <ContactWrapper />
    </>
  );
}

export default ContactPage;
