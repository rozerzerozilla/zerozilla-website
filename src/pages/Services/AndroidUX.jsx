import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";

import ModalsForm from "../../components/Modals/ModalsForm";

import AndroidUXSection1 from "../../components/Services/AndroidUX/AndroidUXSection1";
import AndroidUXSection2 from "../../components/Services/AndroidUX/AndroidUXSection2";
import AndroidUXSection3 from "../../components/Services/AndroidUX/AndroidUXSection3";
import AndroidUXSection4 from "../../components/Services/AndroidUX/AndroidUXSection4";
import AndroidUXSection5 from "../../components/Services/AndroidUX/AndroidUXSection5";
import AndroidUXSection6 from "../../components/Services/AndroidUX/AndroidUXSection6";

const AndroidUXDesign = () => {
    
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (<>
        <CustomHeader />
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <AndroidUXSection1 handleFunction={handleModal}/>
            <AndroidUXSection2 />
            {/* <AndroidUXSection3 /> */}
            {/* <AndroidUXSection4 /> */}
            <AndroidUXSection5 />
            <AndroidUXSection6 />
        </div>
        <Footer/>
        <ModalsForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
    </>);
};

export default AndroidUXDesign;