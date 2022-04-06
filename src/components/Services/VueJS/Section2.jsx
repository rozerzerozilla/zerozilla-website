import React, { useContext } from "react";

import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import sectionCover from "../../../assets/images/vuejs-section-2-cover.webp";
import { Container } from "react-bootstrap";
const Section2 = () => {
    const [isMobile] = useContext(AppContext);
    return (
        <Container fluid="lg" className="my-5">
            <div className="row Home-area3">
                <div
                    className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
                    style={
                        isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                    }
                >
                    <Fade top>
                        <div className={`row col-12 ${isMobile && "m-0"}`}>
                            <p className="section3Head black extra-bold">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                            </p>
                            <p className="sectionContent">
                                NodeJS is a multipurpose platform with a rising popularity of 4 million+ users across the globe.
                                The inherent benefit of robustness and simplicity entice NodeJS Application Developers and make
                                the building of complex data-sensitive solutions as easy as pie. By using NodeJS, we have already
                                supported many companies across diverse industries to enhance their performance to attain maximum revenue.
                                <br /><br />
                                Being an open source platform, NodeJS is highly popular with its wonderful features like event-driven
                                architecture, cloud scalability, code reusability etc. It is highly compatible with both browser & server.
                                NodeJS offers event-driven, non-blocking I/O model to develop server-side network web applications.
                                The strong NodeJS community support makes it acceptable across the world. Many fortune companies
                                around the world like Netflix, LinkedIn, Wal-Mart, eBay, and even the Big NASA had already migrated
                                to NodeJS. They are all set for the extremely lightweight and simplistic avatars of the applications.
                                At Zerozilla, we aim to provide exemplary NodeJS Application Development and make sure to exactly meet
                                our clientele requirements within the specified timeframes, with utmost quality.

                            </p>
                        </div>
                        <div className="row-col-12" style={{ marginTop: "20px" }}>
                            <button className="appBtn">Explore our services</button>
                        </div>
                    </Fade>
                </div>
                
                <div
                    className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
                    style={{
                        marginTop: isMobile && "40px",
                        textAlign: isMobile ? "center" : "right",
                    }}
                >
                    <Fade bottom>
                        <img
                            data-aos={"fade-left"}
                            src={sectionCover}
                            alt="sectionVideo"
                            style={{ width: "100% " }}
                        />
                    </Fade>
                </div>
            </div>
        </Container>
    );
};

export default Section2;

