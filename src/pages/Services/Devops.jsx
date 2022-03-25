import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import Section1 from "../../components/Services/Devops/DevopsSection1";
import Section2 from "../../components/Services/Devops/DevopsSection2";
import Section3 from "../../components/Services/Devops/DevopsSection3";
import Section4 from "../../components/Services/Devops/DevopsSection4";
import Section5 from "../../components/Services/Devops/DevopsSection5";
import Section6 from "../../components/Services/Devops/DevopsSection6";
import Section7 from "../../components/Services/Devops/DevopsSection7";
import Section8 from "../../components/Services/Devops/DevopsSection8";
import Section9 from "../../components/Services/Devops/DevopsSection9";
import Section10 from "../../components/Services/Devops/DevopsSection10";


const Devops = () => {
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
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
        </>);
};

export default Devops;