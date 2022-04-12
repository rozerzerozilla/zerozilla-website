import React, { useContext } from "react";
// react lottie
import Lottie from 'react-lottie';

import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import * as animationData from "./lottie.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const AndroidUXSection3 = () => {
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
                                    Need a superior Android game? Yes, it is possible!
                                </p>
                                <p className="sectionContent">
                                    We help you leverage the power of the best UI and UX practices.
                                </p>
                                <p className="sectionContent">
                                    Our Android Game UX Design services guarantee a perfect balance of a seamless user experience, magnificent design, and flawless appearance.  We help our customers bring the game they visualize into reality. 
                                </p>
                                <p className="sectionContent">
                                    Our exceptional game UI/UX design engages with your customers like never before. With us, you can create a human-centered interface to better the experience and build trust.
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    To achieve this we will:
                                </p>
                                <ul>
                                    <li className="sectionContent">
                                        Create an adaptive UI to fit any Android screen.
                                    </li>
                                    <li className="sectionContent">
                                        Use stunning design and splash screens.
                                    </li>
                                    <li className="sectionContent">
                                        Create easy navigation for all users.
                                    </li>
                                    <li className="sectionContent">
                                        Provide unmatched gaming experience.
                                    </li>
                                    <li className="sectionContent">
                                        Challenge the iOS gaming platform! (it’s just a matter of time!).
                                    </li>
                                </ul>
                                
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

export default AndroidUXSection3;
