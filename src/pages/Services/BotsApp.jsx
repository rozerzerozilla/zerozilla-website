import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import BotsSection1 from "../../components/Services/Bots/BotsSection1";
import BotsSection2 from "../../components/Services/Bots/BotsSection2";
import BotsSection3 from "../../components/Services/Bots/BotsSection3";
import BotsSection4 from "../../components/Services/Bots/BotsSection4";
import BotsSection5 from "../../components/Services/Bots/BotsSection5";
import BotsSection6 from "../../components/Services/Bots/BotsSection6";

const BotsApps = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader/>
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <BotsSection1 handleFunction={handleModal}/>
            <BotsSection2 />
            {/* <BotsSection3 /> */}
            {/* <BotsSection4 /> */}
            <BotsSection5 />
            <BotsSection6 />
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
        </>);
};

export default BotsApps;