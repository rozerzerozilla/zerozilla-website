import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { commonColPadding } from "../../../helper";
import { FaPhoneAlt } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Section10 = ({ handleFunction }) => {
    const [isMobile, setIsMobile] = useContext(AppContext);
    return (
        <Fade>
            <div className="row Home-area8" style={{ margin: 0, padding: 0 }}>
                <div
                    className={`col-12 Home-main-area8`}
                    style={commonColPadding(isMobile)}
                >
                    <div className="row">
                        <div
                            className="row col-12"
                            style={{ paddingLeft: isMobile && "25px" }}
                        >
                            <p className="section3Head black mb-0">Ready to get started?</p>
                            <p className="sectionContent">
                                Take the first step towards your BRAND EVOLUTION!
                            </p>
                        </div>
                    </div>
                    <div
                        className={`row ${isMobile ? "mt-4" : ""}`}
                        style={{ marginTop: !isMobile && "40px" }}
                    >
                        {!isMobile && <div className="col-5"></div>}
                        <div className={`${isMobile ? "col-12" : "col-2"}`}>
                            <button
                                className={`sliderBtns colored`}
                                onClick={handleFunction}
                            >
                                <span className={`sectionContent small`}>
                                    Let's talk
                                </span>
                            </button>
                        </div>
                        {!isMobile && <div className="col-5"></div>}
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Section10;
