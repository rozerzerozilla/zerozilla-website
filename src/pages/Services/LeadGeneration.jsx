import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import Section1 from "../../components/Services/Lead-Generation/LeadGenerateSection1";
import Section2 from "../../components/Services/Lead-Generation/LeadGenerateSection2";
import Section3 from "../../components/Services/Lead-Generation/LeadGenerateSection3";
import Section4 from "../../components/Services/Lead-Generation/LeadGenerateSection4";
import Section5 from "../../components/Services/Lead-Generation/LeadGenerateSection5";
import Section6 from "../../components/Services/Lead-Generation/LeadGenerateSection6";
import Section7 from "../../components/Services/Lead-Generation/LeadGenerateSection7";
import Section8 from "../../components/Services/Lead-Generation/LeadGenerateSection8";
import Section9 from "../../components/Services/Lead-Generation/LeadGenerateSection9";

const LeadGeneration = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
  return (
    <>
      <CustomHeader />
    <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
      <Section1 handleFunction={handleModal}/>
      <Section2 />
      <Section3 />
      <Section4 handleFunction={handleModal}/>
      <Section5 />
      {/* <Section6 /> */}
      <Section7 />
      <Section8/>
        <Section9 handleFunction={handleModal} />
      </div>
      <Footer />
      <ModalsForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
  </>);
};

export default LeadGeneration;
