import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import IBeaconSection1 from "../../components/Services/iBeacon/iBeaconSection1";
import IBeaconSection2 from "../../components/Services/iBeacon/iBeaconSection2";
import IBeaconSection3 from "../../components/Services/iBeacon/iBeaconSection3";
import IBeaconSection4 from "../../components/Services/iBeacon/iBeaconSection4";
import IBeaconSection5 from "../../components/Services/iBeacon/iBeaconSection5";
import IBeaconSection6 from "../../components/Services/iBeacon/iBeaconSection6";

const IBeaconApps = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <IBeaconSection1 handleFunction={handleModal}/>
            <IBeaconSection2 />
            {/* <IBeaconSection3 /> */}
            {/* <IBeaconSection4 /> */}
            <IBeaconSection5 />
            <IBeaconSection6 />
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
    </>);
};

export default IBeaconApps;