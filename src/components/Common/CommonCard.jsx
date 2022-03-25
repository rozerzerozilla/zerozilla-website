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
  imageCard = true
}) => {
  if (buttonCard && imageCard) { 
    return (
      <div className="bizCard row">
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
      <div className="bizCard row">
        <div
          className="col-12 cardTopCol"
          style={{ background: background }}
        >
          <img
            src={require(`../../assets/icons/${image}`)}
            // src={require(`../../assets/icons/${image}`)}
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
      isMobile ? <div className="bizCard row" style={{ minHeight: "250px" }}>
        <div
          className="col-12 cardTopCol"
          style={{ background: background, minHeight: "250px" }}
        >
          <img
            src={require(`../../assets/icons/${image}`)}
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
      </div>
        
      :
        
      <div className="bizCard" style={{minHeight:"250px"}}>
        < div className = "row" >
          <div
              className={`col-4 row-height cardLeftCol`}
              style={{ background: background, minHeight: "250px" }}
          >
            <img
              src={require(`../../assets/icons/${image}`)}
              alt="cardImage"
              style={{ height: "80px" }}
              />
              {icontext && <p className="cardHead">
                {name}
              </p>}
              
          </div>
          <div
            className="col-8 row-height d-flex flex-column align-items-start justify-content-center"
            style={{ padding: padding ? padding : "20px 10px 10px 30px" }}
          >
            {!icontext && <p className="cardHead">
              {name}
            </p>}
              <p className="cardDescription">{description}</p>
              {buttonCard ? <div className="col-12 text-center pb-3">
                <BookCallButton
                  isColored={true}
                  text={`Get a Qoute`}
                  showImage={false}
                />
              </div> : null}
          </div>
        </div >
      </div >
      
    );
  }
};

export default CommonCard;
