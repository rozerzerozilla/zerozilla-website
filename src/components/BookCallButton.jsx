import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const BookCallButton = ({
  isColored,
  showImage,
  text,
  className,
  btnColor,
  smallText,
  type2,
  applyRadius,
  disabled,
  type = 'button',
  bordered = false,
  width = 'unset',
  handleFunction = () => { },
  linkType = false,
  link
}) => {
  // console.log('small', smallText)
  if (type === 'submit') {
    return (
      <button
        onClick={handleFunction}
        type={type}
        disabled={disabled}
        className={`sliderBtns ${isColored ? "bordered" : ""} ${className}`}
        style={
          btnColor
            ? { background: btnColor, color: "#fff", border: btnColor }
            : {
              background: smallText && "transparent",
              border: type2 && "2px solid #fff",
              color: type2 && "#fff",
              borderRadius: applyRadius && "30px",
              width: width
            }
        }
      >
        {showImage && (
          <span style={{ marginRight: "10px" }}>
            <FaPhoneAlt />
          </span>
        )}
        <span className={`${smallText ? "sectionContent small" : ""}`}>
          {text}
        </span>
      </button>
    );
  } else {
    return (
      <button
        type={type}
        className={`sliderBtns ${isColored ? "colored " : bordered ? "bordered" : ""} ${className}`}
        onClick={handleFunction}
        style={
          btnColor
            ? { background: btnColor, color: "#fff", border: btnColor }
            : {
              background: smallText && "transparent",
              border: type2 && "2px solid #fff",
              color: type2 && "#fff",
              borderRadius: applyRadius && "30px",
              width: width
            }
        }
      >
        {showImage && (
          <span style={{ marginRight: "10px" }}>
            <FaPhoneAlt />
          </span>
        )}
        <span className={`${smallText ? "sectionContent small" : ""}`}>
          {text}
        </span>
      </button>
    );
  }
  
};

export default BookCallButton;
