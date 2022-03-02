import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import FormComponent from "./Form";
import ClientCarousel from "./Client";

const CommonFormAndSliderSection = ({ smallerText }) => {
  const [isMobile] = useContext(AppContext);
  const handleFormSubmit = () => console.log("submitting");
  return (
    <div className="row Home-area3 service" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area2`}
        style={{
          paddingLeft: !isMobile ? "70px" : "20px",
          paddingRight: !isMobile && "70px",
        }}
      >
        <div className="row">
          <div
            className={`${isMobile ? "col-12" : "col-6 my-auto right-border"}`}
            style={
              isMobile
                ? { paddingLeft: 25, textAlign: "center" }
                : { paddingRight: 50 }
            }
          >
            <div className={`row`}>
              <div className={`${isMobile ? "col-12" : "col-8"}`}>
                <p
                  className={`section3Head black extra-bold text-${
                    isMobile ? "center" : "left"
                  } ${smallerText ? "small" : ""}`}
                >
                  <span className="highlightedSectionText">Let’s talk</span>
                </p>
                <p
                  className={`sectionContent text-${
                    isMobile ? "center" : "left"
                  } ${smallerText ? "small" : ""}`}
                >
                  Response with business day, Guranteed!!
                </p>
              </div>
            </div>
            <div className="row col-12">
              <FormComponent
                isMobile={isMobile}
                handleFormSubmit={handleFormSubmit}
                smallerText={smallerText}
              />
            </div>
          </div>
          <div
            className={`${isMobile ? "col-12 mt-5" : "col-6 my-auto"}`}
            style={{
              marginLeft: !isMobile && "-2px",
              paddingLeft: 50,
              paddingRight: isMobile && "25px",
            }}
          >
            <div className={`row`}>
              <div className={`${isMobile ? "col-12" : "col-12"}`}>
                <p
                  className={`section3Head black extra-bold text-${
                    isMobile ? "center" : "left"
                  } ${smallerText ? "small" : ""}`}
                >
                  <span className="highlightedSectionText">
                    Some Words from Clients
                  </span>
                </p>
                <p
                  className={`sectionContent text-${
                    isMobile ? "center" : "left"
                  } ${smallerText ? "small" : ""}`}
                >
                  People say nicest things about us
                </p>
              </div>
            </div>
            <ClientCarousel isMobile={isMobile} smallerText={smallerText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonFormAndSliderSection;
