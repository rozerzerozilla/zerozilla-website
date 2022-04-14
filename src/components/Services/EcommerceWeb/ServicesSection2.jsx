import React, { useContext } from "react";
import sectionCover from "../../../assets/images/ecommerce-web-section-2-cover.webp";
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';

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
            <Fade bottom>
              <div className={`row col-12 ${isMobile && "m-0"}`}>
                <p className="section3Head black extra-bold">
                High-quality E-commerce apps guaranteed.
                </p>
                <p className="sectionContent">
                At Zerozilla, we plan, strategize, and develop the best eCommerce mobile apps that deliver an engaging and exciting purchasing experience. Our talented and experienced team of eCommerce mobile app developers helps you prioritize your requirements. Whether you need an exclusive Android or iOS app, a hybrid or cross-platform mobile app, or a hybrid or cross-platform mobile app, Zerozilla can provide you with a high-quality solution.
                </p>

                <p className="sectionContent large bold secondary-color">
                Take a look at what you can achieve with us:
                </p>
                <ul>
                  <li>Super easy navigation and predictable user flow.</li>
                  <li>Hassle-free check-out process.</li>
                  <li>Multiple payment options and shipping methods.</li>
                  <li>Social media integration and advanced features.</li>
                </ul>
              </div>
            </Fade>
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
            style={{
              marginTop: isMobile && "40px",
              textAlign: isMobile ? "center" : "right",
            }}
          >
            <Fade top>
              <img
                src={sectionCover}
                alt="sectionVideo"
                style={{ width: "100%" }}
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
