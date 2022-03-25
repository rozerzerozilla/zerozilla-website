import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import HybridSection1 from "../../components/Services/Hybrid/HybridSection1";
import HybridSection2 from "../../components/Services/Hybrid/HybridSection2";
import HybridSection3 from "../../components/Services/Hybrid/HybridSection3";
import HybridSection4 from "../../components/Services/Hybrid/HybridSection4";
import HybridSection5 from "../../components/Services/Hybrid/HybridSection5";
import HybridSection6 from "../../components/Services/Hybrid/HybridSection6";

const HybridApps = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <HybridSection1 handleFunction={handleModal}/>
            <HybridSection2 />
            {/* <HybridSection3 /> */}
            <HybridSection4 />
            <HybridSection5 />
            <HybridSection6 />
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
    </>);
};

export default HybridApps;