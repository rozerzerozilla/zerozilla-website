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

const AndroidSection3 = () => {
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
                                    Your search for Android app solutions ends here! 
                                </p>
                                <p className="sectionContent">
                                    Android is a cult and we admit that the geeks at Zerozilla are cult followers!
                                    <br /><br />
                                    Get ahead of the competition with high-performing and effective customized Android apps developed by our tech minds.
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    Our developers can:
                                </p>
                                <ul>
                                    <li className="sectionContent">
                                        Ensure superior UI designs for enhanced user experiences.
                                    </li>
                                    <li className="sectionContent">
                                        Utilize the latest technologies to achieve the end product.
                                    </li>
                                    <li className="sectionContent">
                                        Deliver high performing and reliable applications according to the business.
                                    </li>
                                    <li className="sectionContent">
                                        Guarantee scalability and expertise.
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

export default AndroidSection3;
