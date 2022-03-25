import { useState } from "react";
import Section1 from "../components/Career/CareerSection1";
import Section2 from "../components/Career/CareerSection2";
import Section3 from "../components/Career/CareerSection3";
import LeadershipSection from "../components/About/LedershipSections";
import Section4 from "../components/Career/CareerSection4";
import Section5 from "../components/Career/CareerSection5";

import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import ModalsForm from "../components/Modals/ModalsForm";

const Career = () => {
    const [openModal, setOpenModal] = useState(false)
    const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
            <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
                <Section1 handleFunction={handleModal}/>
                <Section2 />
                <Section3 />
                <br />
                <br/>
                <LeadershipSection />
                <Section4 />
                {/* <Section5 /> */}
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
        </>);
}

export default Career