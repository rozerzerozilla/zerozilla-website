import React, { useContext } from "react";
import Lottie from 'react-lottie';
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import * as animationData from "./ios-lottie.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
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
                                    Let us help you design a captivating, agile, and innovative app that can outdo your competitors! 
                                </p>
                                <p className="sectionContent">
                                    Expanding your business beyond the borders is our goal, just like you. We help you reinvigorate your business strategy with bespoke solutions. Our iPhone app development services enable your business to stay at the top while delivering an enhanced customer experience.
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    Tech proficiency combined with years of experience and unmatched service! 
                                </p>
                                <p className="sectionContent">
                                    At Zerozilla, we have derived customer confidence and trust by transforming businesses across domains with our customized digital solutions. 
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    Impeccable, aesthetic, and functional digital solutions
                                </p>
                                <p className="sectionContent">
                                    Our technical experts are proficient in devising solutions with a responsiveness attribute. They are adept at incorporating such solutions into devices having varying screen sizes. 
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
                            <Lottie options={defaultOptions}
                                width={"100%"}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IOSSection3;
