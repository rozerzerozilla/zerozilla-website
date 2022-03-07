import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { cardContent } from "../../../helper/services";
import BookCallButton from "../../BookCallButton";
import Fade from 'react-reveal/Fade';

const Section2 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area4 about" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area2`}
        style={{
          paddingLeft: !isMobile ? "70px" : "20px",
          paddingRight: !isMobile && "70px",
        }}
      >
        <div className="row">
          <div
            className={"col-12"}
            style={
              isMobile ? { padding: "0px 20px", textAlign: "center" } : null
            }
          >
            <Fade left>
              <div className={`row`}>
                <div className={`${isMobile ? "col-12" : "col-6"}`}>
                  <p
                    className={`section3Head black extra-bold text-${
                      isMobile ? "center" : "left"
                    }`}
                  >
                    Web services we provide
                  </p>
                  <p
                    className={`sectionContent text-${
                      isMobile ? "center" : "left"
                    }`}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  </p>
                </div>
              </div>
            </Fade>
            <div className="row" style={{ marginTop: "40px" }}>
              {cardContent.map((card, index) => (
                <Fade top={index % 2 === 0 ? true : false} bottom={index % 2 === 0 ? false : true} key={card.id}>
                  <div
                    key={card.id}
                    className={`${!isMobile ? "col-4" : "col-12"}`}
                    style={isMobile ? { marginBottom: "40px" } : null}
                  >
                    <div className="service-card">
                      <p className="text-center">
                        <img
                          src={require(`../../../assets/images/${card.image}`)}
                          alt={`card-content-${card.id}`}
                          style={{ width: "100px" }}
                        />
                      </p>
                      <p className="sliderHead1 no-underline text-center">
                        {card.name}
                      </p>
                      <p className="sliderHead1 no-underline small text-center">
                        {card.description}
                      </p>
                      <p className="text-center" style={{ marginTop: "20px" }}>
                        <BookCallButton
                          className={"common-section-1"}
                          isColored={false}
                          text={`Get Quote`}
                          showImage={false}
                        />
                      </p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
