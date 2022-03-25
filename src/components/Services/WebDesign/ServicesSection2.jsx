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
                      className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
                      key={idea.id}
                      style={!isMobile ? { paddingRight: "20px" } : null}
                    >
                      <Fade top={index % 2 === 0 ? true : false} bottom={index % 2 === 0 ? false : true}>
                        <CommonCard
                          icontext={true}
                          image={idea.image}
                          name={idea.name}
                          description={idea.description}
                          isMobile={isMobile}
                          background={"#EDF9FF"}
                          imageWidth={"50%"}
                          padding={"20px 30px"}
                        />
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
