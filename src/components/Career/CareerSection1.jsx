import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import BookCallButton from "../BookCallButton";
import BreadCrumbs from "../BreadCrumbs";
import Fade from 'react-reveal/Fade';

const Section1 = ({handleFunction}) => {
    const [isMobile, setIsMobile] = useContext(AppContext);
    return (
        <div className="row career" style={{ margin: 0, padding: 0 }}>
            <div className="col-12" >
                <div className={`${isMobile ? "mobile" : "desktop"}`}>
                    <div className="row">
                        <div className={`col-12`}>
                            <Fade top>
                                <div
                                    className="row"
                                    style={
                                        isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                                    }
                                >
                                    <p
                                        className="sliderHead1 no-underline light"
                                        style={{ textAlign: "left" }}
                                    >
                                        <BreadCrumbs className={null} />
                                    </p>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center">
                                        <br /><br /><br /><br /><br /><br /><br /><br /><br/>
                                        <p className="sectionContent">Welcome to your next Adventure</p>
                                        <p className="sliderHead2 mb-0">
                                            Join the Team
                                        </p>
                                        <p
                                            className="sectionContent mb-0 no-underline"
                                            style={{ textAlign: isMobile && "center" }}
                                        >
                                            We’re equal parts left and right brained. And we’re generally likeable.
                                            {!isMobile && <br />}
                                            We won’t bored you with more adjectives. See for yourself.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                            <Fade>
                                <div className="row" style={{ marginTop: "70px" }}>
                                    <div className="col-12 d-flex flex-column align-items-center">
                                        <div className={`${!isMobile ? "row" : "customFlexBox"}`}>
                                            <BookCallButton
                                                handleFunction={handleFunction}
                                                className={null}
                                                isColored={false}
                                                text={`Let's talk`}
                                                showImage={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
