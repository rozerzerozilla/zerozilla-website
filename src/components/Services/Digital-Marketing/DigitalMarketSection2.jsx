import React, { useContext } from "react";
import {Link} from 'react-router-dom'
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
              {digitalMarketCards.slice(0,6).map((card, idx) => (
                <Fade key={card.id} top={idx % 3 === 2 ? true : false} bottom={idx % 3 === 1 ? true : false} right={idx % 3 === 0 ? true : false}>
                <div
                  key={card.id}
                  className={`${!isMobile ? "col-4" : "col-12"}`}
                  style={{ marginBottom: "40px", display:"grid" }}
                >
                  <div className="service-card">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={require(`../../../assets/icons/${card.image}`)}
                        alt={`card-content-${card.id}`}
                        style={{ width: "80px", marginBottom: "30px" }}
                      />
                    </div>
                    <p className="sliderHead1 no-underline text-center">
                      {card.name}
                    </p>
                    <p className="sliderHead1 no-underline small text-center">
                      {card.description}
                    </p>
                    <div className="text-center" style={{ marginTop: "20px" }}>
                      {idx <= 5 && <Link to={card.href}><BookCallButton
                        className={"common-section-1"}
                        isColored={false}
                        text={`Know More`}
                        showImage={false}
                        /></Link>}
                    </div>
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
