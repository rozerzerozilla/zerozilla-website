import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const BookCallButton = ({
  isColored,
  showImage,
  text,
  className,
  handleFunction,
  btnColor,
  smallText,
  type2,
  applyRadius,
}) => {
  // console.log('small', smallText)
  return (
    <button
      className={`sliderBtns ${isColored ? "colored" : ""} ${className}`}
      onClick={handleFunction}
      style={
        btnColor
          ? { background: btnColor, color: "#fff", border: btnColor }
          : {
              background: smallText && "transparent",
              border: type2 && "2px solid #fff",
              color: type2 && "#fff",
              borderRadius: applyRadius && "30px",
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
};

export default BookCallButton;
