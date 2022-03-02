import React from "react";
import OwlCarousel from "react-owl-carousel";
import { responsiveSlider } from "../../../helper/services";
import clientImage from "../../../assets/images/client-image.png";
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
      <div className="client-slider-2 p-0">
        <p className="text-start primary-color">
          <img
            className="quotes"
            src={leftQuote}
            alt="left-quote"
            width="50px"
          />
        </p>
        <p
          className={`text-start italic ${
            smallerText ? "sectionContent" : "slider-content"
          }`}
        >
          Have worked with Vinay & the experience was smooth. He was referred by
          one of my friend, thanks to him. Got the custom software developed
          with great UI. The project manager was easy to work with to explain
          the requirements. Overall experience was good & wishing the team all
          the best.
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
          className={`row justify-content-start ${
            smallerText ? "sectionContent" : "slider-content"
          }`}
        >
          <div className="col-3 my-auto">
            <img src={clientImage} alt="client" />
          </div>
          <div className="col-9 my-auto">
            <p className="bold mb-0">Sathyanarayana Ganiga</p>
            <p
              className={`italic ${smallerText ? "sectionContent small" : ""}`}
            >
              Trovech Infotech Pvt Ltd
            </p>
          </div>
        </div>
      </div>
      <div className="client-slider-2 p-0">
        <p className="text-start primary-color">
          <img
            className="quotes"
            src={leftQuote}
            alt="left-quote"
            width="50px"
          />
        </p>
        <p
          className={`text-start italic ${
            smallerText ? "sectionContent" : "slider-content"
          }`}
        >
          Have worked with Vinay & the experience was smooth. He was referred by
          one of my friend, thanks to him. Got the custom software developed
          with great UI. The project manager was easy to work with to explain
          the requirements. Overall experience was good & wishing the team all
          the best.
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
          className={`row justify-content-start ${
            smallerText ? "sectionContent" : "slider-content"
          }`}
        >
          <div className="col-3 my-auto">
            <img src={clientImage} alt="client" />
          </div>
          <div className="col-9 my-auto">
            <p className="bold mb-0">Sathyanarayana Ganiga</p>
            <p
              className={`italic ${smallerText ? "sectionContent small" : ""}`}
            >
              Trovech Infotech Pvt Ltd
            </p>
          </div>
        </div>
      </div>
      <div className="client-slider-2 p-0">
        <p className="text-start primary-color">
          <img
            className="quotes"
            src={leftQuote}
            alt="left-quote"
            width="50px"
          />
        </p>
        <p
          className={`text-start italic ${
            smallerText ? "sectionContent" : "slider-content"
          }`}
        >
          Have worked with Vinay & the experience was smooth. He was referred by
          one of my friend, thanks to him. Got the custom software developed
          with great UI. The project manager was easy to work with to explain
          the requirements. Overall experience was good & wishing the team all
          the best.
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
          className={`row justify-content-start ${
            smallerText ? "sectionContent" : "slider-content"
          }`}
        >
          <div className="col-3 my-auto">
            <img src={clientImage} alt="client" />
          </div>
          <div className="col-9 my-auto">
            <p className="bold mb-0">Sathyanarayana Ganiga</p>
            <p
              className={`italic ${smallerText ? "sectionContent small" : ""}`}
            >
              Trovech Infotech Pvt Ltd
            </p>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default ClientCarousel;
