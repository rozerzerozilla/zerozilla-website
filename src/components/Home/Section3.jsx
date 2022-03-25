import React, {useContext} from "react";
import sectionCover from "../../assets/images/section3Cover.png";
import { AppContext } from "../../context/Context";
import Fade from 'react-reveal/Fade';
import { Container } from "react-bootstrap";

const Section3 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <Container fluid="lg" id="about-us-home">
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
              <Fade top>
                <div className={`row col-12 ${isMobile && "m-0"}`}>
                  <p className="section3Head">
                    Comprehensive IT solutions to transform your business digitally!
                  </p>
                  <p className="sectionContent">
                    We create innovative digital products and services to help businesses like you accelerate their growth story. As a trusted tech partner, we help high-growth organizations reinvent and reimagine themselves, to meet the changing needs of the industry. 
                  </p>
                </div>
                <div className="row-col-12" style={{ marginTop: "20px" }}>
                  <a href="#what-we-do"><button className="appBtn">Explore our services</button></a>
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
              <Fade bottom>
                
                <iframe
                  className="element"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/5eCbTywz88A"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                  
                  </iframe>
                {/* <img
                  data-aos={"fade-left"}
                  src={sectionCover}
                  alt="sectionVideo"
                  style={{ width: "90% " }}
                /> */}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section3;
