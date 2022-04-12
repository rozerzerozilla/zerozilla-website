import React, { useContext } from "react";
// react lottie
import Lottie from 'react-lottie';
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import * as animationData from "./hybrid-lottie.json";
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
                                <div className={`row col-12 ${isMobile && "m-0"}`}>
                                    <p className="section3Head black extra-bold">
                                        Seize the power of customized hybrid apps! 
                                    </p>
                                    <p className="sectionContent">
                                        We provide end-to-end hybrid solutions and development across various operating systems.<br/><br/>
                                        TThe beauty of Hybrid apps is that it uses the codes of HTML5, CSS3, and JavaScript, the same ones utilized in mobile operating systems. Hybrid apps can, therefore, be developed quickly, easily, and economically. These apps can be leveraged on both the web and native mobile technologies. Hybrid allows easy access to device data, works offline, and scales to many platforms.
                                    </p>
                                    <p className="sectionContent large bold secondary-color">
                                        Our end-to-end hybrid solutions include:
                                    </p>
                                    <ul>
                                        <li className="sectionContent">
                                            Hybrid Mobile App Development.
                                        </li>
                                        <li className="sectionContent">
                                            Hybrid Mobile App Design.
                                        </li>
                                        <li className="sectionContent">
                                            Cross-platform Development.
                                        </li>
                                        <li className="sectionContent">
                                            Multi-platform Development.
                                        </li>
                                        <li className="sectionContent">
                                            If you have a hybrid app idea, we can make it a reality!
                                        </li>
                                    </ul>
                                </div>
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
