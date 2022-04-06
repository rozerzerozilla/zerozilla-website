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
                  Lorem ipsum dolor sit amet, consetetur.
                </p>
                <p className="sectionContent">
                  Almost 22% of people in the world shop online, most of them via their mobile phones. By 2021, the number of people purchasing online is expected to reach 2.14 billion. And with good reason… Mobile-based online shopping is simple, quick, has just the right amount of interaction and is completely secure.
                </p>

                <p className="sectionContent large bold secondary-color">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consetetur sadipscing </li>
                  <li>Lorem ipsum dolor sit amet, consetetur sadipscing </li>
                  <li>Lorem ipsum dolor sit amet, consetetur sadipscing </li>
                  <li>Lorem ipsum dolor sit amet, consetetur sadipscing </li>
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
