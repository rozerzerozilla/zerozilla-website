import React from "react";
import Section1 from "../components/Contact/ContactSection1";
import Section3 from "../components/Contact/ContactSection3";

const ContactUsPage = () => {
  return (
    <div
      className="container-fluid main"
      style={{ margin: 0, padding: 0 }}
    >
        <Section1 />
        <Section3 />
    </div>
  );
};

export default ContactUsPage;
