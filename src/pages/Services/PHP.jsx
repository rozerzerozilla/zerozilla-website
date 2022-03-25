import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import PHPSection1 from "../../components/Services/PHP/PHPSection1";
import PHPSection2 from "../../components/Services/PHP/PHPSection2";
import PHPSection3 from "../../components/Services/PHP/PHPSection3";
import PHPSection4 from "../../components/Services/PHP/PHPSection4";
import PHPSection5 from "../../components/Services/PHP/PHPSection5";
import PHPSection6 from "../../components/Services/PHP/PHPSection6";
import PHPSection7 from "../../components/Services/PHP/PHPSection7";
import PHPSection8 from "../../components/Services/PHP/PHPSection8";

const PHPServices = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
            <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
                <PHPSection1 handleFunction={handleModal}/>
                <PHPSection2 />
                {/* <PHPSection4 /> */}
                <PHPSection3 />
                {/* <PHPSection5 /> */}
                <PHPSection6 />
                <PHPSection7 />
                <PHPSection8 handleFunction={handleModal}/>
            </div>
            <Footer /><ModalsForm
        show={openModal}
        onHide={() => setOpenModal(false)}
      />
        </>);
};

export default PHPServices;