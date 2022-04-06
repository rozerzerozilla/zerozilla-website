import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import sectionCover from "../../../assets/images/Custom-App-Section-3-Cover.webp";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Container, Row } from "react-bootstrap";

const Section3 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="Home-area6" style={{ margin: 0, padding: 0 }}>
      <Container fluid="lg">
        <Row>
          <div
            className={`col-12 Home-main-area6`}
            style={{
              paddingLeft: !isMobile ? "70px" : "15px",
              paddingRight: !isMobile && "70px",
              paddingTop: !isMobile && "70px",
            }}
          >
            <div className="row">
              <div
                className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
                style={{
                  marginTop: isMobile && "40px",
                  textAlign: "center",
                }}
              >
                <Zoom>
                  <img
                    src={sectionCover}
                    alt="section-cover"
                    style={{ width: "90%", paddingLeft: !isMobile && 40 }}
                  />
                </Zoom>
              </div>
              <div
                className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
                style={
                  isMobile
                    ? { padding: "0px 20px", textAlign: "center" }
                    : { paddingLeft: "70px" }
                }
              >
                <Fade right>
                  <div className={`row ${!isMobile && "mt-4"}`}>
                    <div className={`${isMobile ? "col-12 mt-4" : "col-10"}`}>
                      <p className="section3Head black extra-bold">
                        <span className="section3Head black">
                          Transform your business the smart way! 
                        </span>
                        <br />
                        <span className="highlightedSectionText secondary-color">
                          Mobile Apps Support
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className={`row ${isMobile && "m-0"}`}>
                    <div className={`${!isMobile ? "col-9" : "col-12"}`}>
                      <p className="sectionContent">
                        We provide end-to-end application design and integration. Whether it's a consumer-facing app or a game-changing enterprise-class solution, we oversee the whole mobile app development process, from design to delivery and beyond! 
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
