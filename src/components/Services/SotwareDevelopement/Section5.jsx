import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import BookCallButton from "../../BookCallButton";
import sectionCover from "../../../assets/images/soft-section-5-cover.png"
import Fade from 'react-reveal/Fade';

const Section5 = ({ handleFunction }) => {
    const [isMobile] = useContext(AppContext);


    return (
        <div className="row text-center py-5" style={{
            backgroundImage: `url(${sectionCover})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
        }}>
            <div className={`mx-auto ${isMobile?"col-12":"col-8"}`}>
                <div
                    className={`mb-3 sliderHead2`}
                >
                    Build scalable & engaging Software
                </div>
                <div>
                    Let's build your next-gen Application<br/> to help you sail smoothly through your business challenges & emerge a winner.
                </div>
                <div className={`text-center mt-4`}>
                    <button onClick={handleFunction} className="sliderBtns colored" style={{ border: "none", padding: "10px 15px" }}>
                        <span>Get a free Quote</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Section5;
