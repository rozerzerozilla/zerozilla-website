import React, {useContext} from "react";
import instaMart from "../../assets/logos/swigg-insta.png";
import skillMine from "../../assets/logos/skillmin.png";
import creditap from "../../assets/logos/creditap_.png";
import medequip from "../../assets/logos/mediquip.svg";
import objectiveDone from "../../assets/logos/objectiveDone.svg";
import socialhr from "../../assets/logos/socialhr.png";
import shealing from "../../assets/logos/shealing.png";
import ipeosolution from "../../assets/logos/ipeosolution.png";
import posbook from "../../assets/logos/posbook.png";
import panindia from "../../assets/logos/panindia.png";
import kidsonwheel from "../../assets/logos/kidsonwheel.png";
import itt from "../../assets/logos/itt.png";
import innovativeacademy from "../../assets/logos/innovativeacademy.png";
import hathagroup from "../../assets/logos/hathagroup.png";
import drsujata from "../../assets/logos/drsujata.png";
import cloudArmee from "../../assets/logos/cloudArmee.png";
import artyss from "../../assets/logos/artyss.png";

import { AppContext } from "../../context/Context";

const Section2 = () => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  const sectionClass = `${
    !isMobile ? "col-3 my-auto" : "col-12 justify-content-center text-center"
  }`;
  const sectionStyle = { marginBottom: isMobile && "50px" };
  return (
    <div className="row Home-area2" style={{ margin: 0, padding: "-50px", height: "" }}>
      <div className="col-12 Home-main-area2" style={{ marginTop: "50px" }}>
        <div className=" kuLJSR">
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
          <div className={sectionClass} style={sectionStyle}>
            <img src={socialhr} alt="socialhr" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={shealing} alt="shealing" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={ipeosolution} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={medequip} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={posbook} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={panindia} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={kidsonwheel} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={innovativeacademy} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={itt} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={hathagroup} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={drsujata} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={cloudArmee} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} style={sectionStyle}>
            <img src={artyss} alt="medequip" className="section2Logos " />
          </div>
          {!isMobile && <div className="col-1 my-auto"></div>}
        </div>
      </div>
    </div>
  );
};

export default Section2;
