import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { Container } from "react-bootstrap";


// react lottie
import Lottie from 'react-lottie';
import animationData from "./301.json"
const Section2 = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const [isMobile] = useContext(AppContext);
    return (
        <div className="Home-areaSEO py-4">
            <Container fluid="md">
                <div className="row">
                    <div
                        className="col-12 Home-main-areaSEO"
                        style={{
                            paddingLeft: !isMobile ? "70px" : "15px",
                            paddingRight: !isMobile && "70px",
                        }}
                    >
                        <div className="row">
                            <div
                                className={`${isMobile ? "col-12" : "col-4 my-auto"}`}
                            >
                                <p className={`mb-0 seoHead ${isMobile && "text-center"}`}>
                                    Get a world-class web development partner
                                </p>
                            </div>
                            <div className={`${isMobile ? "col-12" : "col-2 my-auto"} ${!isMobile && "d-flex justify-content-center align-items-center"
                                }`}
                            >
                                <div className="white-dot">
                                    <Lottie options={defaultOptions} width={"100%"}/>
                                </div>
                            </div>
                            <div
                                className={`${isMobile ? "col-12" : "col-6 my-auto"} ${!isMobile && "d-flex justify-content-around"
                                    }`}
                                style={{ paddingLeft: !isMobile ? "40px" : "25px" }}
                            >
                                
                                <div>
                                    We at Zerozilla provide the best in class Web App Development Services created using the latest technology as per the industry standard within the budget limits given to us by our clients. Our projects highlight the immense confidence our clients put in our work. As a Web application development company, we are equipped to develop highly secured, robust and innovative solutions.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Section2;
