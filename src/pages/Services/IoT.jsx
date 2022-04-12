import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import IoTSection1 from "../../components/Services/IoT/IoTSection1";
import IoTSection2 from "../../components/Services/IoT/IoTSection2";
import IoTSection3 from "../../components/Services/IoT/IoTSection3";
import IoTSection4 from "../../components/Services/IoT/IoTSection4";
import IoTSection5 from "../../components/Services/IoT/IoTSection5";
import IoTSection6 from "../../components/Services/IoT/IoTSection6";

const IoTApps = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <IoTSection1 handleFunction={handleModal}/>
            <IoTSection2 />
            {/* <IoTSection3 /> */}
            {/* <IoTSection4 /> */}
            <IoTSection5 />
            <IoTSection6 />
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
    </>);
};

export default IoTApps;