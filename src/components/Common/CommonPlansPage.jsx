import React, { useContext, useState } from "react";
import { AppContext } from "../../context/Context";
import BookCallButton from "../BookCallButton";
import PlanModal from "../Modals/ModalsForm";
import Fade from "react-reveal/Fade";


const CommonPlansComponent = ({ data, smallerText, background, description = "" }) => {
  const [modalShow, setModalShow] = useState(false);
  const [isMobile] = useContext(AppContext);
  return (
    <>
      <div
        className="row Home-area4 about"
        style={{
          margin: 0,
          padding: 0,
          background: background ? background : "",
        }}
      >
        <div
          className={`col-12 Home-main-area2`}
          style={{
            paddingLeft: !isMobile ? "70px" : "20px",
            paddingRight: !isMobile ? "70px" : "20px",
          }}
        >
          <div className="row">
            <div
              className={"col-12"}
              style={
                isMobile ? { padding: "0px 20px", textAlign: "center" } : null
              }
            >
              <Fade bottom>
              <div className={`row`}>
                {!isMobile && <div className="col-1"></div>}
                <div className={`${isMobile ? "col-12" : "col-10"}`}>
                  <p
                    className={`sectionContent ${
                      smallerText && "small"
                    } large medium secondary-color text-center`}
                  >
                    Select a plan
                  </p>
                  <p
                    className={`section3Head ${
                      smallerText && "small"
                    } black extra-bold text-center`}
                  >
                    Chose A Plan That Works For You
                    </p>
                    <p
                      className="sectionContent text-center">
                      {description}
                    </p>
                </div>
                {!isMobile && <div className="col-1"></div>}
                </div>
              </Fade>
            </div>
          </div>
          <div className="row g-0" style={{ marginTop: !isMobile ? 50 : 20 }}>
            {data.map((card, idx, arr) => (
              <div
                key={card.id}
                className={`${!isMobile ? "col-4 my-auto" : "col-12"}`}
                style={{ marginBottom: "40px" }}
              >
                <Fade key={card.id} left={idx % 3 === 0} top={idx % 3 === 0 && idx >= 3} bottom={idx % 3 === 2} right={idx % 3 === 1}>
                <div
                  className="service-card parent"
                  style={{
                    background: Boolean(card.most_popular) && "transparent linear-gradient(138deg, #3D2953 0%, #5338BC 100%) 0% 0% no-repeat padding-box",
                    color: Boolean(card.most_popular) && "#fff",
                    borderRadius:
                      Boolean(card.most_popular) || isMobile
                        ? "47px"
                        : idx !== arr.length - 1
                        ? "47px 0 0 47px"
                        : "0 47px 47px 0",
                    width: !isMobile && Boolean(card.most_popular) && "105%",
                    zIndex: !isMobile && Boolean(Boolean(card.most_popular)) && 4,
                    minHeight: Boolean(card.most_popular) && "700px"
                  }}
                >
                  <p
                    className={`text-center subHead ${
                      smallerText ? "small mt-2" : "mt-4"
                    }`}
                  >
                    {card.name}
                  </p>
                  <p className="sliderHead1 no-underline small text-left mt-4">
                    {card.content.map((content) => (
                      <div key={content.id}>
                        <p
                          className={`sectionContent medium ${
                            smallerText && "small"
                          }`}
                        >
                          {content.title.includes(".svg") ? (
                            <img
                              src={require(`../../assets/icons/${content.title}`)}
                              alt="title"
                            />
                          ) : (
                            <>
                              {content.title.includes("Everything in") ? (
                                <>
                                  {(() => {
                                    let string = content.title.split("-");
                                    return (
                                      <>
                                        <span>{string[0]}</span>
                                        <span className="secondary-color bold">
                                          {string[1]}
                                        </span>
                                      </>
                                    );
                                  })()}
                                </>
                              ) : (
                                <>{content.title}</>
                              )}
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                  </p>
                  <p
                    className={`text-center ${smallerText ? "mt-4" : "mt-5"}`}
                    style={{ marginTop: "20px" }}
                  >
                    <BookCallButton
                      text={`Select Plan`}
                        className={null}
                        isColored={!Boolean(card.most_popular)  && true}
                        showImage={false}
                        handleFunction={()=>setModalShow(true)}
                    />
                  </p>
                </div>
                </Fade>
                </div>
            ))}
              </div>
            
        </div>
      </div>
      <PlanModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default CommonPlansComponent;
