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
                                        Need an IoT App? Yes, it is possible!
                                    </p>
                                    <p className="sectionContent">
                                        It’s no longer just about the Internet. Its the Internet of Things that are going to transform your life and business. You wake up in the morning and get out of bed. Before you step into your bathroom, the temperature regulates to suit your morning preferences. The shower detects the ambient temperature, cross checks with your inputs and with just one press of a button, perfectly warm jets of water are released. No adjusting of taps, no shocking hot or cold bursts, no stress. That’s a short trailer from the Internet of Things. As you were reading that paragraph, multiple new ideas were invented under the IoT umbrella! We are not far from a super connected, intelligent and somewhat predictive life owing to the IoT technology that’s sweeping across the globe. We play our part by developing IoT applications that enable miraculous possibilities in your business.
                                    </p>
                                    <p className="sectionContent large bold secondary-color">
                                        We can provide an IoT application solution for it.
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
