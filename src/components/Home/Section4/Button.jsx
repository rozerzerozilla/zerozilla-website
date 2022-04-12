import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const ButtonComponent = ({ image, name, isMobile, path }) => {
  return (
    <Link to={path}>
      <button
        className="appBtn"
        style={{ marginBottom: "20px", width: '100%', padding:"10px 25px" }}
      >
        <div className="row">
          <div className="col-2 my-auto">
            <img src={image} alt="webDevelopment" height={isMobile ? "130px" : "60px"} />
          </div>
          <div className="col-8 my-auto" style={{ textAlign: "left" }}>
            {name}
          </div>
          <div className="col-2 my-auto">
            <MdArrowForwardIos style={{ fontSize: "28px" }} />
          </div>
        </div>
      </button>
    </Link>
  );
};

export default ButtonComponent;
