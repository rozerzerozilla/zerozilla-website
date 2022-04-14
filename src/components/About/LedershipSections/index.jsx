import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";
import LeadershipCard from "./LeadershipCard";
import { Row, Col } from "react-bootstrap";
import { leadershipSection } from "../../../helper/about";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
// or
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import Fade from 'react-reveal/Fade';

const LeadershipSection = () => {
    const [isMobile, setIsMobile] = useContext(AppContext);
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [showDetails, setShowDetails] = useState(false);
    const handleExpand = (index) => {
        if (index === currentIndex) {
            setCurrentIndex(-1);
            setShowDetails(false)
        }else {
            setCurrentIndex(index)
            setShowDetails(true)
        } 
    };
    return (
        <div className="container-lg my-5">
            <div className="row">
                <div className="d-flex flex-column align-items-center text-center col-md-8 mx-auto">
                    <p className="section3Head black mb-0">
                        Meet Our Leaders
                    </p>
                    <p className="sectionContent">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                </div>
            </div>
            {showDetails ?  <>
            <div className="leaderCard" style={{ gridTemplateColumns: isMobile ? "1fr" :  "250px 1fr"}}>
                <div
                    className={`d-flex flex-column align-items-center justify-content-center w-100 pt-5 pb-5`}>
                        <img src={require(`../../../assets/images/leaders/${leadershipSection[currentIndex].profilePic}`)}
                        alt="profileimage" width={"100px"} height="100px"
                        className="leader-img"
                    />
                        <label className="leaderCard__title">{leadershipSection[currentIndex].name}</label>
                        <label className="leaderCard__tagline">{leadershipSection[currentIndex].tagline}</label>
                        <label className="leaderCard__education"><em>{leadershipSection[currentIndex].education}</em></label>
                </div>
                    <div className="p-4 pt-5 pb-5 colored-box"
                        style={{
                            borderTopRightRadius: isMobile ? "0px" : "15px",
                            borderBottomRightRadius: isMobile ? "15px" : "15px",
                            borderBottomLeftRadius: isMobile ? "15px" : "0"
                        }}
                    >
                        <div className="d-flex align-items-start justify-content-around">
                            <div className="d-flex flex-column align-items-start justify-content-around exp_pos">
                                <div className="d-flex flex-column align-items-start">
                                    <label htmlFor={`exprience-for-${leadershipSection[currentIndex].name}`} className="leaderCard__tagline">Experience:</label>
                                    <p className="leaderCard__description" id={`exprience-for-${leadershipSection[currentIndex].name}`}>{leadershipSection[currentIndex].experiences}</p>
                                </div>
                                <div className="d-flex flex-column align-items-start">
                                    <label htmlFor={`exprience-for-${leadershipSection[currentIndex].name}`} className="leaderCard__tagline">Positon Held:</label>
                                    <p className="leaderCard__description" id={`exprience-for-${leadershipSection[currentIndex].name}`}>{leadershipSection[currentIndex].position_held}</p>
                                </div>

                            </div>
                           <div className="d-flex flex-column align-items-start justify-content-around">
                            <label htmlFor={`exprience-for-${leadershipSection[currentIndex].name}`} className="leaderCard__tagline">Achievements:</label>
                            <ul>
                                {leadershipSection[currentIndex].achievments.map((achive, idx) => <li key={idx} className="leaderCard__description">
                                    {achive}</li>
                                )}
                            </ul>
                            <p className="leaderCard__description text-justify">Mission: {leadershipSection[currentIndex].misson}</p>
                        </div> 
                    </div>
                    <div onClick={()=>handleExpand(currentIndex)}
                        className="d-flex align-items-center justify-content-end w-100">
                            <div className="leaderCard__mission">
                                <label className="leaderCard__description text-justify">
                                    <span className="leaderCard__tagline">Mission:</span> {leadershipSection[currentIndex].misson}</label>
                            </div>
                    </div>
                </div>
        </div>
    </>: <Splide
                options={{
                    type : 'loop',
                    rewind: true,
                    perPage: 2,
                    perMove: 1,
                    autoplay: true,
                    interval: 3000,
                    breakpoints: {
                        640: {
                            perPage: 1,
                        },
                        800: {
                            perPage: 1,
                        },
                        1000: {
                            perPage: 2,
                        },
                        1200: {
                            perPage: 3,
                        },
                    }
                }}
            >
                {leadershipSection.map((ele, idx) => <SplideSlide
                    className="mb-4 me-auto ms-auto p-5" key={ele.id + idx} style={{ transition: "0.2s" }}>
                    <LeadershipCard
                        index={idx}
                        expand={currentIndex}
                        name={ele.name}
                        profilePic={ele.profilePic}
                        tagline={ele.tagline}
                        education={ele.education}
                        experiences={ele.experiences}
                        position_held={ele.position_held}
                        achievments={ele.achievments}
                        misson={ele.misson}
                        handleExpand={() => handleExpand(idx)}
                    />
                </SplideSlide>)}
            </Splide>}
            {/* <Row>
                {leadershipSection.map((ele, idx) => <Col
                    xs="12"
                    md={expand === idx ? '12' : '6'}
                    className="mb-4 me-auto ms-auto" key={ele.id + idx} style={{ transition: "0.2s" }}>
                    <LeadershipCard
                        index={idx}
                        expand={expand}
                        name={ele.name}
                        profilePic={ele.profilePic}
                        tagline={ele.tagline}
                        education={ele.education}
                        experiences={ele.experiences}
                        position_held={ele.position_held}
                        achievments={ele.achievments}
                        misson={ele.misson}
                        handleExpand={() => handleExpand(idx)}
                    />
                </Col>)}
            </Row> */}
        </div>
    );
};

export default LeadershipSection;
