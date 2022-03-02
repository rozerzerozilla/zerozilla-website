import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import BookCallButton from "../BookCallButton";

const CommonPlansComponent = ({ data, smallerText, background }) => {
  const [isMobile] = useContext(AppContext);
  return (
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
              </div>
              {!isMobile && <div className="col-1"></div>}
            </div>
          </div>
        </div>
        <div className="row g-0" style={{ marginTop: !isMobile ? 50 : 20 }}>
          {data.map((card, idx, arr) => (
            <div
              key={card.id}
              className={`${!isMobile ? "col-4 my-auto" : "col-12"}`}
              style={{ marginBottom: "40px" }}
            >
              <div
                className="service-card parent"
                style={{
                  background: card.most_popular && "#C31F5D",
                  color: card.most_popular && "#fff",
                  borderRadius:
                    card.most_popular || isMobile
                      ? "47px"
                      : idx !== arr.length - 1
                      ? "47px 0 0 47px"
                      : "0 47px 47px 47px",
                  width: !isMobile && card.most_popular && "105%",
                  zIndex: !isMobile && card.most_popular && 2,
                }}
              >
                {card.most_popular && (
                  <div className="popular-card child">
                    <p
                      className={`sectionContent ${
                        smallerText && "small"
                      } secondary-color text-center bold`}
                    >
                      Most popular
                    </p>
                  </div>
                )}
                <p
                  className={`text-center extra-bold subHead ${
                    smallerText ? "small mt-2" : "mt-4"
                  } underline`}
                >
                  {card.name}
                </p>
                <p className="sliderHead1 no-underline small text-center mt-4">
                  {card.content.map((content) => (
                    <span key={content.id}>
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
                    </span>
                  ))}
                </p>
                <p
                  className={`text-center ${smallerText ? "mt-4" : "mt-5"}`}
                  style={{ marginTop: "20px" }}
                >
                  <BookCallButton
                    text={`Select Plan`}
                    className={null}
                    isColored={true}
                    showImage={false}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonPlansComponent;
