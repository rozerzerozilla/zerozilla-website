import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import Section1 from "../../components/Services/SEO/SEOSection1";
import Section10 from "../../components/Services/SEO/SEOSection10";
import Section2 from "../../components/Services/SEO/SEOSection2";
import Section3 from "../../components/Services/SEO/SEOSection3";
import Section4 from "../../components/Services/SEO/SEOSection4";
import Section5 from "../../components/Services/SEO/SEOSection5";
import Section6 from "../../components/Services/SEO/SEOSection6";
import Section7 from "../../components/Services/SEO/SEOSection7";
import Section8 from "../../components/Services/SEO/SEOSection8";
import Section9 from "../../components/Services/SEO/SEOSection9";

const SEO = () => {
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
      <Section5 handleFunction={handleModal}/>
      <Section6 />
      {/* <Section7 /> */}
      <Section8 />
      <Section9 />
      <Section10 handleFunction={handleModal}/>
      </div>
      <Footer/>
      <ModalsForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
  </>);
};

export default SEO;
