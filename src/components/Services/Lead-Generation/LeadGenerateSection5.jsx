import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { rankYourPageCards } from "../../../helper/services";

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
                <p className="section3Head black extra-bold text-center small">
                  Unfolding the brilliant advantages that our smart lead
                  generation solutions
                </p>
                <p className="sectionContent text-center small">
                  Generating leads can work to the advantage of any business as
                  good leads can become the most loyal customers for any
                  business entity in just no time!
                </p>
              </div>
              {!isMobile && <div className="col-1"></div>}
            </div>
            <div className="row" style={{ marginTop: !isMobile && 20 }}>
              {rankYourPageCards.map((card, idx) => (
                <div
                  key={card.id}
                  className={`${!isMobile ? "col-3" : "col-12"}`}
                  style={
                    isMobile
                      ? { marginBottom: "25px", marginTop: idx === 0 && "25px" }
                      : null
                  }
                >
                  <div
                    className="service-card transparent text-center"
                    style={{ padding: "30px 40px 20px" }}
                  >
                    <div className="circle" style={{ padding: 40 }}>
                      <img
                        src={require(`../../../assets/icons/${card.image}`)}
                        alt={`card-content-${card.id}`}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <p className="sectionContent large bold secondary-color mt-2 small">
                      {card.name}
                    </p>
                    <p
                      className="sectionContent small"
                      //   style={{ fontSize: "12px" }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
