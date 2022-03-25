import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import BrandingSection1 from "../../components/Services/Branding/BrandingSection1";
import BrandingSection2 from "../../components/Services/Branding/BrandingSection2";
import BrandingSection3 from "../../components/Services/Branding/BrandingSection3";
import BrandingSection4 from "../../components/Services/Branding/BrandingSection4";
// import BrandingSection5 from "../../components/Services/Branding/BrandingSection5";
import BrandingSection6 from "../../components/Services/Branding/BrandingSection6";
import BrandingSection7 from "../../components/Services/Branding/BrandingSection7";
import BrandingSection8 from "../../components/Services/Branding/BrandingSection8";

const BrandingServices = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
            <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
                <BrandingSection1 handleFunction={handleModal}/>
                <BrandingSection2 />
                <BrandingSection4 />
                <BrandingSection3 />
                {/* <BrandingSection5 /> */}
                <BrandingSection6 />
                <BrandingSection7 />
                <BrandingSection8 />
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
        </>);
};

export default BrandingServices;