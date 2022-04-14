import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";
import { oneLink, dedicatedLink, backLink, highValueLink } from "../../../helper/services";
import { leadGenTypes } from "../../../helper/services";
import oneWayLink from "../../../assets/images/one-way-building.webp";
import { typesOfLinks } from "../../../helper/renderData";
import CommonTypesOfLinks from "../../Common/CommonTypesOfLinks";
import Fade from 'react-reveal/Fade';

const Section3 = () => {
  const [active, setActive] = useState(1);
  const [selectedLink, setSelectedLink] = useState(typesOfLinks.d1);
  const [isMobile] = useContext(AppContext);

  const sectionButton = (filter, style, fullHeight) => {
    return (
      <button
        key={filter.id}
        className={`filterBtn ${fullHeight ? "h-100" : ""} ${
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

  const renderActiveSection = () => {
    switch (selectedLink) {
      case typesOfLinks.d1:
        return (
          <CommonTypesOfLinks
            title={selectedLink}
            isMobile={isMobile}
            image={oneWayLink}
            data={oneLink}
          />
        );
      case typesOfLinks.d2:
        return (
          <CommonTypesOfLinks
            title={selectedLink}
            isMobile={isMobile}
            image={oneWayLink}
            data={dedicatedLink}
          />
        );
      case typesOfLinks.d3:
        return (
          <CommonTypesOfLinks
            title={selectedLink}
            isMobile={isMobile}
            image={oneWayLink}
            data={backLink}
          />
        );
      case typesOfLinks.d4:
        return (
          <CommonTypesOfLinks
            title={selectedLink}
            isMobile={isMobile}
            image={oneWayLink}
            data={highValueLink}
          />
        );
      default:
        return "Wrong choice!";
    }
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
            <Fade top>
            {!isMobile ? (
              <div
                className="row col-12"
                style={{
                  justifyContent: "center",
                }}
              >
                
                <div className="d-flex justify-content-around appfilters">
                  {leadGenTypes.map((filter) => (
                    <>{sectionButton(filter, null, false)}</>
                  ))}
                  </div>
                
              </div>
            ) : (
              <div className="p1 custom-overflow">
                {leadGenTypes.map((filter) => (
                  <div className="filter_container">
                    {sectionButton(filter, { width: 250 }, true)}
                  </div>
                ))}
              </div>
            )}
            </Fade>
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
