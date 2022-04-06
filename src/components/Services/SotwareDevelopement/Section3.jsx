import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { softwarePageCards } from "../../../helper/services";
import Fade from "react-reveal/Fade";

const Section3 = () => {
    const [isMobile] = useContext(AppContext);
    return (
        <div className="row Home-area3" style={{ margin: 0, padding: 0, backgroundColor:"#FFF9F9" }}>
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
                        <div className={`row`}>
                            {!isMobile && <div className="col-1"></div>}
                            <div className={`${isMobile ? "col-12" : "col-10"}`}>
                                <p className="sectionContent text-center">
                                    We are your reliable partners
                                </p>
                                <p className="section3Head black extra-bold text-center">
                                    <span className="section3Head black" style={{fontWeight:"600"}}>
                                        What Makes Us Different?
                                    </span>
                                </p>
                            </div>
                            {!isMobile && <div className="col-1"></div>}
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: !isMobile && 30 }}>
                    {softwarePageCards.map((card, idx) => (

                        <div 
                            key={card.id}
                            className={`${!isMobile ? "col-3" : "col-12"}`}
                            style={
                                isMobile
                                    ? { marginBottom: "25px", marginTop: idx === 0 && "25px" }
                                    : null
                            }
                        >
                            <Fade left={idx % 4 === 0} top={idx % 4 === 3} bottom={idx % 4 === 2} right={idx % 4 === 1} key={card.id}>
                                <div className="service-card transparent text-center" style={{ padding: '30px 40px 20px' }}>
                                    <div>
                                        <img
                                            src={require(`../../../assets/icons/${card.image}`)}
                                            alt={`card-content-${card.id}`}
                                            style={{ width: "150px", height: "150px" }}
                                        />
                                    </div>
                                    <p className="sectionContent large bold secondary-color mt-2">
                                        {card.name}
                                    </p>
                                    <p
                                        className="sectionContent small"
                                    //   style={{ fontSize: "12px" }}
                                    >
                                        {card.description}
                                    </p>
                                </div>
                            </Fade>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section3;
