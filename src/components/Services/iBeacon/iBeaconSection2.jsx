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
                                        Create magic with iBeacon. We got your back!
                                    </p>
                                    <p className="sectionContent">
                                        We can provide new possibilities for location awareness and infinite opportunities for interaction with iBeacon hardware and iOS devices for our customers through our iBeacon App Development services. Creating an iBeacon App begins with the use of slideshows, maps, and tables to develop an app that is consistent with your brand. Then add iBeacon support to make the app aware of its position so that it can serve content that meets the user's needs whatever they are.  
                                    </p>
                                    <ul>
                                        <li className="sectionContent">
                                            We can provide off-the-shelf iBeacon solutions. 
                                        </li>
                                        <li className="sectionContent">
                                            Our experts will help to select the iBeacon app for your purpose. 
                                        </li>
                                        <li className="sectionContent">
                                            We can utilize indoor positioning applications, deliver more than content, and include the closeness of objects in the physical world. 
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
