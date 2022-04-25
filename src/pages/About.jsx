import {useEffect, useState} from "react"
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import ModalsForm from "../components/Modals/ModalsForm";
import Section1 from "../components/About/AboutSection1";
import Section2 from "../components/About/AboutSection2";
import Section3 from "../components/About/AboutSection3";
import Section4 from "../components/About/AboutSection4";
import Section5 from "../components/About/AboutSection5";
import Section6 from "../components/About/AboutSection6";
import Section7 from "../components/About/AboutSection7";
import LeadershipSection from "../components/About/LedershipSections"
const AboutPage = () => {
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
      <LeadershipSection />
      {/* <Section5 /> */}
      {/* <Section6 /> */}
      <Section7 />
      </div>
      <Footer />
      <ModalsForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
    </>
  );
};

export default AboutPage;
