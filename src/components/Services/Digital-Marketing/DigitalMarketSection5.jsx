import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { riskFreeBizAnalysis } from "../../../helper/services";

const Section5 = () => {
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
            <div className={`row`}>
              {!isMobile && <div className="col-1"></div>}
              <div className={`${isMobile ? "col-12" : "col-10"}`}>
                <p className="section3Head black extra-bold text-center">
                  A risk free business analysis
                </p>
                <p className="sectionContent text-center">
                  A single false step can knock your business out of market.
                  <br />
                  If you want to shield your business against such risks,
                  risk-free business analysis is a must!
                </p>
              </div>
              {!isMobile && <div className="col-1"></div>}
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: !isMobile && 30 }}>
          {riskFreeBizAnalysis.map((card, idx) => (
            <div
              key={card.id}
              className={`${!isMobile ? "col-3" : "col-12"}`}
              style={
                isMobile
                  ? { marginBottom: "25px", marginTop: idx === 0 && "25px" }
                  : null
              }
            >
              <div className="service-card transparent text-center">
                    <div className="circle">
                      <img
                        src={require(`../../../assets/icons/${card.image}`)}
                        alt={`card-content-${card.id}`}
                        style={{ width: "50px", height: "50px" }}
                      />
                </div>
                <p className="sliderHead1 no-underline text-center mt-4">
                  {card.name}
                </p>
                <p
                  className="sliderHead1 no-underline small text-center"
                  style={{ fontSize: "12px" }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
