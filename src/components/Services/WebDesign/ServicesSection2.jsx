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
                      className={`${isMobile ? "col-12" : "col-4 my-auto mx-auto"}`}
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
                        <div className="bizCard">
                          <div className="d-flex align-items-center justify-content-center h-100">
                            <div
                              className={`col-4 row-height cardLeftCol`}
                              style={{ background: "#EDF9FF", padding:"0 10px" }}
                            >
                              <img
                                src={require(`../../../assets/icons/${idea.image}`)}
                                alt="cardImage"
                                style={{ height: "80px", objectFit: "cover", width: "unset" }}
                              />
                              {true && <p className="cardHead" style={{fontSize:"15px"}}>
                                {idea.name}
                              </p>}
                            </div>
                            <div
                              className="col-8 row-height d-flex flex-column align-items-start justify-content-center"
                              style={{ padding: "0px 30px" }}
                            >
                              <p className="cardDescription">{idea.description}</p>
                              
                            </div>
                          </div >
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
