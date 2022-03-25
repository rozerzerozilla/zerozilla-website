import React from "react";
import OwlCarousel from "react-owl-carousel";
import { responsiveSlider } from "../../../helper/services";
import { clientsComments } from "../../../helper/portfolio";
import leftQuote from "../../../assets/icons/left-quote.svg";
import rightQuote from "../../../assets/icons/right-quote.svg";

const ClientCarousel = ({ isMobile, smallerText }) => {
  return (
    <OwlCarousel
      //   ref={ref}
      loop
      autoPlay={true}
      autoplayTimeout={1000}
      margin={20}
      //   nav
      items={1}
      className="owl-theme client-sliderr"
      style={{ paddingRight: "20px", marginTop: "50px" }}
      responsive={responsiveSlider}
    >
      {clientsComments.map((ele, idx) => <div className="client-slider-2 p-0">
        <p className="text-start primary-color">
          <img
            className="quotes"
            src={leftQuote}
            alt="left-quote"
            width="50px"
          />
        </p>
        <p
          className={`text-start italic ${smallerText ? "sectionContent" : "slider-content"
            }`}
        >
          {ele.comments}
        </p>
        <p className="text-end primary-color">
          <img
            className="quotes right"
            src={rightQuote}
            alt="right-quote"
            width="50px"
          />
        </p>
        <div
          className={`row justify-content-start ${smallerText ? "sectionContent" : "slider-content"
            }`}
        >
          <div className="col-3 my-auto">
            <img src={require(`../../../assets/images/clients/${ele.clientimage}`)} alt="client"
              style={{width:"100px", objectFit:"cover", borderRadius:"60px"} }
            />
          </div>
          <div className="col-9 my-auto">
            <p className="bold mb-0">{ele.name}</p>
            <p
              className={`italic ${smallerText ? "sectionContent small" : ""}`}
            >
              {ele.company}
            </p>
          </div>
        </div>
      </div>)}
    </OwlCarousel>
  );
};

export default ClientCarousel;
