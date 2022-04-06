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
        <div className="row">
          <div
            className={"col-12"}
            style={
              isMobile ? { padding: "0px 20px", textAlign: "center" } : null
            }
          >
            <Fade top>
            <div className={`row`}>
              {!isMobile && <div className="col-1"></div>}
              <div className={`${isMobile ? "col-12" : "col-10"}`}>
                <p className="section3Head black extra-bold text-center">
                  How to streamline a marketing strategy for an enterprise?
                </p>
                <p className="sectionContent text-center">
                  Is your marketing strategy aligned to your business? If not,
                  you need to align it right away! Misaligned marketing
                  strategies can stop you from progress in business. Match your
                  marketing to your business.
                </p>
              </div>
              {!isMobile && <div className="col-1"></div>}
              </div>
            </Fade>
          </div>
        </div>
        <div className="row g-0" style={{ marginTop: "20px" }}>
          <Fade left>
          <div
            className={`${isMobile ? "col-12" : "col-6"} p-0`}
            style={{ borderRadius: !isMobile ? "66px 0 0 0" : "66px" }}
          >
            <p className="mb-0">
              <img
                className="w-100"
                src={sectionCover1}
                alt="marketing-strategy-cover-1"
              />
            </p>
            <div className="strategy-container1 text-center">
              <p className="sliderHead1 no-underline">Crafting Strategy</p>
              <p className="sliderHead1 no-underline small">
                Crafting a Strategy We believe everything must start from
                mapping & crafting the strategy to achieve the goal. Once the
                strategy in place, its easier to track the results & also find
                the new opportunities with the current trends.Starting from
                defining your brand goal, messaging tone, communication
                channels, buyers’s persona, to launching the campaigns we will
                brainstorm to design the Digital Marketing Strategy that fits
                well to your vision.
              </p>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div
            className={`${isMobile ? "col-12" : "col-6"} p-0`}
            style={{ borderRadius: !isMobile ? "0 66px 0 0" : "66px", marginTop: isMobile && 30 }}
          >
            <p className="mb-0">
              <img
                className="w-100"
                src={sectionCover2}
                alt="marketing-strategy-cover-1"
              />
            </p>
            <div className="strategy-container2 text-center">
              <p className="sliderHead1 no-underline">Launch Checklist</p>
              <p className="sliderHead1 no-underline small">
                There are multiple strategies to achieve success in the online
                marketing place such as SEO, PPC, SMM, Content Marketing, email
                marketing & so on..But not all strategies might fit into your
                business goals. Depending on your short term & long term goals,
                we help you prioritise the strategy which will yield the results
                you desire. Implementing the planned strategy is also as
                important as crafting one. We work with you in successful
                implementation of the planned strategies & refine them
                accordingly by tracking the results.
              </p>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Section3;
