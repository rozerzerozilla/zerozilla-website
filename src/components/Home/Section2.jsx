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

const logos = [
  instaMart,
  skillMine,
  creditap,
  medequip,
  objectiveDone,
  socialhr,
  shealing,
  ipeosolution,
  medequip,
  posbook,
  panindia,
  kidsonwheel,
  innovativeacademy,
  itt,
  hathagroup,
  drsujata,
  cloudArmee,
  artyss,
]


const Section2 = () => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  const sectionClass = `clients-each-box ${
    !isMobile ? "col-12" : "col-12"
  }`;
  const sectionStyle = { marginBottom: isMobile && "50px" };
  return (
    <div className="row Home-area2" style={{ margin: 0, padding: "-50px", height: "" }}>
      <div className="col-12 Home-main-area2" style={{ marginTop: "50px" }}>
        <div className="kuLJSR">
          {logos.map((ele, idx) => <div className={sectionClass} key={idx}>
            <img src={ele} alt="instaMart" className="section2Logos" />
          </div>)}
        </div>
        {/* <div className="kuLJSR">
          <div className={sectionClass} >
            <img src={instaMart} alt="instaMart" className="section2Logos" />
          </div>
          <div className={sectionClass} >
            <img src={skillMine} alt="skillMine" className="section2Logos" />
          </div>
          <div className={sectionClass} >
            <img src={creditap} alt="creditap" className="section2Logos" />
          </div>
          <div className={sectionClass} >
            <img src={medequip} alt="medequip" className="section2Logos" />
          </div>
          <div className={sectionClass}>
            <img
              src={objectiveDone}
              alt="objectiveDone"
              className="section2Logos"
            />
          </div>
          <div className={sectionClass} >
            <img src={socialhr} alt="socialhr" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={shealing} alt="shealing" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={ipeosolution} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={medequip} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={posbook} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={panindia} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={kidsonwheel} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={innovativeacademy} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={itt} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={hathagroup} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={drsujata} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={cloudArmee} alt="medequip" className="section2Logos " />
          </div>
          <div className={sectionClass} >
            <img src={artyss} alt="medequip" className="section2Logos " />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Section2;
