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
                    <div className="container">
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
                                        <div className="col-12 d-flex flex-column align-items-start">
                                            <br /><br /><br /><br />
                                            <p className="sectionContent">Welcome to your next Adventure!</p>
                                            <p className="sliderHead2 text-center w-100" style={{margin:"0px"}}>
                                                Join US!
                                            </p>
                                            <p
                                                className="sectionContent no-underline text-left"
                                                style={{ textAlign: isMobile ? "center":"left" }}
                                            >
                                                An exceptional workplace where every day is a learning experience.
                                                {!isMobile && <br />}
                                                Sounds like a dream? It's real! Find out for yourself!
                                            </p>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade>
                                    <div className="row" style={{ marginTop: "40px" }}>
                                        <div className={"col-12 d-flex flex-column" + isMobile ? 'align-items-center' : 'align-items-start'}>
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
        </div>
    );
};

export default Section1;
