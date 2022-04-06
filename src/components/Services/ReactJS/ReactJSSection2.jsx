import React, { useContext } from "react";
import sectionCover from "../../../assets/images/seo-section-3-cover.webp";
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';

const IOSSection3 = () => {
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
                                    Declarative, efficient, versatile UI. Get all that and more with ReactJS. Enhance your online presence now! 
                                </p>
                                <p className="sectionContent">
                                    ReactJS is a robust framework for building data-driven online apps. Backed by large companies such as Facebook, Instagram, and Yahoo, it may be the greatest framework for developing online apps. We give you a competitive advantage by developing ReactJs web development services that are quick and scalable. We offer ReactJS services to our clients to match their specific business requirements. 
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    Get smartphone-compatible mobile apps and do business the smartest way possible, with our perfect ReactJs web development services.
                                </p>
                                <p className="sectionContent">
                                    As a ReactJS web development company, our engineers create cutting-edge solutions for companies of all sizes. They are well-versed in Facebook's JS library and have completed several ReactJS projects successfully. 
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    Handle all views of an application for any web or mobile application!
                                </p>
                                <p className="sectionContent">
                                    Prepare to grow your customer base by providing an interactive app experience. Rely on our ReactJS development services to provide a comprehensive range of solutions to meet a wide range of business requirements.
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

export default IOSSection3;
