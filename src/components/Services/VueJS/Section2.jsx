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
                                Your ONE-STOP-STOP for a Vue.Js Development
                            </p>
                            <p className="sectionContent">
                                Design apps that are safe, scalable, and provide visually engaging user experiences with Vue JS. We enable enterprises of all sizes to achieve this with our best-in-class Vue Js Development Services.
                                <br/>
                                Vue.js is a popular JavaScript framework for progressive web applications. Due to its customizable user interface and ability to create single-page apps, Vue.Js development is becoming increasingly popular, particularly in the web and mobile app development industries. 
                            </p>
                            {/* <p className="sectionContent">
                                Vue.js developers at Zerozilla help you create appealing front-ends, strong single-page applications, customized Vue.Js apps, social networking apps, various portals, or interactive dashboards.
                                <br/>
                                We can construct the best user interfaces possible in the shortest amount of time thanks to the Vue.js framework and the expertise of our talented Vue JS engineers.
                            </p> */}
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

