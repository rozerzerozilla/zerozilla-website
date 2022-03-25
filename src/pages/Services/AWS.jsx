import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";

import ModalsForm from "../../components/Modals/ModalsForm";

import Section1 from "../../components/Services/AWS/AWSSection1";
import Section2 from "../../components/Services/AWS/AWSSection2";
import Section3 from "../../components/Services/AWS/AWSSection3";
import Section4 from "../../components/Services/AWS/AWSSection4";
import Section5 from "../../components/Services/AWS/AWSSection5";
import Section6 from "../../components/Services/AWS/AWSSection6";
import Section7 from "../../components/Services/AWS/AWSSection7";
import Section8 from "../../components/Services/AWS/AWSSection8";
import Section9 from "../../components/Services/AWS/AWSSection9";
import Section10 from "../../components/Services/AWS/AWSSection10";

const AWS = () => {
    
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
            {/* <Section7 /> */}
            <Section8 />
            <Section9 />
            <Section10 />
            </div>
            <Footer/>
            <ModalsForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
    </>);
};

export default AWS;