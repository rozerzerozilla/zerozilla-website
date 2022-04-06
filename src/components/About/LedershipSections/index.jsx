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
    const [expand, setExpand] = useState(-1)
    const handleExpand = (index) => index === expand ? setExpand(-1) :  setExpand(index);
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
            <Splide
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
                        1000: {
                            perPage: 1,
                        },
                    }
                }}
            >
                {leadershipSection.map((ele, idx) => <SplideSlide
                    xs="12"
                    md={expand === idx ? '12' : '6'}
                    className="mb-4 me-auto ms-auto p-5" key={ele.id + idx} style={{ transition: "0.2s" }}>
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
                </SplideSlide>)}
            </Splide>
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
