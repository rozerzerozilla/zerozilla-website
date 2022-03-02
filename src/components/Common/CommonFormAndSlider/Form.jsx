import React, { useState } from "react";
import Recaptcha from "react-recaptcha";
import BookCallButton from "../../BookCallButton";

const FormComponent = ({ isMobile, handleFormSubmit, smallerText }) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = () => {
    if (!isVerified) {
      alert(`Please confirm that you're not a Robot!`);
      return;
    }
    handleFormSubmit();
  };

  return (
    <div className="form-container-box">
      <div className="row">
        <div className={`${isMobile ? "col-12" : "col-6"}`}>
          <input
            className={`app-form-inputs sectionContent w-100 ${
              smallerText ? "small" : ""
            }`}
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className={`${isMobile ? "col-12 mt-4" : "col-6"}`}>
          <input
            className={`app-form-inputs sectionContent w-100 ${
              smallerText ? "small" : ""
            }`}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <input
            className={`app-form-inputs sectionContent w-100 ${
              smallerText ? "small" : ""
            }`}
            type="text"
            placeholder="Email Address"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <input
            className={`app-form-inputs sectionContent w-100 ${
              smallerText ? "small" : ""
            }`}
            type="text"
            placeholder="Type of enquiry"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <textarea
            rows={3}
            className={`app-form-inputs sectionContent w-100 ${
              smallerText ? "small" : ""
            }`}
            type="text"
            placeholder="Project details"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className={`${isMobile ? "col-12 text-start" : "col-6 my-auto"}`}>
          {/* replace this siteKey value with new value */}
          <Recaptcha
            sitekey="6Ld60JseAAAAALFiR6q0Q-6wrF6C7onyvA7ozBsh"
            render="explicit"
            onloadCallback={() => console.log("Recaptcha Loaded")}
            verifyCallback={() => setIsVerified(true)}
          />
        </div>
        <div
          className={`${
            isMobile ? "col-12 text-start mt-4" : "col-6 text-end my-auto"
          }`}
        >
          <BookCallButton
            className={"common-section-1"}
            isColored={false}
            text={`Send details`}
            showImage={false}
            handleFunction={handleSubmit}
            // smallText={smallerText}
          />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
