import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";
import video from "../../../assets/images/skill-mine-video.webp";

const Section2 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area3" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area2`}
        style={{
          paddingLeft: !isMobile ? "70px" : "20px",
          paddingRight: !isMobile ? "70px" : 20,
        }}
      >
        <div className="row">
          <div
            className={"col-12"}
            style={isMobile ? { textAlign: "center" } : null}
          >
            <div className={`row`}>
              {!isMobile && <div className="col-1"></div>}
              <div className={`${isMobile ? "col-12" : "col-10"}`}>
                <p className={`sectionContent small large medium text-center`}>
                  Project
                </p>
                <p
                  className={`section3Head small black extra-bold text-center`}
                >
                  The complete Digital transformation solution for your business
                </p>
                <p className="sectionContent small text-center">
                  Qestigationes demonstraverunt lectores legere me lius quod ii
                  legunt saepius. Claritas est etiam processus dynamicus, qui
                  sequitur mutationem consuetudium lectorum est notare quam
                  littera gothica, quam nunc putamus est notare quam littera
                  gothica, quam nunc putamus parum claram, anteposuerit
                  litterarum quarta decima et quinta decima. quam littera
                  gothica, quam nunc putamus parum claram, anteposuerit
                  litterarum quarta
                </p>
              </div>
              {!isMobile && <div className="col-1"></div>}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 p-0">
        <img className="w-100" src={video} alt="video" />
      </div>
    </div>
  );
};

export default Section2;
