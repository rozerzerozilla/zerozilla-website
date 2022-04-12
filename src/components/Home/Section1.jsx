import React, { useRef, useContext } from "react";
import { Carousel } from "react-bootstrap";
import { sliderAreaStyle, staticHomeSlider } from "../../helper";
import BookCallButton from "../BookCallButton";
import SliderNavButtons from "./SliderNav";
import { AppContext } from "../../context/Context";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaPhoneAlt } from "react-icons/fa";
const Section1 = ({ handleFunction}) => {

  const [isMobile, setIsMobile] = useContext(AppContext);
  const ref = useRef(null);
  return (
    <div className="row Home-area1" style={{ margin: 0, padding: 0 }}>
      <div className="col-12 Home-main-area1">
        <Carousel
          ref={ref}
          nextIcon={false}
          prevIcon={false}
          controls={false}
          indicators={true}
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
                          <div className={`${!isMobile ? "col-4" : "col-8 mb-4 mx-auto"}`}>
                            <button onClick={handleFunction}
                              className={`sliderBtns secondary-colored w-100`}
                            >
                              <span style={{ marginRight: "10px" }}>
                                <FaPhoneAlt />
                              </span>
                              <span>
                                Contact Now
                              </span>
                            </button>
                          </div>
                          <div
                            className={`${!isMobile ? "col-4" : "col-8 mx-auto"}`}
                            style={{ paddingLeft: !isMobile ? 0 : "" }}
                          >
                            <a href="#about-us-home">
                              <button className="sliderBtns white-colored-outline" style={{ width: "100%" }}>
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
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <SliderNavButtons
          reference={ref}
          justify={"center"}
          margin={"-30px"}
          absolute={false}
        /> */}
      </div>
    </div>
  );
};

export default Section1;
