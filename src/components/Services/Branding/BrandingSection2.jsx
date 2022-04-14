import React, { useContext } from "react";
import sectionCover from "../../../assets/images/branding-section2-cover.webp";
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
                        className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
                        style={
                            isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                        }
                    >
                        <Fade bottom>
                            <div className={`row col-12 ${isMobile && "m-0"}`}>
                                <p className="section3Head black extra-bold">
                                Let us streamline the marketing strategy for your enterprise!
                                </p>
                                <p className="sectionContent">
                                You may be familiar with the term ‘branding.’ But is Digital branding any different from traditional branding? Not really! Except that digital naturally belongs in the online world, requiring a new-age set of tricks, tools, and talent. So, while the tenets of your brand remain the same, we swoop in to take it to giddy heights!
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                Here's how!
                                </p>
                                <ul>
                                    <li className="sectionContent">
                                    Utilize multiple online platforms.
                                    </li>
                                    <li className="sectionContent">
                                    Induce the viral state.
                                    </li>
                                    <li className="sectionContent">
                                    Magnetize customers to play a role in building your brand.
                                    </li>
                                    <li className="sectionContent">
                                    Redefine mobile-friendliness.
                                    </li>
                                    <li className="sectionContent">
                                    Raise online rankings.
                                    </li>
                                    <li className="sectionContent">
                                    Optimize.
                                    </li>
                                    <li className="sectionContent">
                                    Keep it real.
                                    </li>
                                    <li className="sectionContent">
                                    Throw in some AI for good measure!
                                    </li>
                                </ul>

                            </div>
                        </Fade>
                    </div>
                    <div
                        className={`${isMobile ? "col-12" : "col-6 my-0"}`}
                        style={{
                            marginTop: "0px",
                            textAlign: isMobile ? "center" : "right",
                        }}
                    >
                        <Fade top>
                            <img
                                src={sectionCover}
                                alt="sectionVideo"
                                style={{ height: "100% " }}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IOSSection3;
