import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import ReactNativeSection1 from "../../components/Services/ReactNative/ReactNativeSection1";
import ReactNativeSection2 from "../../components/Services/ReactNative/ReactNativeSection2";
import ReactNativeSection3 from "../../components/Services/ReactNative/ReactNativeSection3";
import ReactNativeSection4 from "../../components/Services/ReactNative/ReactNativeSection4";
import ReactNativeSection5 from "../../components/Services/ReactNative/ReactNativeSection5";
import ReactNativeSection6 from "../../components/Services/ReactNative/ReactNativeSection6";

const ReactNativeApps = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <ReactNativeSection1 handleFunction={handleModal}/>
            <ReactNativeSection2 />
            {/* <ReactNativeSection3 /> */}
            {/* <ReactNativeSection4 /> */}
            <ReactNativeSection5 />
            <ReactNativeSection6 />
            </div>
            <Footer/>
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
    </>);
};

export default ReactNativeApps;