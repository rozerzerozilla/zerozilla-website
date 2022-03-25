import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import DesktopTeamView from "./DesktopComponent";
import MobileTeamView from "./MobileComponent";

const Section5 = () => {
  const [isMobile] = useContext(AppContext);

  return (
    <div className="row Home-area4 about" style={{ margin: 0, padding: 0 }} id="ourteam">
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
              {!isMobile && <div className="col-1"></div>}
              <div className={`${isMobile ? "col-12" : "col-10"}`}>
                <p className="section3Head black extra-bold text-center">
                  The Team Behind the Teams
                </p>
                <p className="sectionContent text-center">
                  <span className="bold">Zerozilla</span> has grown multifold and attained new heights under
                  the guidance and support of these inquisitive minds. Meet the
                  team behind the teams, guiding the Zerozilla family and
                  fostering a people-first culture.
                </p>
              </div>
              {!isMobile && <div className="col-1"></div>}
            </div>
          </div>
        </div>
        <div className="row justify-content-center" style={{ marginTop: "40px" }}>
          {!isMobile ? <DesktopTeamView /> : <MobileTeamView />}
        </div>
      </div>
    </div>
  );
};

export default Section5;
