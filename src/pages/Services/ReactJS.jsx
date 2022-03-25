import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";

import ReactJsSection1 from "../../components/Services/ReactJS/ReactJSSection1";
import ReactJsSection2 from "../../components/Services/ReactJS/ReactJSSection2";
import ReactJsSection3 from "../../components/Services/ReactJS/ReactJSSection3";
import ReactJsSection4 from "../../components/Services/ReactJS/ReactJSSection4";
import ReactJsSection5 from "../../components/Services/ReactJS/ReactJSSection5";
import ReactJsSection6 from "../../components/Services/ReactJS/ReactJSSection6";

const ReactJsApps = () => {
    return (
        <>
            <CustomHeader />
        <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
            <ReactJsSection1 />
            <ReactJsSection2 />
            {/* <ReactJsSection3 /> */}
            <ReactJsSection4 />
            <ReactJsSection5 />
            <ReactJsSection6 />
            </div>
            <Footer/>
    </>);
};

export default ReactJsApps;