import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import {Container} from "react-bootstrap"
const SEOChecker = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="Home-areaSEO py-4 my-3">
      <Container fluid="md">
        <div className="row">
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
                className={`${isMobile ? "col-12" : "col-9 my-auto"} ${!isMobile && "d-flex justify-content-around"
                  }`}
                style={{ paddingLeft: !isMobile ? "40px" : "25px" }}
              >
                <div className={`${isMobile && "col-12 mb-4 mt-5"}`}>
                  <input placeholder="Type your website address" />
                </div>
                <div className={`${isMobile && "col-12 mb-4"}`}>
                  <input placeholder="Type your email address" />
                </div>
                <div className={`${isMobile && "col-12"}`}>
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
      </Container>
    </div>
  );
};

export default SEOChecker;
