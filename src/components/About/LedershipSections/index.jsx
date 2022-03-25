import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";
import LeadershipCard from "./LeadershipCard";
import { Row, Col } from "react-bootstrap";
import { leadershipSection } from "../../../helper/about";
import Fade from 'react-reveal/Fade';

const LeadershipSection = () => {
    const [isMobile, setIsMobile] = useContext(AppContext);
    const [expand, setExpand] = useState(-1)
    const handleExpand = (index) => index === expand ? setExpand(-1) :  setExpand(index);
    return (
        <div className="container-lg mb-5">
            <div className="d-flex flex-column align-items-center text-center">
                <p className="section3Head black mb-0">
                    Meet Our Leaders
                </p>
                <p className="sectionContent">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.
                </p>
            </div>
            <Row>
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
            </Row>
        </div>
    );
};

export default LeadershipSection;
