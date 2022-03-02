import React from "react";

const CommonCard = ({
  image,
  name,
  description,
  isMobile,
  background,
  imageWidth,
  padding,
}) => {
  return (
    <div className="bizCard">
      <div className="row">
        <div
          className="col-4 cardLeftCol row-height"
          style={{ background: background }}
        >
          <img
            src={require(`../../assets/icons/${image}`)}
            alt="cardImage"
            style={{ width: imageWidth ? imageWidth : "80%" }}
          />
        </div>
        <div
          className="col-8 row-height"
          style={{ padding: padding ? padding : "20px 50px" }}
        >
          <p
            className="cardHead"
            style={
              !isMobile
                ? { fontSize: name.length > 16 ? "16px" : "18px" }
                : null
            }
          >
            {name}
          </p>
          <p className="cardDescription">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
