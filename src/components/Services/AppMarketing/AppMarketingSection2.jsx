import React, { useContext } from "react";

// react lottie
import Lottie from 'react-lottie';

import sectionCover from "../../../assets/images/branding-section2-cover.webp";
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import * as animationData from "./appmarket-lottie.json";

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
                        className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
                        style={
                            isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                        }
                    >
                        <Fade bottom>
                            <div className={`row col-12 ${isMobile && "m-0"}`}>
                                <p className="section3Head black extra-bold">
                                    APP Marketing Services that enables apps go boom.
                                </p>
                                <p className="sectionContent">
                                    If you look at the stats, Gartner predicted that as less as 1% of launched mobile apps were likely to make it in 2018. The facts were pretty close to that number. Though there are a host of reasons for why mobile apps fail, lack of adequate or quality Mobile Application Marketing is an important one. With hoards of mobile apps in the market, we make sure that yours isn’t viewed as just another space-consuming thing to download. We begin with your brand and positioning clarity and then build on it. An engaging and accurate app description and the right places to advertise the app urges consumers to download and use it readily. We help to grow your market by tapping the current and potential customer base. A detailed mobile marketing campaign will be devised that is in sync with your promotional strategy including keywords, positioning and ASO (app store optimization) services. We will enhance your visibility on Apple and Google Play stores. Paid App Install campaigns will boost your app usage via search mechanisms and social media. We also assist in Reviews Management using the efficient App Reputation Management tool. Talk to us today for a consultation.
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    We therefore:
                                </p>
                                <ul>
                                    <li className="sectionContent">
                                        Utilize multiple online platforms
                                    </li>
                                    <li className="sectionContent">
                                        Induce the viral state
                                    </li>
                                    <li className="sectionContent">
                                        Magnetize customers to play a role in building your brand
                                    </li>
                                    <li className="sectionContent">
                                        Redefine mobile friendliness
                                    </li>
                                    <li className="sectionContent">
                                        Raise online rankings
                                    </li>
                                    <li className="sectionContent">
                                        Optimize
                                    </li>
                                    <li className="sectionContent">
                                        Keep it real
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
                            <Fade top>
                                <Lottie options={defaultOptions}
                                    width={"100%"}
                                />
                            </Fade>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IOSSection3;
