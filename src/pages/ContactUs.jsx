import React from "react";

import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";

import Section1 from "../components/Contact/ContactSection1";
import Section2 from "../components/Contact/ContactSection2";
import Section3 from "../components/Contact/ContactSection3";
import Section4 from "../components/Contact/ContactSetion4";

import Adresses from "../components/Contact/Adresses";
import ModalsForm from "../components/Modals/ModalsForm";

const ContactUsPage = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
  return (
    <>
      <CustomHeader />
    <div
      className="container-fluid main"
      style={{ margin: 0, padding: 0 }}
    >
        <Section1 handleFunction={handleModal}/>
        <Section2 />
        {/* <Section4 /> */}
        <Adresses />
        <Section3 />
      </div>
      <Footer />
      <ModalsForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
  </>);
};

export default ContactUsPage;
