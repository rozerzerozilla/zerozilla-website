import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { awsStrategy } from "../../../helper/services";
import CommonCard from "../../Common/CommonCard";
import Fade from 'react-reveal/Fade'
const AWSSection2 = () => {
    const [isMobile] = useContext(AppContext);
    return (
        <div className="row Home-area4 about" style={{ margin: 0, padding: 0 }}>
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
                                
                                <div className={`${isMobile ? "col-12" : "col-10 mx-auto"}`}>
                                    <p className="section3Head black extra-bold text-center">
                                        Cloud Optimization that works in REAL!
                                    </p>
                                    {/* <p className="sectionContent text-center">
                                        No more bookish strategies or fake promises! Transparent &
                                        proven methodologies for skyrocketing <br />
                                        your business in no time!
                                    </p> */}
                                </div>
                                
                            </div>
                        </Fade>
                        <div className="row" style={{ marginTop: "40px" }}>
                            {awsStrategy.map((idea, index) => (
                                <Fade top={index % 2 === 0 ? true : false} bottom={index % 2 === 0 ? false : true} key={idea.id}>
                                    <div
                                        className={`${isMobile ? "col-12 mb-3" : "col-4 mb-5"}`}
                                        key={idea.id}
                                        style={!isMobile ? { paddingRight: "20px" } : null}
                                    >
                                        <CommonCard
                                            image={idea.image}
                                            name={idea.name}
                                            description={idea.description}
                                            isMobile={isMobile}
                                            background={"#DEE8FF"}
                                            imageWidth={"50%"}
                                            padding={"30px"}
                                        />
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AWSSection2;
