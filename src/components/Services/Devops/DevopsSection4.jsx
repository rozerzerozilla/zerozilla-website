import React, { useContext } from "react";

import sectionCover from "../../../assets/images/devops-section-3-cover.webp";
import Bullets from '../../../assets/icons/seo-bullets.svg';
import { AppContext } from "../../../context/Context";
import { devopsTips } from "../../../helper/services";
import Fade from 'react-reveal/Fade';

const Section4 = () => {

    const [isMobile] = useContext(AppContext);

    return (
        <div className="row Home-area4 about" style={{ margin: 0, padding: 0 }}>
            <div
                className={`col-12 Home-main-area6`}
                style={{
                    paddingLeft: !isMobile ? "70px" : "15px",
                    paddingRight: !isMobile && "70px",
                    paddingTop: !isMobile && "70px",
                }}
            >
                <div className="row">
                    <div
                        className={`${isMobile ? "col-12" : "col-5"}`}
                        style={{
                            marginTop: isMobile && "40px",
                            textAlign: isMobile && "center",
                        }}
                    >
                        <Fade left>
                            <img
                                className="customImageWidth"
                                src={sectionCover}
                                alt="sectionVideo"
                                style={{ width: "100%" }}
                            />
                        </Fade>
                    </div>
                    <div
                        className={`${isMobile ? "col-12" : "col-7"}`}
                        style={
                            isMobile
                                ? {
                                    padding: "0px 20px",
                                    textAlign: "center",
                                    marginTop: "40px",
                                }
                                : null
                        }
                    >
                        <Fade bottom>
                            <div className={`row col-12 ${isMobile && "m-0"}`}>
                                <p className="section3Head black extra-bold">
                                    Here are some DevOps tools you should know about:
                                </p>
                                {devopsTips.map((strategy, idx) => (
                                    <div className="row align-items-start sectionContent mb-2" key={idx + 1}>
                                        <div
                                            className={`col-1 ${!isMobile ? "my-0" : ""
                                                } text-center`}
                                        >
                                            <img src={Bullets} alt="bullet" height="16px" />
                                        </div>
                                        <div
                                            className={`col-11 ${!isMobile ? "my-auto" : ""}`}
                                            style={{
                                                paddingLeft: !isMobile && 0,
                                                textAlign: isMobile && "left",
                                            }}
                                        >
                                            <p>{strategy.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
