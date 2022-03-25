import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import EcommerceSection1 from "../../components/Services/Ecommerce/EcommerceSection1";
import EcommerceSection2 from "../../components/Services/Ecommerce/EcommerceSection2";
import EcommerceSection3 from "../../components/Services/Ecommerce/EcommerceSection3";
import EcommerceSection4 from "../../components/Services/Ecommerce/EcommerceSection4";
import EcommerceSection5 from "../../components/Services/Ecommerce/EcommerceSection5";
import EcommerceSection6 from "../../components/Services/Ecommerce/EcommerceSection6";

const EcommerceApps = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <EcommerceSection1 handleFunction={handleModal} />
            <EcommerceSection2 />
            {/* <EcommerceSection3 /> */}
            <EcommerceSection4 />
            <EcommerceSection5 />
            <EcommerceSection6 />
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
    </>);
};

export default EcommerceApps;