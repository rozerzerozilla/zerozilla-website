import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { webdevServices } from "../../../helper/services";
import CommonCard from "../../Common/CommonCard";
import Fade from 'react-reveal/Fade'
const IOSSection3 = () => {
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
                                {!isMobile && <div className="col-1"></div>}
                                <div className={`${isMobile ? "col-12" : "col-10"}`}>
                                    <p className="section3Head black extra-bold text-center">
                                        How to get started?
                                    </p>
                                    <p className="sectionContent text-center">
                                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.
                                    </p>
                                </div>
                                {!isMobile && <div className="col-1"></div>}
                            </div>
                        </Fade>
                        <div className="row" style={{ marginTop: "40px" }}>
                            {webdevServices.map((idea, index) => (
                                <Fade top={index % 2 === 0 ? true : false} bottom={index % 2 === 0 ? false : true} key={idea.id}>
                                    <div
                                        className={`${isMobile ? "col-12" : "col-4 m-auto"}`}
                                        key={idea.id}
                                    >
                                        <CommonCard
                                            imageCard={false}
                                            buttonCard={true}
                                            vertical={true}
                                            image={idea.image}
                                            name={idea.name}
                                            description={idea.description}
                                            isMobile={isMobile}
                                            background={"#DEE8FF"}
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

export default IOSSection3;
