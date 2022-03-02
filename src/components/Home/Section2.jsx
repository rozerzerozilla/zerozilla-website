import React, {useContext} from "react";
import instaMart from "../../assets/logos/InstamartlogoWhite.svg";
import skillMine from "../../assets/logos/skillMIne.svg";
import creditap from "../../assets/logos/creaditap.svg";
import medequip from "../../assets/logos/mediquip.svg";
import objectiveDone from "../../assets/logos/objectiveDone.svg";
import { AppContext } from "../../context/Context";

const Section2 = () => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  const sectionClass = `${
    !isMobile ? "col-2 my-auto" : "col-12 justify-content-center text-center"
  }`;
  const sectionStyle = { marginBottom: isMobile && "50px" };
  return (
    <div className="row Home-area2" style={{ margin: 0, padding: 0 }}>
      <div className="col-12 Home-main-area2" style={{ marginTop: "50px" }}>
        <div className="row">
          {!isMobile && <div className="col-1 my-auto"></div>}
          <div className={sectionClass} style={sectionStyle}>
            <img src={instaMart} alt="instaMart" className="section2Logos" />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={skillMine} alt="skillMine" className="section2Logos" />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={creditap} alt="creditap" className="section2Logos" />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={medequip} alt="medequip" className="section2Logos" />
          </div>
          <div className={sectionClass}>
            <img
              src={objectiveDone}
              alt="objectiveDone"
              className="section2Logos"
            />
          </div>
          {!isMobile && <div className="col-1 my-auto"></div>}
        </div>
      </div>
    </div>
  );
};

export default Section2;
