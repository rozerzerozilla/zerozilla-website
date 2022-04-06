import React, { useContext } from "react";
import sectionCover from "../../../assets/images/seo-section-3-cover.webp";
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';

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
            className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
            style={
              isMobile ? { padding: "0px 20px", textAlign: "center" } : null
            }
          >
            <Fade bottom>
            <div className={`row col-12 ${isMobile && "m-0"}`}>
              <p className="section3Head black extra-bold">
                  Stay in the spotlight with Zerozilla’s enterprise SEO! 
              </p>
              <p className="sectionContent">
                  Any business today recognizes the value and returns associated with a web page's first-page internet search result for a relevant search query. Hence, businesses today understand the importance of being associated with the best SEO company. At Zerozilla, we take care of all areas of your business related to your ROI and tune them for the expected outcome. As a top SEO company, we offer search engine optimization, local SEO services, and more. 
              </p>
              <p className="sectionContent">
                  A flawless corporate SEO strategy campaign is built based on the quality of content, design, keywords, and linkages. How do we get a lot of attention on the internet? How do you get your website indexed in search engines? How to Outperform Your Competitors? How to meet the desired return on investment (ROI) targets. We try to answer these questions with our strategies.
              </p>
              <p className="sectionContent large bold secondary-color">
                  Enhance your digital portfolio to generate leads! 
              </p>
              <p className="sectionContent">
                  We undertake the actual Google search for keywords to understand the industry and get real results. 
                </p>
                
                <p className="sectionContent large bold secondary-color">
                  Not just that! 
                </p>
                <p className="sectionContent">
                  We recognize that the second page of an online search seldom yields any business results. Hence, we curate search relevance on your website pages in real-time with refreshed content. 
                </p>

              </div>
            </Fade>
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
            style={{
              marginTop: isMobile && "40px",
              textAlign: isMobile ? "center" : "right",
            }}
          >
            <Fade top>
            <img
              src={sectionCover}
              alt="sectionVideo"
              style={{ width: "90% " }}
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
