import React from "react";
import { FaArrowUp } from "react-icons/fa";
import $ from "jquery";

const GoUp = () => {
  return (
    <button
      className="scollToTop"
      onClick={() => {
        $("html, body").animate({ scrollTop: "0" });
      }}
    >
      <FaArrowUp />
    </button>
  );
};

export default GoUp;
