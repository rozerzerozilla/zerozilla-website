import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";

import ModalsForm from "../../components/Modals/ModalsForm";

import AppMarketingSection1 from "../../components/Services/AppMarketing/AppMarketingSection1";
import AppMarketingSection2 from "../../components/Services/AppMarketing/AppMarketingSection2";
import AppMarketingSection3 from "../../components/Services/AppMarketing/AppMarketingSection3";
import AppMarketingSection4 from "../../components/Services/AppMarketing/AppMarketingSection4";
import AppMarketingSection5 from "../../components/Services/AppMarketing/AppMarketingSection5";
import AppMarketingSection6 from "../../components/Services/AppMarketing/AppMarketingSection6";
import AppMarketingSection7 from "../../components/Services/AppMarketing/AppMarketingSection8";
import AppMarketingSection8 from "../../components/Services/AppMarketing/AppMarketingSection1";

const AppMarketing = () => {
    
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (<>
        <CustomHeader />
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <AppMarketingSection1 handleFunction={handleModal}/>
            <AppMarketingSection2 />
            <AppMarketingSection3 />
            <AppMarketingSection4 />
            {/* <AppMarketingSection5 /> */}
            <AppMarketingSection6 />
            <AppMarketingSection7 />
            <AppMarketingSection8 />
        </div>
        <Footer />
        <ModalsForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
    </>);
};

export default AppMarketing;