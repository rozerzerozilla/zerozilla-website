import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import LaravelSection1 from "../../components/Services/Laravel/LaravelSection1";
import LaravelSection2 from "../../components/Services/Laravel/LaravelSection2";
import LaravelSection3 from "../../components/Services/Laravel/LaravelSection3";
import LaravelSection4 from "../../components/Services/Laravel/LaravelSection4";
import LaravelSection5 from "../../components/Services/Laravel/LaravelSection5";
import LaravelSection6 from "../../components/Services/Laravel/LaravelSection6";
import LaravelSection7 from "../../components/Services/Laravel/LaravelSection7";
import LaravelSection8 from "../../components/Services/Laravel/LaravelSection8";

const LaravelServices = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
            <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
                <LaravelSection1 handleFunction={handleModal}/>
                <LaravelSection2 />
                <LaravelSection3 />
                {/* <LaravelSection4 /> */}
                {/* <LaravelSection5 /> */}
                <LaravelSection6 />
                <LaravelSection7 />
                <LaravelSection8 handleFunction={handleModal}/>
            </div>
            <Footer /><ModalsForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
        </>);
};

export default LaravelServices;