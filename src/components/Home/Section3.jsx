import React, {useContext} from "react";
import sectionCover from "../../assets/images/section3Cover.png";
import { AppContext } from "../../context/Context";

const Section3 = () => {
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
            className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
            style={
              isMobile ? { padding: "0px 20px", textAlign: "center" } : null
            }
          >
            <div className={`row col-12 ${isMobile && "m-0"}`}>
              <p className="section3Head">
                We specialise in{" "}
                <span className="highlightedSectionText">
                  amplifying demand
                </span>{" "}
                for your brand around the world
              </p>
              <p className="sectionContent">
                If there’s one thing we’ve learned about marketing in these
                times, is that ‘if it’s not on the web, it doesn’t really
                count!’ Out of the 7.7 billion people on earth, almost 4 billion
                have the means to access the internet. If you have a product or
                service to offer, your target customer is most likely to be
                among this 4 billion segment.
              </p>
            </div>
            <div className="row-col-12" style={{ marginTop: "20px" }}>
              <button className="appBtn">Explore our services</button>
            </div>
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
            style={{
              marginTop: isMobile && "40px",
              textAlign: isMobile ? "center" : "right",
            }}
          >
            <img
              src={sectionCover}
              alt="sectionVideo"
              style={{ width: "90% " }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
