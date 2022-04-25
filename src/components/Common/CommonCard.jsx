import React from "react";
import BookCallButton from "../BookCallButton";
const CommonCard = ({
  image,
  name,
  description,
  isMobile,
  background,
  imageWidth,
  icontext = false,
  padding,
  vertical = false,
  buttonCard = false,
  imageCard = true,
  button = false,
  handleFunction
}) => {
  if (buttonCard && imageCard) { 
    return (
      <div className="bizCard row" style={{ display: "grid", height: "100%" }}>
        <div className="col-12 cardImgCol">
          <img
            src={require(`../../assets/images/${image}`)}
            alt="cardImage"
            style={{ height: "80px" }}
          />
        </div>
        <div className="col-12 text-center p-5">
          <p className="cardHead">
            {name}
          </p>
          <p className="cardDescription">{description}</p>
        </div>
        <div className="col-12 text-center pb-3">
          <BookCallButton
            isColored={true}
            text={`Yes I need this`}
            showImage={false}
          />
        </div>
      </div>
    );
  }
  else if(vertical) {
    return (
      <div className="bizCard row" style={{ display: "grid", height: "100%" }}>
        <div
          className="col-12 cardTopCol"
          style={{ background: background }}
        >
          <img
            src={require(`../../assets/icons/${image}`)}
            // src={require(`../../assets/icons/${image}`)}
            alt="cardImage"
            style={{ height: "80px", objectFit: "cover", width:"unset" }}
          />
        </div>
        <div className="col-12 text-center p-5">
          <p className="cardHead">
            {name}
          </p>
          <p className="cardDescription">{description}</p>
        </div>
        {buttonCard?  <div className="col-12 text-center pb-3">
          <BookCallButton
            isColored={true}
            text={`Yes I need this`}
            showImage={false}
          />
        </div> : null}
      </div>
    );
  } else {
    return (
      isMobile ? <div className="bizCard">
        <div
          className="col-12 cardTopCol"
          style={{ background: background }}
        >
          <img
            src={require(`../../assets/icons/${image}`)}
            alt="cardImage"
            style={{ height: "80px", objectFit: "cover", width: "unset" }}
          />
        </div>
        <div className="col-12 text-center p-5">
          <p className="cardHead">
            {name}
          </p>
          <p className="cardDescription">{description}</p>
        </div>
      </div>
        
      :
        
        <div className="bizCard" style={{ display:"grid", height:"100%"}}>
          <div className="d-flex align-items-center justify-content-center ">
            <div
              className={`col-4 row-height cardLeftCol`}
              style={{ background: background, height: "100%", }}
            >
            <img
              src={require(`../../assets/icons/${image}`)}
              alt="cardImage"
                style={{ height: "80px", objectFit: "cover", width: "unset" }}
              />
              {icontext && <p className="cardHead">
                {name}
              </p>}
              
          </div>
          <div
            className="col-8 row-height d-flex flex-column align-items-start justify-content-center"
            style={{ padding: padding ? padding : "10px" }}
          >
            {!icontext && <p className="cardHead">
              {name}
            </p>}
              <p className="cardDescription">{description}</p>
              {button ? <div className="col-12 pb-3">
                <button
                  className={`sliderBtns bordered`}
                  onClick={handleFunction}
                >
                  Get a qoutes
                </button>
              </div> : null}
          </div>
        </div >
      </div >
      
    );
  }
};

export default CommonCard;
