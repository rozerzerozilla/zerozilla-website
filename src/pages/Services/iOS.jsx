import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import IOSSection1 from "../../components/Services/iOS/iOSSection1";
import IOSSection2 from "../../components/Services/iOS/iOSSection2";
import IOSSection3 from "../../components/Services/iOS/iOSSection3";
import IOSSection4 from "../../components/Services/iOS/iOSSection4";
import IOSSection5 from "../../components/Services/iOS/iOSSection5";
import IOSSection6 from "../../components/Services/iOS/iOSSection6";

const IOSApps = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <IOSSection1 handleFunction={handleModal}/>
            <IOSSection2 />
            {/* <IOSSection3 /> */}
            {/* <IOSSection4 /> */}
            <IOSSection5 />
            <IOSSection6 />
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
    </>);
};

export default IOSApps;