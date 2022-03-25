import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import WebDevSection1 from "../../components/Services/WebDevlopment/WebDevSection1";
import WebDevSection2 from "../../components/Services/WebDevlopment/WebDevSection2";
import WebDevSection3 from "../../components/Services/WebDevlopment/WebDevSection3";
import WebDevSection4 from "../../components/Services/WebDevlopment/WebDevSection4";
import WebDevSection5 from "../../components/Services/WebDevlopment/WebDevSection5";
import WebDevSection6 from "../../components/Services/WebDevlopment/WebDevSection6";
import WebDevSection7 from "../../components/Services/WebDevlopment/WebDevSection7";

const WebDevlopmentServices = () => {
    const [openModal, setOpenModal] = React.useState(false)
    const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
            <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
                <WebDevSection1 handleFunction={handleModal}/>
                <WebDevSection2 />
                <WebDevSection4 />
                <WebDevSection3 />
                {/* <WebDevSection5 /> */}
                <WebDevSection6 />
                <WebDevSection7 />
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
        </>);
};

export default WebDevlopmentServices;