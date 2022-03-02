import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SliderNavButtons = ({ reference , justify, margin, absolute }) => {
  return (
    <div
      className="d-flex sliderBtns1"
      style={{ justifyContent: justify, marginTop: margin ? margin : 0 }}
    >
      <button
        className={`leftSliderBtn ${absolute ? 'absolutePos' : ''}`}
        onClick={() => reference.current.prev()}
      >
        <FaAngleLeft />
      </button>
      <button
        className={`rightSliderBtn ${absolute ? 'absolutePos' : ''}`}
        onClick={() => reference.current.next()}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default SliderNavButtons;
