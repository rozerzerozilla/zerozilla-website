import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import IpadSection1 from "../../components/Services/Ipad/IpadSection1";
import IpadSection2 from "../../components/Services/Ipad/IpadSection2";
import IpadSection3 from "../../components/Services/Ipad/IpadSection3";
import IpadSection4 from "../../components/Services/Ipad/IpadSection4";
import IpadSection5 from "../../components/Services/Ipad/IpadSection5";
import IpadSection6 from "../../components/Services/Ipad/IpadSection6";

const IpadApps = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <IpadSection1 handleFunction={handleModal}/>
            <IpadSection2 />
            {/* <IpadSection3 /> */}
            {/* <IpadSection4 /> */}
            <IpadSection5 />
            <IpadSection6 />
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
    </>);
};

export default IpadApps;