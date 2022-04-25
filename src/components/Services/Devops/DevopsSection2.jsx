import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { devopsServices } from "../../../helper";
import CommonCard from "../../Common/CommonCard";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';

const Section2 = () => {
    const [isMobile] = useContext(AppContext);
    // console.log(bizIdeas.length)
    return (
        <Reveal effect="zoomIn">
            <div className="row Home-area4 about" style={{ margin: 0, padding: 0 }}>
                <div
                    className={`col-12 Home-main-area5`}
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
                            <Zoom>
                                <div className={`row`}>
                                    {!isMobile && <div className="col-2"></div>}
                                    <div className={`${isMobile ? "col-12" : "col-8"}`}>
                                        <p className="section3Head text-center">
                                            Add value at every stage of your business with DevOps!
                                        </p>
                                        <p className="sectionContent text-center">
                                            Improve your products swiftly, enhance customer service and get a competitive edge with DevOps!</p>
                                    </div>
                                    {!isMobile && <div className="col-2"></div>}
                                </div>
                            </Zoom>

                            <div className="row" style={{ marginTop: "40px" }}>
                                {devopsServices.map((idea, index) => (
                                    <div
                                        className={`${isMobile ? "col-12 mb-3" : "col-4 mb-4"}`}
                                        key={idea.id}
                                        style={!isMobile ? { paddingRight: "20px" } : null}
                                    >
                                        <Fade top={index % 2 === 0 ? true : false} bottom={index % 2 === 0 ? false : true}>
                                            <CommonCard
                                                vertical={false}
                                                image={idea.image}
                                                name={idea.name}
                                                description={idea.description}
                                                isMobile={isMobile}
                                                background={"#E0D1FF"}
                                                imageWidth={"50%"}
                                                padding={"30px"}
                                            />
                                        </Fade>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    );
};

export default Section2;
