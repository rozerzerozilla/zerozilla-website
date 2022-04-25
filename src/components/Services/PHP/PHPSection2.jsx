import React, { useContext } from "react";
import sectionCover from "../../../assets/images/php-section-2-cover.webp";
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';

const ContentServiceSection3 = () => {
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
                                We are the experts in working with cutting-edge technologies!
                                </p>
                                <p className="sectionContent">
                                    Zerozilla is a prominent PHP web development company that provides clients across the world with powerful, comprehensive, appealing, feature-rich, and full-stack PHP development services. 
                                 </p>
                                <p className="sectionContent large bold secondary-color">
                                Why choose PHP?
                                </p>
                                <p className="sectionContent">
                                    We have developed social networking websites, eCommerce stores, corporate websites, plugins, extensions, PHP scripts, CMS development, payment gateways, and other PHP web development solutions. We can provide you with dedicated PHP developers to help you form your own development team.
                                </p>
                                {/* <ul>
                                    <li className="sectionContent">
                                    Open Source: PHP is an open-source language and can be embedded into HTML.
                                    </li>
                                    <li className="sectionContent">
                                    Powerful Library Support: Common problems and bugs are fixed with the help of a powerful library support.
                                    </li>
                                    <li className="sectionContent">
                                    Massive Community Support: It provides world-class support for building small and large web applications.
                                    </li>
                                    <li className="sectionContent">
                                    Faster Project Development: The project development duration is considerably reduced with PHP.
                                    </li>
                                    <li className="sectionContent">
                                    Cost-Effective: It is a cost-effective choice. By using PHP, you don’t have to burn a hole in your pocket.
                                    </li>
                                    <li className="sectionContent">
                                    High Performance: It’s an appealing, high performing and reliable language.
                                    </li>
                                </ul> */}

                            </div>
                        </Fade>
                    </div>
                    <div
                        className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
                        style={{
                            marginTop: "0px",
                            textAlign: isMobile ? "center" : "right",
                        }}
                    >
                        <Fade top>
                            <img
                                src={sectionCover}
                                alt="sectionVideo"
                                style={{ width: "100% " }}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentServiceSection3;
