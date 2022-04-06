import { useContext } from "react";
import { AppContext } from "../../context/Context";
import { teams } from "../../helper/career";
import BookCallButton from "../BookCallButton";
import Fade from 'react-reveal/Fade';

const Section2 = () => {
    const [isMobile] = useContext(AppContext);
    return (
        <div className="container career-section-2 mb-5 mt-5">
            <div className="row align-items-center text-center">
                <h2>Hear from the Team</h2>
                <div className="w-100">
                    <label className="career-subtitle">
                        We’re equal parts left and right brained. And we’re generally likeable. We won’t bored you with more adjectives. See for yourself.
                    </label>
                </div>
            </div>
            <br/>
            <div className="row mt-5">
                <div
                    className={`row ${!isMobile ? "justify-content-center" : ""}`}
                    style={{ marginTop: "50px" }}
                >
                    {teams.slice(0, 4).map((card, idx) => (
                        <div
                            key={card.id}
                            className={`${!isMobile ? "col-4" : "col-12"}`}
                            style={
                                isMobile
                                    ? { marginBottom: "25px", marginTop: idx === 0 && "25px" }
                                    : null
                            }
                        >
                            <div className="career-card d-flex flex-column align-items-start">
                                <img
                                    className="career-team-img"
                                    src={require(`../../assets/images/${card.image}`)}
                                    alt={`card-content-${card.id}`}
                                    style={{ width: "150px", height: "150px" }}
                                />
                                <div className="content-section p-5 d-flex flex-column">
                                    <label className="fullname text-left" style={{ marginTop: "40px" }}>
                                        {card.name}
                                    </label>
                                    <label className="position text-left">{card.position}</label>
                                    <br />
                                    <label
                                        className="text-left"
                                        style={{ fontSize: "15px" }}
                                    >
                                        {card.description}
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section2;