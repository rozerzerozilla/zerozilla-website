import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import ContentSection1 from "../../components/Services/ContentService/ContentSection1";
import ContentSection2 from "../../components/Services/ContentService/ContentSection2";
import ContentSection3 from "../../components/Services/ContentService/ContentSection3";
import ContentSection4 from "../../components/Services/ContentService/ContentSection4";
import ContentSection5 from "../../components/Services/ContentService/ContentSection5";
import ContentSection6 from "../../components/Services/ContentService/ContentSection6";
import ContentSection7 from "../../components/Services/ContentService/ContentSection7";

const ContentServices = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
            <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
                <ContentSection1 handleFunction={handleModal}/>
                <ContentSection2 />
                <ContentSection4 />
                <ContentSection3 />
                {/* <ContentSection5 /> */}
                <ContentSection6 />
                <ContentSection7 />
            </div>
            <Footer />
            <ModalsForm
            show={openModal}
            onHide={() => setOpenModal(false)}
        />
        </>);
};

export default ContentServices;