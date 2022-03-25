import React, { useContext } from "react";
import sectionCover from "../../../assets/images/devops-section-2-cover.svg";
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';

const Section3 = () => {
    const [isMobile] = useContext(AppContext);
    return (
        <div className="row Home-area3" style={{ margin: 0, padding: 0 }}>
            <div
                className={`col-12 Home-main-area3`}
                style={{
                    paddingLeft: !isMobile ? "70px" : "15px",
                    paddingRight: !isMobile && "70px",
                }}
            >
                <div className="row">
                    <div
                        className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
                        style={
                            isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                        }
                    >
                        <Fade bottom>
                            <div className={`row col-12 ${isMobile && "m-0"}`}>
                                <p className="section3Head black extra-bold">
                                    Transform the way you build and deliver software with DevOps
                                </p>
                                <p className="sectionContent">
                                    From shopping to entertainment to banking,
                                    software and the Internet have changed the world functions.
                                    Software is no longer just a means of supporting a business;
                                    it is now an intrinsic part of it. Businesses communicate
                                    with their customers using software that is supplied as online
                                    services or applications and may be used on a variety of devices.
                                    They also leverage software to revolutionize every component of
                                    the value chain, including logistics, communications, and operations,
                                    to improve operational efficiencies.
                                    <br/>
                                    Businesses in today’s world
                                    must transform how they build and develop software and DevOps help
                                    them do that. DevOps breaks down boundaries between two traditionally
                                    separate teams: development and operations. It helps to automate and
                                    streamline software development and infrastructure management procedures
                                    thereby enabling organizations to innovate faster. A shift from traditional
                                    software development and infrastructure management processes. DevOps
                                    brings in automation to speed up processes that have historically
                                    been manual and slow.
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    In addition to this,
                                </p>
                                <p className="sectionContent">
                                    DevOps tools also help engineers to accomplish tasks independently thereby increasing the speed at which tasks are performed.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div
                        className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
                        style={{
                            marginTop: isMobile && "40px",
                            textAlign: isMobile ? "center" : "right",
                        }}
                    >
                        <Fade top>
                            <img
                                src={sectionCover}
                                alt="sectionVideo"
                                style={{ width: "90% " }}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
