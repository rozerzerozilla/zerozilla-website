import React, { useContext, useState } from "react";
import { AppContext } from "../../context/Context";
import { functionalAreas } from "../../helper/renderData";

import image1 from "../../assets/images/portfolio/portfolio-1.webp";
import image2 from "../../assets/images/portfolio/portfolio-2.webp";
import image3 from "../../assets/images/portfolio/portfolio-3.webp";
import image4 from "../../assets/images/portfolio/portfolio-4.webp";
import image5 from "../../assets/images/portfolio/portfolio-5.webp";
import image6 from "../../assets/images/portfolio/portfolio-6.webp";
import image7 from "../../assets/images/portfolio/portfolio-7.webp";

import icon1 from "../../assets/images/portfolio/portfolio-icon-1.webp";
import icon2 from "../../assets/images/portfolio/portfolio-icon-2.webp";
import icon3 from "../../assets/images/portfolio/portfolio-icon-3.webp";
import icon4 from "../../assets/images/portfolio/portfolio-icon-4.webp";
import icon5 from "../../assets/images/portfolio/portfolio-icon-5.webp";
import icon6 from "../../assets/images/portfolio/portfolio-icon-6.webp";
import icon7 from "../../assets/images/portfolio/portfolio-icon-7.webp";
// React animations
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

// Iframes
import Iframe from 'react-iframe'

const urls = [
  'https://www.creditap.in/',
  'https://skill-mine.com/',
  'https://social.hr/',
  'https://www.christineortollrecovery.org/',
  'https://laksans.com/',
  'https://isourceconsulting.in/',
  'https://indianaffairstravel.com/',

]


const Section2 = () => {
  const [active, setActive] = useState(1);
  const [selectedLink, setSelectedLink] = useState(functionalAreas.d1);
  const [isMobile] = useContext(AppContext);

  const sectionButton = (filter, style, fullHeight) => {
    return (
      <button
        key={filter.id}
        className={`filterBtn type2 ${fullHeight ? "h-100" : ""} ${
          filter.id === active ? "active" : ""
        }`}
        onClick={() => {
          setActive(filter.id);
          setSelectedLink(filter.name);
        }}
        style={style}
      >
        {filter.name}
      </button>
    );
  };

  //refer to section3 of lead generation
  const renderActiveSection = () => {
    return (
      <>
        <div className="row mt-3">
          <div className={`${isMobile ? "col-12 mb-2" : "col-7"}`}>
            <Fade left>
              <div className="portfolio-card">
                <div className="portfolio-top-box">
                  <img className="w-100" src={image1} alt="portfolio-1" />
                </div>
                <div className="portfolio-bottom-box">
                  <img src={icon1} alt="skillmine" title="Skill Mine" />
                  <a href="https://skill-mine.com/" target={"_blank"} className="portfolio-btn">Visit Now</a>
                </div>
              </div>
            </Fade>
          </div>

          <div className={`${isMobile ? "col-12 mb-2" : "col-5"}`}>
            <Fade top>
              <div className="portfolio-card">
                <div className="portfolio-top-box">
                  <img className="w-100" src={image2} alt="portfolio-2" />
                </div>
                <div className="portfolio-bottom-box">
                  <img src={icon2} alt="images" title="title" />
                  <a href="https://www.creditap.in/" target={"_blank"} className="portfolio-btn">Visit Now</a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="row mt-2">
          <Fade bottom>
            <div className={`${isMobile ? "col-12 mb-2" : "col-4"}`}>
              <div className="portfolio-card">
                <div className="portfolio-top-box">
                  <img className="w-100" src={image3} alt="portfolio-1" />
                </div>
                <div className="portfolio-bottom-box">
                  <img src={icon3} alt="images" title="title" />
                  <a href="https://play.google.com/store/apps/details?id=in.swiggy.android" target={"_blank"} className="portfolio-btn">Visit Now</a>
                </div>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className={`${isMobile ? "col-12 mb-2" : "col-4"}`}>
              <div className="portfolio-card">
                <div className="portfolio-top-box">
                  <img className="w-100" src={image4} alt="portfolio-2" />
                </div>
                <div className="portfolio-bottom-box">
                  <img src={icon4} alt="images" title="title" />
                  <a href="http://objectivedone.com/" target={"_blank"} className="portfolio-btn">Visit Now</a>
                </div>
              </div>
            </div>
          </Fade>
          
          <Zoom>
            <div className={`${isMobile ? "col-12 mb-2" : "col-4"}`}>
              <div className="portfolio-card">
                <div className="portfolio-top-box">
                  <img className="w-100" src={image5} alt="portfolio-2" />
                </div>
                <div className="portfolio-bottom-box">
                  <img src={icon5} alt="images" title="title" />
                  <a href="https://medequip.co.in/" target={"_blank"} className="portfolio-btn">Visit Now</a>
                </div>
              </div>
            </div>
          </Zoom>
          
        </div>


        <div className="row mt-2">

          <Fade right>
            <div className={`${isMobile ? "col-12 mb-2" : "col-5"}`}>
              <div className="portfolio-card">
                <div className="portfolio-top-box">
                  <img className="w-100" src={image6} alt="portfolio-1" />
                </div>
                <div className="portfolio-bottom-box">
                  <img src={icon6} alt="images" title="title" />
                  <a href="https://www.artyss.in/" target={"_blank"} className="portfolio-btn">Visit Now</a>
                </div>
              </div>
            </div>
          </Fade>
          

          <Fade left>
            <div className={`${isMobile ? "col-12 mb-2" : "col-7"}`}>
              <div className="portfolio-card">
                <div className="portfolio-top-box">
                  <img className="w-100" src={image7} alt="portfolio-2" />
                </div>
                <div className="portfolio-bottom-box">
                  <img src={icon7} alt="images" title="title" />
                  <a href="https://posbook.in" target={"_blank"} className="portfolio-btn">Visit Now</a>
                </div>
              </div>
            </div>
          </Fade>


        </div>
      </>
    );
  };

  return (
    <>
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
                  Amazing Portfolio
                </p>
                <p
                  className={`section3Head small black extra-bold text-center`}
                >
                  <span className="secondary-color">Zerozilla</span> is helping
                  every brand everyday
                </p>
              </div>
              {!isMobile && <div className="col-1"></div>}
            </div>
            {/* {!isMobile ? (
              <div
                className="row col-12"
                style={{
                  justifyContent: "center",
                }}
              >
                <div className="d-flex justify-content-around appfilters">
                  {functionalAreaTypes.map((filter) => (
                    <>{sectionButton(filter, null, false)}</>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p1 custom-overflow">
                {functionalAreaTypes.map((filter) => (
                  <div className="filter_container">
                    {sectionButton(filter, { width: 250 }, true)}
                  </div>
                ))}
              </div>
            )} */}
            {renderActiveSection()}
          </div>
        </div>
        </div>
    </div>
      </>
  );
};

export default Section2;
