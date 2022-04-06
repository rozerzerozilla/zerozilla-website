import React, { useContext, useRef } from "react";
import { commonColPadding, responsiveSlider } from "../../../helper";
import carouselQuotes from "../../../assets/images/carouselQuotes.svg";
import clientQuotes from "../../../assets/images/carouselItemQuotes.svg";
import caraouselImage from "../../../assets/images/clientSliderImage1.webp";
import OwlCarousel from "react-owl-carousel";
import SliderNavButtons from "../SliderNav";
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import { Container, Row } from "react-bootstrap";


const clientTestimonials = [
  {
    name: "SHRIPAD PUJARI",
    testimonial: "I worked with Zerozilla. I must say the team is really good. They understand the client’s requirements really well and deliver the same. They are always available and deliver services quickly. I highly recommend them.",
    company:"Ayubazaar",
  },
  // {
  //   name: "DEEPIKA",
  //   testimonial: "Great guys! They designed our event management website.",
  //   company: "DUSTINEVENTS",
  // },
  // {
  //   name: "VINOD",
  //   testimonial: "They have developed our billing application and website. Awesome team, express service",
  //   company: "MEDICLIVE",
  // },
  {
    name: "Dinakar",
    testimonial: "Our ongoing journey with Zerozilla team has been thoroughly professional and they are quick in terms of response. With core strength in SEO, website, and APP-related projects they are a complete solution provider. Highly recommended!",
    company: "Handiman Services Ltd",
  },
  {
    name: "Prashanth B.M",
    testimonial: "We are glad to have worked with Zerozilla. We got a great deal of support from Mr Vinay and and his team. They coordinated the entire website development cycle with us. Overall, very good service.",
    company: "Success Thumb Services",
  },
  {
    name: "Jayapalashri Anil",
    testimonial: "I was given a reference of them by a very good friend, and I was assured I won’t be disappointed. Trust me I am not disappointed; the response is instant. My appreciation goes to the entire team of Zerozilla... Kudos.",
    company:"Samskara Healing Center",
  },
  {
    name: "Aarti Bhatt",
    testimonial: "We have been working closely with ZZ for more than a year. Working with them has been a pleasure. The team of professionals at Zerozilla is easy to work with and is available at any point of time for support",
    company: "Leadership Tribe",
  },
]

const Section7 = () => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  const ref = useRef(null);
  return (
    <div className="Home-area7" style={{ margin: 0, padding: 0 }}>
      <Container fluid="lg">
        <Row style={{position:"relative"}}>
          <div
            className={`col-12 Home-main-area7`}
            style={commonColPadding(isMobile, "30px")}
          >
            <div className="row">
              <div
                className="row col-12"
                style={{ paddingLeft: isMobile && "25px" }}
              >
                <p className="section3Head mb-0">Hear it from our happy customers</p>
              </div>
              <div
                className={`carouselContainer ${isMobile ? "mt-4" : ""}`}
                style={{ marginTop: !isMobile && "40px", padding: isMobile?"0px":"70px" }}
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
                  loop={true}
                  autoPlay={true}
                  autoplayTimeout={1000}
                  margin={20}
                  //   nav
                  items={1}
                  className="owl-theme"
                  responsive={responsiveSlider}
                >
                  {clientTestimonials.map((ele, idx) => <Fade key={idx} top={idx % 2 === 0} bottom={idx % 2 !== 0}>
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
                          {ele.testimonial}
                        </p>
                        <p className="clientName mb-0">{ele.name}</p>
                        <p className="clientDetails mb-0">{ele.company}</p>
                      </div>
                    </div>
                  </Fade>)}
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
        </Row>
      </Container>
    </div>
  );
};

export default Section7;
