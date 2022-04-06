import React, { useRef, useContext } from "react";
import { Carousel } from "react-bootstrap";
import { sliderAreaStyle, staticHomeSlider } from "../../helper";
import BookCallButton from "../BookCallButton";
import SliderNavButtons from "./SliderNav";
import { AppContext } from "../../context/Context";
const Section1 = ({ handleFunction}) => {

  const [isMobile, setIsMobile] = useContext(AppContext);
  const ref = useRef(null);
  return (
    <div className="row Home-area1" style={{ margin: 0, padding: 0 }}>
      <div className="col-12 Home-main-area1">
        <Carousel
          ref={ref}
          nextIcon={true}
          prevIcon={true}
          controls={false}
          indicators={false}
        >
          {staticHomeSlider.map((el) => (
            <Carousel.Item className="static_maincar" key={el.id}>
              <div className={`row slider-area${el.id}`}>
                <div
                  className={`col-12 slider-main-area${el.id}`}
                  style={sliderAreaStyle(isMobile)}
                >
                  <div className={`${isMobile ? "mobile" : "desktop"}`}>
                    <div className="row">
                      <div className={`${isMobile ? "col-12" : "col-6"}`}>
                        <div
                          className="row"
                          style={
                            isMobile
                              ? { padding: "0px 20px", textAlign: "center" }
                              : null
                          }
                        >
                          <p className="sliderHead1" style={{fontSize:"16px"}}>
                            Experience ‘digital’ like never before!
                          </p>
                          <p className="sliderHead2 mb-0">
                            {/* Your dependable partner for business success! */}
                            The most valued addition your business will ever experience!
                          </p>
                        </div>
                        <div className="row" style={{ marginTop: "30px" }}>
                          <div className="col-12">
                            <div
                              className={`${
                                !isMobile ? "row" : "customFlexBox"
                              }`}
                            >
                              <div className={`${!isMobile ? "col-4" : ""}`}>
                                <BookCallButton
                                  handleFunction={handleFunction}
                                  width={"100%"}
                                  className={null}
                                  isColored={false}
                                  text={"Contact Now"}
                                  showImage={true}
                                />
                              </div>
                              <div
                                className={`${!isMobile ? "col-4 pl-0" : ""}`}
                                style={{ paddingLeft: !isMobile ? 0 : "" }}
                              >
                                <a href="#about-us-home">
                                  <button className="sliderBtns colored" style={{ width: "100%" }}>
                                    <span>Know more</span>
                                  </button>
                                </a>
                                
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <SliderNavButtons
          reference={ref}
          justify={"center"}
          margin={"-30px"}
          absolute={false}
        />
      </div>
    </div>
  );
};

export default Section1;
