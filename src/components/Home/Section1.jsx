import React, { useRef, useContext } from "react";
import { Carousel } from "react-bootstrap";
import { sliderAreaStyle, staticHomeSlider } from "../../helper";
import { FaPhoneAlt, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import leftArrow from "../../assets/icons/sliderLeftNav.svg";
import rightArrow from "../../assets/icons/sliderRightNav.svg";
import sliderPeople from "../../assets/images/sliderPeople.png";
import $ from "jquery";
import BookCallButton from "../BookCallButton";
import SliderNavButtons from "./SliderNav";
import { AppContext } from "../../context/Context";

const Section1 = () => {
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
                          <p className="sliderHead1">
                            Welcome to the Power of Zerozilla!
                          </p>
                          <p className="sliderHead2 mb-0">
                            The most valued addition your business will ever
                            Experience!
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
                                  className={null}
                                  isColored={false}
                                  text={"Book Now"}
                                  showImage={true}
                                />
                              </div>
                              <div
                                className={`${!isMobile ? "col-4 pl-0" : ""}`}
                                style={{ paddingLeft: !isMobile ? 0 : "" }}
                              >
                                <button className="sliderBtns">
                                  <span>Learn more</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row" style={{ marginTop: "40px" }}>
                          <div
                            className={`col-lg-4 my-auto ${isMobile && "mb-3"}`}
                            style={
                              isMobile
                                ? { textAlign: "center" }
                                : { marginRight: "20px" }
                            }
                          >
                            <img src={sliderPeople} alt="sliderPeople" />
                          </div>
                          <div
                            className="col-lg-7 my-auto needHelpText"
                            style={isMobile ? { textAlign: "center" } : null}
                          >
                            Need help ? Contact our experts
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
          margin={"-100px"}
          absolute={false}
        />
      </div>
    </div>
  );
};

export default Section1;
