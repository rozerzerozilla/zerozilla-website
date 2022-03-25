import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import Section1 from "../../components/Services/SotwareDevelopement/Section1";
import Section10 from "../../components/Services/SotwareDevelopement/Section10";
import Section2 from "../../components/Services/SotwareDevelopement/Section2";
import Section3 from "../../components/Services/SotwareDevelopement/Section3";
import Section4 from "../../components/Services/SotwareDevelopement/Section4";
import Section5 from "../../components/Services/SotwareDevelopement/Section5";
import Section6 from "../../components/Services/SotwareDevelopement/Section6";
import Section7 from "../../components/Services/SotwareDevelopement/Section7";
import Section8 from "../../components/Services/SotwareDevelopement/Section8";
import Section9 from "../../components/Services/SotwareDevelopement/Section9";

const SocialMediaMarketing = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
            <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
                <Section1 handleFunction={handleModal} />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 handleFunction={handleModal} />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section9 />
                <Section10 handleFunction={handleModal} />
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
        </>);
};

export default SocialMediaMarketing;
