import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { digitalMarketCards } from "../../../helper/services";
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
            <Fade bottom>
            <div className={`row`}>
              <div className={`col-12`}>
                <p
                  className={`section3Head black extra-bold text-${
                    isMobile ? "center" : "left"
                  }`}
                >
                  Marketing Strategy that works in REAL!
                </p>
                <p
                  className={`sectionContent text-${
                    isMobile ? "center" : "left"
                  }`}
                >
                  No more bookish strategies or fake promises!
                  <br />
                  Transparent & proven methodologies for skyrocketing your
                  business in no time!
                </p>
              </div>
              </div>
            </Fade>
            <div className="row" style={{ marginTop: "40px" }}>
              {digitalMarketCards.map((card, idx) => (
                <Fade top={idx % 3 === 2 ? true : false} bottom={idx % 3 === 1 ? true : false} right={idx % 3 === 0 ? true : false}>
                <div
                  key={card.id}
                  className={`${!isMobile ? "col-4" : "col-12"}`}
                  style={{ marginBottom: "40px" }}
                >
                  <div className="service-card">
                    <p className="text-center mt-3">
                      <img
                        src={require(`../../../assets/icons/${card.image}`)}
                        alt={`card-content-${card.id}`}
                        style={{ width: "50px", marginBottom: "40px" }}
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
