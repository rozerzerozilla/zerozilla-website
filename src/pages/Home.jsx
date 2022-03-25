import React, { useState, useEffect } from "react";

import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import ModalForm from "../components/Modals/ModalsForm";
import Section1 from "../components/Home/Section1";
import GoUp from "../components/GoUp";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Section5 from "../components/Home/Section5";
// import SEOChecker from "../components/Home/SEOChecker";
import Section6 from "../components/Home/Section6";
import Section8 from "../components/Home/Section8";
import Section7 from "../components/Home/Section7";
import Section9 from "../components/Home/Section9";
import Section10 from "../components/Home/Section10";
import Section11 from "../components/Home/Section11";
const HomePage = () => {

  const [openModal, setOpenModal] = useState(false)
  const handleModal = () => setOpenModal(true)
  return (
    <>
      <CustomHeader />
    <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
      <Section1 handleFunction={handleModal}/>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section9 />
      <Section6 />
      <Section7 />
      <Section8 handleFunction={handleModal} />
      <Section10 />
      <Section11 />
      </div>
      <Footer />
      <ModalForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
  </>);
};

export default HomePage;
