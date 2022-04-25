import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { vueJSCards } from "../../../helper/services";
import CommonCard from "../../Common/CommonCard";
import Fade from 'react-reveal/Fade'
const Section3 = () => {
    const [isMobile] = useContext(AppContext);
    return (
        <div className="Home-area4 about" style={{ margin: 0, padding: 0 }}>
            <div
                className={`col-12 Home-main-area2`}
                style={{
                    paddingLeft: !isMobile ? "70px" : "20px",
                    paddingRight: !isMobile && "70px",
                }}
            >
                <div className="row">
                    <div
                        className={"col-12"}
                        style={
                            isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                        }
                    >
                        <Fade left>
                            <div className={`row`}>
                                <div className={` mx-auto ${isMobile ? "col-12" : "col-8"}`}>
                                    <p className="section3Head black extra-bold text-center">
                                        Why choose Vue JS? 
                                    </p>
                                    <p className="sectionContent text-center">
                                        The Vue.Js framework has a lot of positives that make it the most popular front-end development framework. 
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        <div className="container">
                            <div className="row" style={{ marginTop: "40px" }}>
                                {vueJSCards.map((idea, index) => (
                                    <Fade top={index % 2 === 0 ? true : false} bottom={index % 2 === 0 ? false : true} key={idea.id}>
                                        <div
                                            className={`${isMobile ? "col-12 mb-3" : "col-4 my-auto"}`}
                                            key={idea.id}
                                            style={!isMobile ? { paddingRight: "20px" } : null}
                                        >
                                            <CommonCard
                                                // buttonCard={true}
                                                vertical={true}
                                                image={idea.image}
                                                name={idea.name}
                                                description={idea.description}
                                                isMobile={isMobile}
                                                background={"#DEE8FF"}
                                                imageWidth={"50%"}
                                                padding={"20px 30px"}
                                            />
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
