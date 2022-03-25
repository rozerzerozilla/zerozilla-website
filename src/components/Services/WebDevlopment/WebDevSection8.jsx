import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { commonColPadding } from "../../../helper";
import BookCallButton from "../../BookCallButton";
import Fade from 'react-reveal/Fade';

const Section8 = () => {
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
                            <BookCallButton
                                className={null}
                                isColored={true}
                                showImage={true}
                                text={"Book Intro Call"}
                            />
                        </div>
                        {!isMobile && <div className="col-5"></div>}
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Section8;
