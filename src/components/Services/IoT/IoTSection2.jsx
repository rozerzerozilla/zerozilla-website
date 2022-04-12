import React, { useContext } from "react";
// react lottie
import Lottie from 'react-lottie';
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import * as animationData from "./iot-lottie.json";
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
const IoTSection2 = () => {
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
                                        Bridge the gap between REAL and DIGITAL with our IoT SOLUTIONS!
                                    </p>
                                    <p className="sectionContent">
                                        Our IoT development team is well-versed in the networking landscape. We understand how important it is to maintain a high degree of scalability, speed, and security, which is why we include these elements in all our IoT application development services. We use cutting-edge technologies and methodologies to give you mobile IoT app solutions that are tailored to meet your specific company requirements. 
                                    </p>
                                    <p className="sectionContent large bold secondary-color">
                                        We help build smart solutions for smarter brands. 
                                    </p>
                                    <ul>
                                        <li className="sectionContent">
                                            We can offer a scalable, ready-made platform.
                                        </li>
                                        <li className="sectionContent">
                                            We can reform your business systems to increase process efficiencies, deliver better customer experiences and generate fresh revenue streams.
                                        </li>
                                        <li className="sectionContent">
                                            We can automate your commercial appliances and workplace gadgets as they share and talk to one another.
                                        </li>
                                        <li className="sectionContent">
                                            We can build IoT systems to fulfil complex industrial requirements or service-based interactive interfaces.
                                        </li>
                                        <li className="sectionContent">
                                            We can provide applications for IoT wearables, connected to smart devices in the home or office.
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

export default IoTSection2;
