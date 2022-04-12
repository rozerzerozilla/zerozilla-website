import React, { useContext } from "react";

import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import sectionCover from "../../../assets/images/java-section-2-cover.webp";
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
                            Think beyond the box with digital solutions powered by Java!
                            </p>
                            <p>  
                            JavaScript is a strong foundation that allows you to develop dynamic and responsive websites and apps that load quickly and perform well. JS can also be used to construct classic desktop apps. The ability to design unique and engaging interfaces allows businesses to better meet their customers' expectations, resulting in improved user experiences. JavaScript is a common front-end technology, alongside CSS and HTML. Many well-known websites are migrating to JavaScript since it allows us to create dynamic web pages. We can give a unique JavaScript development solution that suits your individual needs as one of the leading JavaScript development firms. 
                            <br /><br />
                            Zerozilla offers front-end and full-stack JavaScript development services for a wide range of commercial applications, from simple desktop applications to huge enterprise applications. We have a team of highly qualified and experienced JavaScript developers who are adept at integrating new technologies and offering custom JavaScript development services. 
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

