import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import ModalsForm from "../../components/Modals/ModalsForm";

import WordPressSection1 from "../../components/Services/Wordpress/WorpressSection1";
import WordPressSection2 from "../../components/Services/Wordpress/WorpressSection2";
import WordPressSection3 from "../../components/Services/Wordpress/WorpressSection3";
import WordPressSection4 from "../../components/Services/Wordpress/WorpressSection4";
import WordPressSection5 from "../../components/Services/Wordpress/WorpressSection5";
import WordPressSection6 from "../../components/Services/Wordpress/WorpressSection6";
import WordPressSection7 from "../../components/Services/Wordpress/WorpressSection7";
import WordPressSection8 from "../../components/Services/Wordpress/WorpressSection8";

const WordpressServices = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const handleModal = () => setOpenModal(true)
    return (
        <>
            <CustomHeader />
            <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
                <WordPressSection1 handleFunction={handleModal}/>
                <WordPressSection2 />
                <WordPressSection3 />
                {/* <WordPressSection4 /> */}
                {/* <WordPressSection5 /> */}
                <WordPressSection6 />
                <WordPressSection7 />
                <WordPressSection8 handleFunction={handleModal}/>
            </div>
            <Footer />
            <ModalsForm
                show={openModal}
                onHide={() => setOpenModal(false)}
            />
        </>);
};

export default WordpressServices;