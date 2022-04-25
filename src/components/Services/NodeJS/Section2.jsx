import React, { useContext } from "react";

import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import sectionCover2 from "../../../assets/images/nodejs-section-2-cover.png";
import sectionCover3 from "../../../assets/images/nodejs-section-3-cover.png";
import { Container } from "react-bootstrap";
const Section2 = () => {
    const [isMobile] = useContext(AppContext);
    return (
        <>
        <Container fluid="lg" className="my-5 mb-0">
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
                                Why should you choose <span style={{color:"green"}}>NodeJS</span> over any other backend platform?
                                
                            </p>
                            <p className="sectionContent">
                                NodeJS is a multifunctional platform that is becoming increasingly popular around the world. NodeJS Application Developers are enticed by the inherent benefits of robustness and simplicity, which make designing complex data-sensitive applications as simple as pie. We've already helped a number of firms in a variety of industries improve their performance and increase revenue by adopting NodeJS. 
                                <br />
                                NodeJS is a popular open-source platform with great features including event-driven architecture, cloud scalability, and code reusability.It works well with both browsers and servers.     
                            </p>
                        </div>
                        {/* <div className="row-col-12" style={{ marginTop: "20px" }}>
                            <button className="appBtn">Explore our services</button>
                        </div> */}
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
                            src={sectionCover2}
                            alt="sectionVideo"
                            style={{ width: "100%", objectFit:"cover"}}
                        />
                    </Fade>
                </div>
            </div>
            </Container>
            <Container fluid="lg" className="my-5 mb-0">
                <div className="row Home-area3">
                    <div
                        className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
                        style={{
                            marginTop: isMobile && "40px",
                            textAlign: isMobile ? "center" : "right",
                        }}
                    >
                        <Fade bottom>
                            <img
                                src={sectionCover3}
                                alt="sectionVideo"
                                style={{ width: "100%", objectFit: "cover" }}
                            />
                        </Fade>
                    </div>
                    <div
                        className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
                        style={
                            isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                        }
                    >
                        <Fade top>
                            <div className={`row col-12 ${isMobile && "m-0"}`}>
                                <p className="sectionContent">
                                    NodeJS is a server-side network web application framework that uses an event-driven, non-blocking I/O approach. It is widely accepted because of the strong backing of the NodeJS community.
                                </p>

                                <p className="sectionContent">
                                    Many Fortune 500 organizations, like Netflix, LinkedIn, Wal-Mart, eBay, and even NASA, have already made the switch to NodeJS. They're all ready for the applications' incredibly lightweight and basic avatars.
                                </p>
                                {/* 
                                    At Zerozilla, we strive to provide exceptional NodeJS Application Development by ensuring that we precisely satisfy our clients' objectives within the set timeframes while maintaining the highest level of quality. 
                                */}
                            </div>
                            <div className="row-col-12" style={{ marginTop: "20px" }}>
                                <button className="appBtn">Explore our services</button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Container>
    </>);
};

export default Section2;

