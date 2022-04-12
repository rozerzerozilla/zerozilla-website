import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { iOSStrategy } from "../../../helper/services";
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
                                        Have a hybrid app idea? We can make it a reality!
                                    </p>
                                    <p className="sectionContent text-center">
                                        We strive to create hybrid apps that adapt to each customer's specific demands in order to maximize your business' ROI.
                                    </p>
                                </div>
                                {!isMobile && <div className="col-1"></div>}
                            </div>
                        </Fade>
                        <div className="row" style={{ marginTop: "40px" }}>
                            {iOSStrategy.map((idea, index) => (
                                <Fade top={index % 2 === 0 ? true : false} bottom={index % 2 === 0 ? false : true} key={idea.id}>
                                    <div
                                        className={`${isMobile ? "col-12" : "col-4 my-auto"}`}
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
    );
};

export default IOSSection3;
