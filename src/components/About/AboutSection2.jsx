import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import sectionCover from "../../assets/images/About-Section-2-Cover.svg";
import Bullets from "../../assets/icons/About-bullet-icons.svg";
import { strategies } from "../../helper/about";

const Section2 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area3" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area3`}
        style={{
          paddingLeft: !isMobile ? "70px" : "15px",
          paddingRight: !isMobile && "70px",
        }}
      >
        <div className="row">
          <div
            className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
            style={
              isMobile ? { padding: "0px 20px", textAlign: "center" } : null
            }
          >
            <div className={`row col-12 ${isMobile && "m-0"}`}>
              <p className="section3Head black extra-bold">
                Finalizing new corporate ideas, game-plans and strategies for a
                firm.
              </p>
              {strategies.map((strategy, idx) => (
                <div className="row sectionContent mb-2" key={idx + 1}>
                  <div
                    className={`col-1 ${
                      !isMobile ? "my-auto" : ""
                    } text-center`}
                  >
                    <img src={Bullets} alt="bullet" height="16px" />
                  </div>
                  <div
                    className={`col-11 ${!isMobile ? "my-auto" : ""}`}
                    style={{
                      paddingLeft: !isMobile && 0,
                      textAlign: isMobile && "left",
                    }}
                  >
                    {strategy.title}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="row-col-12"
              style={{ marginTop: !isMobile ? "40px" : "20px" }}
            >
              <button className="appBtn">Discover more!</button>
            </div>
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-6 my-auto p-0"}`}
            style={{
              marginTop: isMobile && "40px",
              textAlign: isMobile ? "center" : "right",
            }}
          >
            <img
              src={sectionCover}
              alt="sectionVideo"
              style={{ width: "100% " }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;