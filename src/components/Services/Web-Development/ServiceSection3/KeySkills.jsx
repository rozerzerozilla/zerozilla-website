import React from "react";
import richUI from "../../../../assets/icons/User Experience.svg";
import customizedAudience from "../../../../assets/icons/Target Audience.svg";
import latestTech from "../../../../assets/icons/Data Analytic.svg";
import timeDelivery from "../../../../assets/icons/Time Management.svg";
import mobileFriendly from "../../../../assets/icons/Website.svg";
import marketingConsult from "../../../../assets/icons/Networking.svg";

const KeySkills = () => {
  return (
    <>
      <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-column">
          <div className="key-areas text-center">
            <img src={richUI} alt="rich-ui" />
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="key-areas text-center">
            <img src={customizedAudience} alt="customized-audience" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="text-center sectionContent mt-3">Rich UI/UX</p>
        </div>
        <div className="col-6">
          <p className="text-center sectionContent mt-3">
            Customised for your Needs
          </p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around mt-3">
        <div className="d-flex flex-column">
          <div className="key-areas text-center">
            <img src={mobileFriendly} alt="mobile-friendly" />
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="key-areas text-center">
            <img src={latestTech} alt="latest-tech" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="text-center sectionContent mt-3">Mobile friendly</p>
        </div>
        <div className="col-6">
          <p className="text-center sectionContent mt-3">Latest technology</p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around mt-3">
        <div className="d-flex flex-column">
          <div className="key-areas text-center">
            <img src={timeDelivery} alt="time-delivery" />
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="key-areas text-center">
            <img src={marketingConsult} alt="marketing-consultation" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="text-center sectionContent mt-3">Timely Delivery</p>
        </div>
        <div className="col-6">
          <p className="text-center sectionContent mt-3">
            Marketing Consultation
          </p>
        </div>
      </div>
    </>
  );
};

export default KeySkills;
