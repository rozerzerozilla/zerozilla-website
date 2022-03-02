import React from "react";
import { cardContent } from "../../../helper/about";
import cardCover from "../../../assets/images/About-Section-5-Card-Image.png";

const DesktopTeamView = () => {
  return (
    <>
      {cardContent.map((card, idx) => (
        <div key={idx + 1} className="app-card mb-4" style={{ width: "220px" }}>
          <img
            className="card-img"
            src={cardCover}
            alt={`card-${idx + 1}`}
            style={{ width: "100%" }}
          />
          <div className="hid-box">
            <div className="text">
              <p className="sliderHead1 no-underline mb-0 medium">{card.title}</p>
              <p className="sliderHead1 no-underline small">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DesktopTeamView;
