import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { bizIdeas } from "../../../helper";
import CommonCard from "../../Common/CommonCard";

const Section5 = () => {
  const [isMobile] = useContext(AppContext);
  // console.log(bizIdeas.length)
  return (
    <div className="row Home-area5" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area5`}
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
              {!isMobile && <div className="col-2"></div>}
              <div className={`${isMobile ? "col-12" : "col-8"}`}>
                <p className="section3Head text-center">
                  Reinventing new business ideas and markets via web
                </p>
              </div>
              {!isMobile && <div className="col-2"></div>}
            </div>

            <div className="row" style={{ marginTop: "40px" }}>
              {bizIdeas.map((idea) => (
                <div
                  className={`${isMobile ? "col-12" : "col-4 my-auto"}`}
                  key={idea.id}
                  style={!isMobile ? { paddingRight: "20px" } : null}
                >
                  <CommonCard
                    image={idea.image}
                    name={idea.name}
                    description={idea.description}
                    isMobile={isMobile}
                    background={"#E0D1FF"}
                    imageWidth={"50%"}
                    padding={"20px 30px"}
                  />
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
