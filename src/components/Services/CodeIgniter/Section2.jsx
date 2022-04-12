import React, { useContext } from "react";

import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import sectionCover from "../../../assets/images/nodejs-section-2-cover.webp";
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
                            Your search for the best CodeIgniter solution ends HERE!
                            </p>
                            <p className="sectionContent">
                            At Zerozilla, we use the CodeIgniter framework to build safe and scalable online apps that meet the needs of our clients. We are equipped with CodeIgniter developers who know how to create websites and web apps with PHP frameworks.
                               <br /><br />
                               We have years of expertise as a top CodeIgniter Development Company delivering well-documented, safe, fast, and high-quality web development solutions for many types of businesses, including start-ups, small, medium, big, and enterprise levels. As a customer-focused web development firm, we strive to provide the best possible solutions depending on the specifications.
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

