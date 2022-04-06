import React from "react";
import OwlCarousel from "react-owl-carousel";
import { responsiveSlider } from "../../../helper";
import cardCover from "../../../assets/images/About-Section-5-Card-Image.webp";
import { cardContent } from "../../../helper/about";

const MobileTeamView = () => {
  return (
    <OwlCarousel
      //   ref={ref}
      loop
      autoPlay={true}
      autoplayTimeout={1000}
      margin={20}
      //   nav
      items={3}
      className="owl-theme"
        style={{ paddingRight: "20px" }}
      responsive={responsiveSlider}
    >
      {cardContent.map((card, idx) => (
        <div className="sliderCard" key={card.id}>
          <div className="row col-12 imageCustomBorder">
            <img
              className="card-img team-img"
              src={require(`../../../assets/teams/${card.img}`)}
              alt={`card-${idx + 1}`}
              style={{ width: "100%", transition: "all 0.3s ease-out" }}
            />
            {/* <img
              className="card-img image-hover"
              src={require(`../../../assets/teams/${card.hoverimg}`)}
              alt={`card-hover-${idx + 1}`}
              style={{ transition: "all 0.3s ease-out" }}
            /> */}
          </div>
          <div className="row col-12 clientCustomBorder">
            <div className="absoluteDoubleQuotes"></div>
            <p className="clientName mb-0">{card.title}</p>
            <p className="clientDetails mb-0">{card.description}</p>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default MobileTeamView;
