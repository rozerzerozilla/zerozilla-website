import React, { useContext } from "react";

// react lottie
import Lottie from 'react-lottie';

import { AppContext } from "../../context/Context";
import BreadCrumbs from "../BreadCrumbs";
import BookCallButton from "../BookCallButton";
import Fade from 'react-reveal/Fade';

const CommonSection1 = ({
  title,
  background,
  subtitle1,
  subtitle2,
  subtitle3 = '',
  btnText,
  sectionCover,
  boxShadow,
  isColored,
  isWhiteBtn = false,
  titleColor,
  btnColor,
  extraText,
  imageWidth,
  type2,
  opacity,
  viewBtn,
  animatedImage = false,
  animationData = {},
  fullbackground = false,
  whiteText = false,
  handleFunction = function(){}
}) => {
  const [isMobile] = useContext(AppContext);
  const defaultOptions = {
    padding:"20px",
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    fullbackground? 
      <div className="row Home-area3" style={{ margin: 0, padding: 0 }}>
        <div
          className="col-12 slider-main-area-1"
          style={{ padding: isMobile ? "20px" : "50px 70px" }}
        >
          <div
            className={`section-1-content-area ${boxShadow ? "apply-shadow" : ""
              }`}
            style={{
              background: background,
              backgroundImage: `url(${sectionCover})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition:"center center",
              color: type2 && "#fff",
              textAlign: type2 && "center",
              boxShadow: type2 && `inset 0 0 0 2000px rgba(36,36,36, ${opacity})`,
            }}
          >
            {/* {type2 && <div className="bg-overlay"></div>} */}
            <div className={`${isMobile ? "mobile" : "desktop"}`}>
              <div className="row-col-12">
                <Fade top>
                  <p
                    className="sliderHead1 no-underline light"
                    style={{ textAlign: "left" }}
                  >
                    <BreadCrumbs className={type2 || whiteText ? "white" : "black"} />
                  </p>
                </Fade>
              </div>
              <div className="row">
                <div
                  className={`${isMobile ? "col-12" : `${!type2 ? "col-6 my-auto" : "col-12"}`
                    }`}
                >
                  <div
                    className="row"
                    style={
                      isMobile
                        ? { padding: "0px 20px", textAlign: "center" }
                        : null
                    }
                  >
                    <Fade bottom>
                      <p
                        className="sliderHead2 mb-0"
                        style={{ marginTop: type2 ? 100 : 50, color: titleColor }}
                      >
                        {title}
                      </p>
                    </Fade>
                  </div>
                  <div className="row" style={{ marginTop: "30px" }}>
                    <Fade bottom>


                      <div className="col-12">
                        <p
                          className="sliderHead1 mb-0 no-underline"
                          style={{
                            textAlign: isMobile && "center",
                            color: whiteText ? "white" : "inherit"
                          }}
                        >
                          {subtitle1}
                          {!isMobile && <br />}
                          {subtitle2} {!isMobile && <br />}
                          {subtitle3}
                        </p>
                      </div>
                    </Fade>
                  </div>
                  {viewBtn && (
                    <div
                      className="row"
                      style={{ marginTop: !isMobile ? "70px" : "50px" }}
                    >
                      <Fade>
                        <div className="col-12">
                          <div className={`${!isMobile ? "row" : "customFlexBox"}`}>
                            <div
                              className={`${!isMobile
                                  ? `${!type2 ? "col-5 pe-0" : "col-12"}`
                                  : ""
                                }`}
                            >
                              {isWhiteBtn ?
                                <button
                                  onClick={handleFunction}
                                  className="sliderBtns white-colored-outline">
                                  {btnText}
                                </button> :
                                <BookCallButton
                                  handleFunction={handleFunction}
                                  className={"common-section-1"}
                                  isColored={isColored}
                                  text={btnText}
                                  showImage={false}
                                  btnColor={btnColor}
                                  type2={type2}
                                />}
                            </div>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  )}

                  {extraText && (
                    <div
                      className="row mt-5 sliderHead1 mb-0 no-underline"
                      style={{ marginTop: "50px" }}
                    >
                      <p>{extraText}</p>
                    </div>
                  )}
                </div>
                {!type2 && (
                  <div
                    className={`${isMobile ? "col-12" : "col-6 my-auto"} p-0`}
                    style={{ marginTop: isMobile && "50px" }}
                  >
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="row Home-area3 mb-4">
        <div className={`section-1-content-area mx-auto ${boxShadow ? "apply-shadow" : ""
            }`}
          style={{
            background: background,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: type2 && "#fff",
            textAlign: type2 && "center",
            boxShadow: type2 && `inset 0 0 0 2000px rgba(36,36,36, ${opacity})`,
          }}
        >
          {!isMobile && <div className="row-col-12">
            <Fade top>
              <p
                className="sliderHead1 no-underline light"
                style={{ textAlign: "left" }}
              >
                <BreadCrumbs className={type2 ? "white" : "black"} />
              </p>
            </Fade>
          </div>}
          <div className="row common-hero-section">
            <div
              className={`order-1 order-md-0 ${isMobile ? "col-12" : `${!type2 ? "col-6 my-auto" : "col-12"}`
                }`}
            >
              <div className="row"
                style={isMobile? { padding: "0px 20px", textAlign: "center" } : null}
              >
                <Fade bottom>
                  <div className="sliderHead2"
                    style={{ marginTop: type2 ? 100 : 50, color: titleColor }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: title }} />
                  </div>
                </Fade>
              </div>
              
              <div className="row" style={{ marginTop: "30px" }}>
                <Fade bottom>


                  <div className="col-12">
                    <p
                      className="sliderHead1 mb-0 no-underline"
                      style={{ textAlign: isMobile && "center" }}
                    >
                      {subtitle1}
                      {!isMobile && <br />}
                      {subtitle2} {!isMobile && <br />}
                      {subtitle3}
                    </p>
                  </div>
                </Fade>
              </div>
              {viewBtn && (
                <div
                  className="row"
                  style={{ marginTop: !isMobile ? "70px" : "50px" }}
                >
                  <Fade>
                    <div className="col-12">
                      <div className={`${!isMobile ? "row" : "customFlexBox"}`}>
                        <div
                          className={`${!isMobile
                            ? `${!type2 ? "col-5 pe-0" : "col-12"}`
                            : ""
                            }`}
                        >
                          {isWhiteBtn ?
                            <button
                              onClick={handleFunction}
                              className="sliderBtns white-colored-outline">
                              {btnText}
                            </button> :
                            <BookCallButton
                              handleFunction={handleFunction}
                              className={"common-section-1"}
                              isColored={isColored}
                              text={btnText}
                              showImage={false}
                              btnColor={btnColor}
                              type2={type2}
                            />}
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              )}

              {extraText && (
                <div
                  className="row mt-5 sliderHead1 mb-0 no-underline"
                  style={{ marginTop: "50px" }}
                >
                  <p>{extraText}</p>
                </div>
              )}
            </div>
            {!type2 && (
              <div className={`order-0 order-md-1 d-flex alig-items-center justify-content-center ${isMobile ? "col-12 m-1" : "col-6 my-auto"} `}>
                {animatedImage ? <Lottie options={defaultOptions} /> :
                  <img
                    src={sectionCover}
                    alt="section-1"
                    style={{ width: isMobile? "50%":"100%" }}
                  />}
              </div>
            )}
          </div>
        </div>
    </div >
  );
};

export default CommonSection1;
