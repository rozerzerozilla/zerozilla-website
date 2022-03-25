import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";

import ModalsForm from "../../components/Modals/ModalsForm";

import Section1 from "../../components/Services/JAVA/Section1";
import Section2 from "../../components/Services/JAVA/Section2";
import Section3 from "../../components/Services/JAVA/Section3";
import Section4 from "../../components/Services/JAVA/Section4";
import Section5 from "../../components/Services/JAVA/Section5";
import Section6 from "../../components/Services/JAVA/Section6";

const JAVAApps = () => {

    const [openModal, setOpenModal] = React.useState(false)
    const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
            <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
                <Section1 handleFunction={handleModal} />
                <Section2 />
                <Section3 />
                {/* <Section4 /> */}
                <Section5 />
                <Section6 />
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
        </>
    );
};

export default JAVAApps;