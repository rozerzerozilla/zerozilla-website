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
                                    A comprehensive approach to strategize, build and deliver engaging apps for a larger audience! 
                                </p>
                                <p className="sectionContent">
                                    The iPad app developers at Zerozilla adopt a holistic approach to app development, including business needs, design aesthetics, user experience, and app functionality. Our iPad app developers can assist you with quickly conceptualizing, strategizing, designing, building, testing, and delivering custom iPad apps that are ready for the App Store. 
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    Capture the advantages that are exclusive to iPad 
                                </p>
                                <p className="sectionContent">
                                    Our development team can take full advantage of the larger screen size and faster processing to ensure that your app performs to its full potential and provides the greatest possible user experience.
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    Stay ahead with your innovation. 
                                </p>
                                <p className="sectionContent">
                                    We broaden horizons, inspire possibilities, and implement innovations for well-known brands. We help you deliver the best user experience to your customer with our expertise. 
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
