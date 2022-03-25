import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import FormComponent from "./Form";
import ClientCarousel from "./Client";
import Fade from 'react-reveal/Fade';
import { Container, Row } from "react-bootstrap";

const CommonFormAndSliderSection = ({ smallerText }) => {
  const [isMobile] = useContext(AppContext);
  const handleFormSubmit = (e) => console.log("submitting");
  return (
    <div className="Home-area3 service" style={{ margin: 0, padding: 0 }}>
      <Container>
        <Row>
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
                <Fade left>
                  <div className={`row`}>
                    <div className={`${isMobile ? "col-12" : "col-8"}`}>
                      <p
                        className={`section3Head black extra-bold text-${isMobile ? "center" : "left"
                          } ${smallerText ? "small" : ""}`}
                      >
                        <span className="highlightedSectionText">Let’s talk</span>
                      </p>
                      <p
                        className={`sectionContent text-${isMobile ? "center" : "left"
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
                </Fade>
              </div>
              <div
                className={`${isMobile ? "col-12 mt-5" : "col-6 my-auto"}`}
                style={{
                  marginLeft: !isMobile && "-2px",
                  paddingLeft: 50,
                  paddingRight: isMobile && "25px",
                }}
              >
                <Fade right>
                  <div className={`row`}>
                    <div className={`${isMobile ? "col-12" : "col-12"}`}>
                      <p
                        className={`section3Head black extra-bold text-${isMobile ? "center" : "left"
                          } ${smallerText ? "small" : ""}`}
                      >
                        <span className="highlightedSectionText">
                          Some Words from Clients
                        </span>
                      </p>
                    </div>
                  </div>
                  <ClientCarousel isMobile={isMobile} smallerText={smallerText} />
                </Fade>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default CommonFormAndSliderSection;
