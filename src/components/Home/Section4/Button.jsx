import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const ButtonComponent = ({ image, name, isMobile, path }) => {
  return (
    <Link to={path}>
      <button
        className="appBtn"
        style={isMobile ?
          { display: "grid", gridTemplateColumns: "1fr 3fr", marginBottom: "20px", width: '100%', padding: "10px 25px" } :
          { display: "grid", gridTemplateColumns: "1fr 4fr 0.5fr", marginBottom: "20px", width: '100%', padding: "10px 25px", }}
      >
        <img src={image} alt="webDevelopment" style={{ width: isMobile ? "unset" : "50px" }} />
        <div className="my-auto"
          style={{ textAlign: isMobile ? "center" : "left", whiteSpace: "nowrap", fontSize: isMobile ? "13px" :"inherit" }}>
          {name}
        </div>
        {!isMobile && <div className=" col-sm-2 my-auto">
          <MdArrowForwardIos style={{ fontSize: "28px" }} />
        </div>}
      </button>
    </Link>
  );
};

export default ButtonComponent;
