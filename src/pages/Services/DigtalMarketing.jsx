import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import Section1 from "../../components/Services/Digital-Marketing/DigitalMarketSection1";
import Section2 from "../../components/Services/Digital-Marketing/DigitalMarketSection2";
import Section3 from "../../components/Services/Digital-Marketing/DigitalMarketSection3";
import Section4 from "../../components/Services/Digital-Marketing/DigitalMarketSection4";
import Section5 from "../../components/Services/Digital-Marketing/DigitalMarketSection5";
import Section6 from "../../components/Services/Digital-Marketing/DigitalMarketSection6";
import Section7 from "../../components/Services/Digital-Marketing/DigitalMarketSection7";

const ServicePage3 = () => {
  const [openModal, setOpenModal] = React.useState(false)
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
      <Section6 />
      <Section7 />
      </div>
      <Footer />
      <ModalsForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
  </>);
};

export default ServicePage3;
