import React, { useContext } from "react";
import sectionCover from "../../assets/images/approach.webp";
import { AppContext } from "../../context/Context";
import Fade from 'react-reveal/Fade';
import { Container } from "react-bootstrap";
import CountUp from 'react-countup';

const Section6 = () => {
  
  const containerRef = React.useRef();
  const [isMobile] = useContext(AppContext);
  
//   style = {{
//     paddingLeft: !isMobile ? "70px" : "15px",
//       paddingRight: !isMobile && "70px",
//         paddingTop: !isMobile && "70px",
//     }
// }

  return (
    <Container fluid="lg">
      <div className="row">
        <div className={`${isMobile ? "col-12" : "col-5"}`}
          style={{
            marginTop: isMobile && "40px",
            textAlign: "center",
          }}
        >
          <Fade>
            <img
              src={sectionCover}
              alt="sectionVideo"
              style={{ width: "100%", height:"100%", objectFit:"cover" }}
            />
          </Fade>
        </div>
        <div
          className={`${isMobile ? "col-12" : "col-7"}`}
          style={
            isMobile
              ? { padding: "0px 20px", textAlign: "center" }
              : { paddingLeft: "70px" }
          }
        >
          <Fade right>
            <div className={`row`}>
              <div className={`my-4 ${!isMobile ? "col-12" : "col-12"}`}>
                <p className="section3Head">
                  Achieve multiple goals
                  with a personalized and{" "}
                  <span className="highlightedSectionText">
                    Unified Approach!
                  </span>
                </p>
              </div>
            </div>
            <div className={`row`} style={{ marginTop: "-20px" }}>
              <div className={`${!isMobile ? "col-12" : "col-12"}`}>
                <p className="sectionContent">
                  Disrupt, grow and scale with unique solutions that have the power to revolutionize the business sphere. We channel diversified ideas to create comprehensive solutions executed with a unified approach to propel your business towards success.
                </p>
              </div>
            </div>
            <div className={`row`}>
              <div className={`${!isMobile ? "col-7" : "col-12"}`}>
                <div className="row">
                  <div className="col-6">
                    <p className="successRate mb-0 section3Head">90+</p>
                    <p className="sectionContent">Zillians</p>
                  </div>
                  <div className="col-6">
                    <p className="successRate mb-0 section3Head"><CountUp end={450} duration={2} />+</p>
                    <p className="sectionContent">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        
      </div>
    </Container>
  );
};

export default Section6;
