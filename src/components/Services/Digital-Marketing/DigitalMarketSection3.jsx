import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import sectionCover1 from "../../../assets/images/marketing-strategy-cover-1.webp";
import sectionCover2 from "../../../assets/images/marketing-strategy-cover-2.webp";
import Fade from 'react-reveal/Fade';

const Section3 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area3 strategy-section" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area5`}
        style={{
          paddingLeft: !isMobile ? "70px" : "20px",
          paddingRight: !isMobile ? "70px" : '20px',
        }}
      >
        <div className="container" style={{maxWidth:"900px", width:"100%"}}>
          <div className="row">
            <div
              className={"col-12"}
              style={
                isMobile ? { padding: "0px 20px", textAlign: "center" } : null
              }
            >
              <Fade>
                <div className={`row`}>
                  <div className={`${isMobile ? "col-12" : "col-10 mx-auto"}`}>
                    <p className="section3Head black extra-bold text-center">
                      How to streamline a marketing strategy for an enterprise?
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade>
                <div className={`row`}>
                  <div className={`${isMobile ? "col-12" : "col-8 mx-auto"}`}>
                    <p className="sectionContent text-center">
                      Is your marketing strategy aligned to your business? If not,
                      you need to align it right away! Misaligned marketing
                      strategies can stop you from progress in business.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="row" style={{ marginTop: "40px" }}>
            {[
              {
                title: 'Crafting Strategy',
                description: "We design a Digital Marketing strategy that aligns with your business' vision and execute the same after defining your brand goal, messaging tone, communication channels, and buyers' personal.",
                image: sectionCover1,
              },
              {
                title: 'Launch Checklist',
                description: "We design a Digital Marketing strategy that aligns with your business' vision and execute the same after defining your brand goal, messaging tone, communication channels, and buyers' personal.",
                image: sectionCover2,
              },
            ].map((idea, index) => (
              <div
                className={`${isMobile ? "col-12 my-4" : "col-6 my-auto mx-auto"}`}
                key={index}
                style={!isMobile ? { paddingRight: "20px" } : null}
              >
                <Fade right={index % 2 === 0 ? true : false} left={index % 2 === 0 ? false : true}>
                  <div className="bizCard" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr" }}>
                    <img
                      className="w-100 digital-streamline-marketing-img"
                      src={idea.image}
                      alt="marketing-strategy-cover-1"
                    />
                    <div
                      className="d-flex flex-column align-items-start justify-content-center w-100"
                      style={{ padding: "30px" }}
                    >
                      <p className={`cardHead ${isMobile ? "text-center" : " text-left"}`} style={{ fontSize: "15px" }}>
                        {idea.title}
                      </p>
                      <p className="cardDescription">{idea.description}</p>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
          {/* <div className="row" style={{ marginTop: "20px" }}>
            <Fade left>
              <div
                className={`${isMobile ? "col-12" : "col-6"} p-0`}
                style={{ borderRadius: !isMobile ? "30px 0 0 0" : "15px" }}
              >
                <img
                  className="w-100 digital-streamline-marketing-img"
                  src={sectionCover1}
                  alt="marketing-strategy-cover-1"
                />
                <div className="strategy-container1 text-center" style={{ height: isMobile ? "inherit" : "15rem" }}>
                  <p className="sliderHead1 no-underline">Crafting Strategy</p>
                  <p className="sliderHead1 no-underline small">
                    We design a Digital Marketing strategy that aligns with your business' vision and execute the same after defining your brand goal, messaging tone, communication channels, and buyers' personal.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div
                className={`${isMobile ? "col-12" : "col-6"} p-0`}
                style={{ borderRadius: !isMobile ? "0 30px 0 0" : "15px", marginTop: isMobile && 30 }}
              >
                <img
                  className="w-100 digital-streamline-marketing-img"
                  src={sectionCover2}
                  alt="marketing-strategy-cover-1"
                />
                <div className="strategy-container2 text-center" style={{ height: isMobile ? "inherit" : "15rem" }}>
                  <p className="sliderHead1 no-underline">Launch Checklist</p>
                  <p className="sliderHead1 no-underline small">
                    We choose and implement the best among the multiple strategies available like SEO, PPC, SMM, content marketing, email marketing, and so on, that best suit your business goals.
                  </p>
                </div>
              </div>
            </Fade>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section3;
