import React from "react";
import { cardContent } from "../../../helper/about";
import cardCover from "../../../assets/images/About-Section-5-Card-Image.webp";

const DesktopTeamView = () => {
  return (
    <>
      {cardContent.map((card, idx) => (
        <div key={idx + 1} className="app-card mb-4 col-xs-12 col-md-2 col-sm-6">
          <img
            className="card-img team-img"
            src={require(`../../../assets/teams/${card.img}`)}
            alt={`card-${idx + 1}`}
            style={{ width: "100%", transition: "all 0.3s ease-out" }}
          />
          <img
            className="card-img image-hover"
            src={require(`../../../assets/teams/${card.hoverimg}`)}
            alt={`card-hover-${idx + 1}`}
            style={{ transition: "all 0.3s ease-out" }}
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
