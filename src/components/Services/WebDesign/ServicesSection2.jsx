import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { webIdeas } from "../../../helper";
import CommonCard from "../../Common/CommonCard";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';
import { Container } from "react-bootstrap";

const Section2 = () => {
  const [isMobile] = useContext(AppContext);
  // console.log(bizIdeas.length)
  return (
    <Container fluid="xl">
      <Reveal effect="zoomIn">
        <div className="row Home-area5" style={{ margin: 0, padding: 0 }}>
          <div
            className={`col-12 Home-main-area5`}
          >
            <div className="row">
              <div
                className={"col-12"}
                style={
                  isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                }
              >
                <Zoom>
                  <div className={`row`}>
                    <div className={`mx-auto ${isMobile ? "col-12" : "col-10"}`}>
                      <p className="black-head-section extra-bold text-center">
                        Web services we provide
                      </p>
                      <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                    </div>
                  </div>
                </Zoom>
                <div className="row" style={{ marginTop: "40px" }}>
                  {webIdeas.map((idea, index) => (
                    <div
                      className={`${isMobile ? "col-12 my-4" : "col-6 my-auto mx-auto"}`}
                      key={idea.id}
                      style={!isMobile ? { paddingRight: "20px" } : null}
                    >
                      <Fade top={index % 2 === 0 ? true : false} bottom={index % 2 === 0 ? false : true}>
                        {/* <CommonCard
                          button={false}
                          icontext={true}
                          image={idea.image}
                          name={idea.name}
                          description={idea.description}
                          isMobile={isMobile}
                          background={"#EDF9FF"}
                          imageWidth={"50%"}
                          padding={"0px 30px"}
                        /> */}
                        <div className="bizCard" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr" }}>
                          <div
                            className={`${isMobile ? 'cardTopCol':  'cardLeftCol' }`}
                            style={{ background: "#EDF9FF", height: "100%" }}
                          >
                            <img
                              src={require(`../../../assets/icons/${idea.image}`)}
                              alt="cardImage"
                              style={{ objectFit: "cover", width: "unset", height:isMobile ? "60px" : "80px" }}
                            />

                          </div>

                          <div
                            className="d-flex flex-column align-items-start justify-content-center w-100"
                            style={{ padding: "30px" }}
                          >
                            <p className={`cardHead ${isMobile? "text-center" : " text-left"}`} style={{ fontSize: "15px" }}>
                              {idea.name}
                            </p>
                            <p className="cardDescription">{idea.description}</p>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
};

export default Section2;
