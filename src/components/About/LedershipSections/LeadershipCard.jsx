import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";
import { Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import { SiFacebook, SiLinkedin, SiTwitter, SiBookbub, SiSquare } from "react-icons/si";
import { FiChevronRight } from "react-icons/fi"
import BookCallButton from "../../BookCallButton";
const LeadershipSection = ({
    name,
    tagline,
    education,
    experiences,
    position_held,
    achievments,
    misson,
    profilePic,
    handleExpand,
    expand,
    index
}) => {
    const [isMobile, setIsMobile] = useContext(AppContext);

    return (
        <>
            <div className="leaderCard" style={{ gridTemplateColumns: isMobile ? "1fr" :  "250px 1fr"}}>
            <div
                className={`d-flex flex-column align-items-center justify-content-center w-100  pt-5 pb-5`}>
                <img src={require(`../../../assets/images/leaders/${profilePic}`)}
                    alt="profileimage" width={"100px"} height="100px"
                    className="img-responsive leader-img"
                />
                <label className="leaderCard__title">{name}</label>
                <label className="leaderCard__tagline">{tagline}</label>
                <label className="leaderCard__education"><em>{education}</em></label>
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
                                <label htmlFor={`exprience-for-${name}`} className="leaderCard__tagline">Experience:</label>
                                <p className="leaderCard__description" id={`exprience-for-${name}`}>{experiences}</p>
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <label htmlFor={`exprience-for-${name}`} className="leaderCard__tagline">Positon Held:</label>
                                <p className="leaderCard__description" id={`exprience-for-${name}`}>{position_held}</p>
                            </div>

                        </div>
                        {expand === index ? <div className="d-flex flex-column align-items-start justify-content-around">
                            <label htmlFor={`exprience-for-${name}`} className="leaderCard__tagline">Achievements:</label>
                            <ul>
                                {achievments.map((achive, idx) => <li key={idx} className="leaderCard__description">
                                    {achive}</li>
                                )}
                            </ul>
                            <p className="leaderCard__description text-justify">Mission: {misson}</p>
                        </div> : null}
                </div>
                <div onClick={handleExpand}
                    className="d-flex align-items-center justify-content-end w-100">
                    {expand === index ?<div className="leaderCard__mission"> 
                            <label className="leaderCard__description text-justify">
                                <span className="leaderCard__tagline">Mission:</span> {misson}</label>
                        </div>
                    : <div className="leaderCard__readmore"><span>Read More</span> <FiChevronRight /> </div>}
                    
                </div>
            </div>
        </div>
            
        {/* <div className="d-flex flex-column align-items-start justify-content-start p-2 leaderCard">
            <div lassName="d-flex flex-row align-items-center justify-content-center w-100">
                <img src={require(`../../../assets/images/leaders/${profilePic}`)}
                    alt="profileimage" width={"200px"} height="200px"
                    className="img-responsive leader-img"
                />
            </div>
            <br />
            <div className="d-flex flex-column align-items-start justify-content-start p-2">
                <h3>{name}</h3>
                <h6>{tagline}</h6>
                <br />
                <p className="leaderCard__description text-justify">Education: {education}</p>
                <p className="leaderCard__description text-justify">Experience: {experiences}</p>
                <p className="leaderCard__description text-justify">Positon Held: {position_held}</p>
                <h6>Achievements</h6>
                <ul>
                    {achievments.map((achive, idx) => <li key={idx} className="leaderCard__description text-justify">
                        {achive}</li>
                    )}
                </ul>
                <p className="leaderCard__description text-justify">Mission: {misson}</p>
            </div>
            <div className="d-flex flex flex-row align-items-start justify-content-between p-2 w-100">
                <div><SiFacebook /></div>
                <div><SiLinkedin /></div>
                <div><SiTwitter /></div>
            </div>
            <div>
                <BookCallButton
                    className={null}
                    isColored={true}
                    showImage={false}
                    text={`Read More`}
                />
            </div>
        </div> */}
    </>);
};

export default LeadershipSection;
