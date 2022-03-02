import React, { useContext, useRef } from "react";
import { commonColPadding, responsiveSlider } from "../../../helper";
import carouselQuotes from "../../../assets/images/carouselQuotes.svg";
import clientQuotes from "../../../assets/images/carouselItemQuotes.svg";
import caraouselImage from "../../../assets/images/clientSliderImage1.png";
import caraouselImage1 from "../../../assets/images/clientSliderImage2.png";
import OwlCarousel from "react-owl-carousel";
import SliderNavButtons from "../SliderNav";
import { AppContext } from "../../../context/Context";

const Section7 = () => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  const ref = useRef(null);
  return (
    <div className="row Home-area7" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area7`}
        style={commonColPadding(isMobile, "30px")}
      >
        <div className="row">
          <div
            className="row col-12"
            style={{ paddingLeft: isMobile && "25px" }}
          >
            <p className="section3Head mb-0">Testimonials</p>
          </div>
          <div
            className={`carouselContainer ${isMobile ? "mt-4" : ""}`}
            style={{ marginTop: !isMobile && "40px" }}
          >
            <div className="absoluteDoubleQuotes">
              <img
                className="absoluteDoubleQuotes"
                src={carouselQuotes}
                alt="quotes"
              />
            </div>
            <OwlCarousel
              ref={ref}
              loop
              autoPlay={true}
              autoplayTimeout={1000}
              margin={20}
              //   nav
              items={3}
              className="owl-theme"
              //   style={{ marginTop: "-30px" }}
              responsive={responsiveSlider}
            >
              <div className="sliderCard">
                <div className="row col-12 imageCustomBorder">
                  <img
                    src={caraouselImage}
                    alt="clientImage"
                    style={{ padding: 0 }}
                  />
                </div>
                <div className="row col-12 clientCustomBorder">
                  <div className="absoluteDoubleQuotes">
                    <img
                      className="absoluteDoubleQuotesClient"
                      src={clientQuotes}
                      alt="quotes"
                    />
                  </div>
                  <p className="clientSliderContent">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd.
                  </p>
                  <p className="clientName mb-0">John Doe</p>
                  <p className="clientDetails mb-0">CEO, Artyss Studio</p>
                </div>
              </div>
              <div className="sliderCard">
                <div className="row col-12 imageCustomBorder">
                  <img
                    src={caraouselImage1}
                    alt="clientImage"
                    style={{ padding: 0 }}
                  />
                </div>
                <div className="row col-12 clientCustomBorder">
                  <div className="absoluteDoubleQuotes">
                    <img
                      className="absoluteDoubleQuotesClient"
                      src={clientQuotes}
                      alt="quotes"
                    />
                  </div>
                  <p className="clientSliderContent">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd.
                  </p>
                  <p className="clientName mb-0">John Doe</p>
                  <p className="clientDetails mb-0">CEO, Artyss Studio</p>
                </div>
              </div>
              <div className="sliderCard">
                <div className="row col-12 imageCustomBorder">
                  <img
                    src={caraouselImage1}
                    alt="clientImage"
                    style={{ padding: 0 }}
                  />
                </div>
                <div className="row col-12 clientCustomBorder">
                  <div className="absoluteDoubleQuotes">
                    <img
                      className="absoluteDoubleQuotesClient"
                      src={clientQuotes}
                      alt="quotes"
                    />
                  </div>
                  <p className="clientSliderContent">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd.
                  </p>
                  <p className="clientName mb-0">John Doe</p>
                  <p className="clientDetails mb-0">CEO, Artyss Studio</p>
                </div>
              </div>
              <div className="sliderCard">
                <div className="row col-12 imageCustomBorder">
                  <img
                    src={caraouselImage1}
                    alt="clientImage"
                    style={{ padding: 0 }}
                  />
                </div>
                <div className="row col-12 clientCustomBorder">
                  <div className="absoluteDoubleQuotes">
                    <img
                      className="absoluteDoubleQuotesClient"
                      src={clientQuotes}
                      alt="quotes"
                    />
                  </div>
                  <p className="clientSliderContent">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd.
                  </p>
                  <p className="clientName mb-0">John Doe</p>
                  <p className="clientDetails mb-0">CEO, Artyss Studio</p>
                </div>
              </div>
              <div className="sliderCard">
                <div className="row col-12 imageCustomBorder">
                  <img
                    src={caraouselImage1}
                    alt="clientImage"
                    style={{ padding: 0 }}
                  />
                </div>
                <div className="row col-12 clientCustomBorder">
                  <div className="absoluteDoubleQuotes">
                    <img
                      className="absoluteDoubleQuotesClient"
                      src={clientQuotes}
                      alt="quotes"
                    />
                  </div>
                  <p className="clientSliderContent">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd.
                  </p>
                  <p className="clientName mb-0">John Doe</p>
                  <p className="clientDetails mb-0">CEO, Artyss Studio</p>
                </div>
              </div>
            </OwlCarousel>
            {!isMobile && (
              <SliderNavButtons
                reference={ref}
                justify={"left"}
                margin={0}
                absolute={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
