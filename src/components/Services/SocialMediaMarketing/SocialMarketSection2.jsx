import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { generatePromisingSocialLinks } from "../../../helper/services";
import CommonCard from "../../Common/CommonCard";

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
            <div className={`row`}>
              {!isMobile && <div className="col-1"></div>}
              <div className={`${isMobile ? "col-12" : "col-10"}`}>
                <p className="section3Head black extra-bold text-center">
                  Generating Promising Social Links
                </p>
                <p className="sectionContent text-center">
                  Build powerful, sharable social links on social media to get
                  more leads & expand your clientele
                </p>
              </div>
              {!isMobile && <div className="col-1"></div>}
            </div>
            <div className="row" style={{ marginTop: "40px" }}>
              {generatePromisingSocialLinks.map((idea) => (
                <div
                  className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
                  key={idea.id}
                  style={!isMobile ? { paddingRight: "20px" } : null}
                >
                  <CommonCard
                    image={idea.image}
                    name={idea.name}
                    description={idea.description}
                    isMobile={isMobile}
                    background={"#EBE2FF"}
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

export default Section2;
