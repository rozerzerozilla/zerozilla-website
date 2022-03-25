import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const ButtonComponent = ({ image, name, isMobile, path }) => {
  return (
    <Link to={path}>
      <button
        className="appBtn"
        style={{ marginBottom: "20px", width: !isMobile ? "480px" : '100%' }}
      >
        <div className="row">
          <div className="col-2 my-auto">
            <img src={image} alt="webDevelopment" />
          </div>
          <div className="col-8 my-auto" style={{ textAlign: "left" }}>
            {name}
          </div>
          <div className="col-2 my-auto">
            <FaLongArrowAltRight style={{ fontSize: "28px" }} />
          </div>
        </div>
      </button>
    </Link>
  );
};

export default ButtonComponent;
