import React, { useContext, useState } from "react";
import { AppContext } from "../../context/Context";
import { functionalAreas } from "../../helper/renderData";
import { functionalAreaTypes } from "../../helper/portfolio";
import image1 from "../../assets/images/portfolio/portfolio-img-1.png";
import image2 from "../../assets/images/portfolio/portfolio-img-2.png";
import image3 from "../../assets/images/portfolio/portfolio-img-3.png";
import image4 from "../../assets/images/portfolio/portfolio-img-4.png";
import image5 from "../../assets/images/portfolio/portfolio-img-5.png";
import image6 from "../../assets/images/portfolio/portfolio-img-6.png";
import image7 from "../../assets/images/portfolio/portfolio-img-7.png";

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
            <img className="w-100" src={image1} alt="portfolio-1" />
          </div>
          <div className={`${isMobile ? "col-12 mb-2" : "col-5"}`}>
            <img className="w-100" src={image2} alt="portfolio-2" />
          </div>
        </div>
        <div className="row mt-2">
          <div className={`${isMobile ? "col-12 mb-2" : "col-4"}`}>
            <img className="w-100" src={image3} alt="portfolio-1" />
          </div>
          <div className={`${isMobile ? "col-12 mb-2" : "col-4"}`}>
            <img className="w-100" src={image4} alt="portfolio-2" />
          </div>
          <div className={`${isMobile ? "col-12 mb-2" : "col-4"}`}>
            <img className="w-100" src={image5} alt="portfolio-2" />
          </div>
        </div>
        <div className="row mt-2">
          <div className={`${isMobile ? "col-12 mb-2" : "col-5"}`}>
            <img className="w-100" src={image6} alt="portfolio-1" />
          </div>
          <div className={`${isMobile ? "col-12 mb-2" : "col-7"}`}>
            <img className="w-100" src={image7} alt="portfolio-2" />
          </div>
        </div>
      </>
    );
  };

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
            {!isMobile ? (
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
            )}
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
