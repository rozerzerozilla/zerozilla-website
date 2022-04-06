import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { customWebDevCard } from "../../../helper/services";
import BookCallButton from "../../BookCallButton";
import Fade from 'react-reveal/Fade';
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section2 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div
      className="Home-area4 about custom-dev"
      style={{ margin: 0, padding: 0 }}
    >
      <Container fluid="lg">
        <Row>
          <div
            className={`col-12 Home-main-area2`}
            style={{
              paddingLeft: !isMobile ? "70px" : "20px",
              paddingRight: !isMobile && "70px",
              paddingBottom: 0,
            }}
          >
            <div className="row">
              <div
                className={"col-12"}
                style={
                  isMobile
                    ? { padding: "0px 20px 0 10px", textAlign: "center" }
                    : null
                }
              >
                <Fade>
                  <div className={`row`}>
                    <div className={`col-12`}>
                      <p
                        className={`section3Head black extra-bold text-${isMobile ? "center" : "left"
                          }`}
                      >
                        Create innovative experiences for your customers with mobile apps!
                      </p>
                      <p
                        className={`sectionContent text-${isMobile ? "center" : "left"
                          }`}
                      >
                        Strategize new ideas and generate true value for your business with competitive mobile apps. Help your customers engage with your business in the smartest way possible! 
                      </p>
                    </div>
                  </div>
                </Fade>
                <div
                  className={`row ${!isMobile ? "justify-content-center" : ""}`}
                  style={{ marginTop: "50px" }}
                >
                  {customWebDevCard.map((card, idx) => (
                    <Fade top={idx % 3 === 2 ? true : false} bottom={idx % 3 === 1 ? true : false} right={idx % 3 === 0 ? true : false}>
                      <div
                        key={card.id}
                        className={`${!isMobile ? "col-4" : "col-12"}`}
                        style={
                          isMobile
                            ? { marginBottom: "25px", marginTop: idx === 0 && "25px" }
                            : null
                        }
                      >
                        <div className="service-card text-center parent">
                          <div
                            className="circle child"
                            style={{ padding: 25, background: "#fff" }}
                          >
                            <img
                              src={require(`../../../assets/icons/${card.image}`)}
                              alt={`card-content-${card.id}`}
                              style={{ width: "40px", height: "40px" }}
                            />
                          </div>
                          <p className="sliderHead1 no-underline text-center" style={{ marginTop: "40px", fontWeight: "600" }}>
                            {card.name}
                          </p>
                          <p
                            className="sliderHead1 no-underline small text-center"
                          >
                            {card.description}
                          </p>
                          <p className="text-center" style={{ marginTop: "20px" }}>
                            <Link to={card.href}>
                              <button
                                className={`sliderBtns colored-outlined`}
                              >
                                Know More
                              </button>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
