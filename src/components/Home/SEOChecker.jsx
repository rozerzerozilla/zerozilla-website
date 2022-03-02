import React, { useContext } from "react";
import { AppContext } from "../../context/Context";

const SEOChecker = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-areaSEO" style={{ margin: 0, padding: 0 }}>
      <div
        className="col-12 Home-main-areaSEO"
        style={{
          paddingLeft: !isMobile ? "70px" : "15px",
          paddingRight: !isMobile && "70px",
        }}
      >
        <div className="row">
          <div
            className={`${isMobile ? "col-12" : "col-3 my-auto seoHeadCol"}`}
          >
            <p className={`mb-0 seoHead ${isMobile && "text-center"}`}>
              Check your Website’s SEO
            </p>
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-9 my-auto"} ${
              !isMobile && "d-flex justify-content-around"
            }`}
            style={{ paddingLeft: !isMobile ? "40px" : "25px" }}
          >
            <div className={`${isMobile && "row col-12 mb-4 mt-5"}`}>
              <input placeholder="Type your website address" />
            </div>
            <div className={`${isMobile && "row col-12 mb-4"}`}>
              <input placeholder="Type your email address" />
            </div>
            <div className={`${isMobile && "row col-12"}`}>
              <button
                className="sendSeo"
                style={{ padding: !isMobile && "15px" }}
              >
                Send Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOChecker;
