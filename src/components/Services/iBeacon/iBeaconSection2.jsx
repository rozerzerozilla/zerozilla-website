import React, { useContext } from "react";
// react lottie
import Lottie from 'react-lottie';
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import * as animationData from "./ibeacon-lottie.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
const IBeaconSection2 = () => {
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
                                        Need an iBeacon App? Yes, it is possible!
                                    </p>
                                    <p className="sectionContent">
                                        iBeacon technology allows Mobile Apps to decipher their place on a micro-local scale to offer hyper-contextual content to users based on location. The communication technology for iBeacon is Bluetooth Low Energy, designed for low energy consumption and lesser costs.
                                    </p>
                                    <ul>
                                        <li className="sectionContent">
                                            We can provide top-notch off-the-shelf and tailor-made iBeacon solutions.
                                        </li>
                                        <li className="sectionContent">
                                            We can provide top-notch off-the-shelf and tailor-made iBeacon solutions.
                                        </li>
                                        <li className="sectionContent">
                                            We can utilize indoor positioning application, deliver more than content and include the closeness of objects in the physical world.
                                        </li>
                                        <li className="sectionContent">
                                            We can Assist you to engage potential clients at a new level.
                                        </li>
                                    </ul>
                                    <p className="sectionContent large bold secondary-color">
                                        Our beacon app development services include:
                                    </p>
                                    <ul>
                                        <li className="sectionContent">
                                            iBeacon Enterprise Application Development.
                                        </li>
                                        <li className="sectionContent">
                                            iBeacon Development for Small Business.
                                        </li>
                                        <li className="sectionContent">
                                            iBeacon Mobile App Customization.
                                        </li>
                                        <li className="sectionContent">
                                            iBeacon Mobile App Maintenance.
                                        </li>
                                        <li className="sectionContent">
                                            iBeacon App Design.
                                        </li>
                                        <li className="sectionContent">
                                            iBeacon Integration Services.
                                        </li>
                                        <li className="sectionContent">
                                            iBeacon Location & Proximity App.
                                        </li>
                                        <li className="sectionContent">
                                            iBeacon Development Consultation.
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

export default IBeaconSection2;
