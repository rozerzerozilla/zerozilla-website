import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import Section3 from "../../components/Services/WebDesign/ServiceSection3";
import Section4 from "../../components/Services/WebDesign/ServiceSection4";
import Section6 from "../../components/Services/WebDesign/ServiceSection6";
import Section5 from "../../components/Services/WebDesign/ServiceSecton5";
import Section1 from "../../components/Services/WebDesign/ServicesSection1";
import Section2 from "../../components/Services/WebDesign/ServicesSection2";
import Section7 from "../../components/Services/SotwareDevelopement/Section7";
import Section8 from "../../components/Services/WebDesign/ServicesSection7";

const WebDevlopment = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)

  return (
    <>
      <CustomHeader />
    <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
        <Section1 handleFunction={handleModal}/>
        <Section2 handleFunction={handleModal} />
        <Section7 />
        <Section8 />
        <Section3 />
      <Section4 />
        <Section5 />
      <Section6 handleFunction={handleModal}/>
      </div>
      <Footer />
      <ModalsForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
  </>);
};

export default WebDevlopment;
