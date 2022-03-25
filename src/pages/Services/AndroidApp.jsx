import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";

import ModalsForm from "../../components/Modals/ModalsForm";

import AndroidSection1 from "../../components/Services/Android/AndroidSection1";
import AndroidSection2 from "../../components/Services/Android/AndroidSection2";
import AndroidSection3 from "../../components/Services/Android/AndroidSection3";
import AndroidSection4 from "../../components/Services/Android/AndroidSection4";
import AndroidSection5 from "../../components/Services/Android/AndroidSection5";
import AndroidSection6 from "../../components/Services/Android/AndroidSection6";

const AndroidApps = () => {
    
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <AndroidSection1 handleFunction={handleModal}/>
            <AndroidSection2 />
            {/* <AndroidSection3 /> */}
            <AndroidSection4 />
            <AndroidSection5 />
            <AndroidSection6 />
            </div>
            <Footer/>
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
        </>
    );
};

export default AndroidApps;