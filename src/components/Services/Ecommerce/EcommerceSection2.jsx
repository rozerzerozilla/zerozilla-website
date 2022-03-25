import React, { useContext } from "react";
// react lottie
import Lottie from 'react-lottie';
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import * as animationData from "./ecom-lottie.json";
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
const EcommerceSection2 = () => {
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
                                    Need a E-commerce Mobile App? Yes, it is possible!
                                </p>
                                <p className="sectionContent">
                                    Almost 22% of people in the world shop online, most of them via their mobile phones. By 2021, the number of people purchasing online is expected to reach 2.14 billion. And with good reason… Mobile-based online shopping is simple, quick, has just the right amount of interaction and is completely secure.
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    Our e-commerce mobile apps are Android and iOS based.
                                </p>
                                <ul>
                                    <li className="sectionContent">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing
                                    </li>
                                    <li className="sectionContent">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing
                                    </li>
                                    <li className="sectionContent">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing
                                    </li>
                                    <li className="sectionContent">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing
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

export default EcommerceSection2;
