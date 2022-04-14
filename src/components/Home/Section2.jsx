import React, {useContext, useState} from "react";
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

import asksid from "../../assets/logos/asksid.svg";
import audiolife from "../../assets/logos/audiolife.svg";
import bepractical from "../../assets/logos/bepractical.svg";
import bestpolymer from "../../assets/logos/bestpolymer.svg";
import eSign from "../../assets/logos/eSign.svg";
import eStoreWale from "../../assets/logos/eStoreWale.svg";
import gtrac from "../../assets/logos/gtrac.svg";
import jubliee from "../../assets/logos/jubliee.svg";
import kragos from "../../assets/logos/kragos.svg";
import saansol from "../../assets/logos/saansol.svg";
import solar from "../../assets/logos/solar.svg";
import successMind from "../../assets/logos/successMind.svg";
import tarot from "../../assets/logos/tarot.svg";

import { AppContext } from "../../context/Context";
import {FiArrowDown, FiArrowUp} from "react-icons/fi"

const logos = [
  instaMart,
  skillMine,
  creditap,
  medequip,
  objectiveDone,
  socialhr,
  shealing,
  ipeosolution,
  posbook,
  panindia,
  kidsonwheel,
  innovativeacademy,
  itt,
  hathagroup,
  drsujata,
  cloudArmee,
  artyss,
  asksid,
  audiolife,
  bepractical,
  bestpolymer,
  eSign,
  eStoreWale,
  gtrac,
  jubliee,
  kragos,
  saansol,
  solar,
  successMind,
  tarot,
]


const Section2 = () => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  const sectionClass = `clients-each-box ${
    !isMobile ? "col-12" : "col-12"
  }`;
  const sectionStyle = { marginBottom: isMobile && "50px" };
  const [expandIndex, setExpandIndex] = useState(6)
  return (
    <div className="row Home-area2" style={{ margin: 0, padding: "-50px", height: "" }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xs-12 col-md-8 mx-auto text-center">
            <div className="section3Head text-center w-100">Some of our Clients</div>
          </div>
        </div>
        
      </div>
      <div className="col-12 Home-main-area2">
        <div className="kuLJSR">
          {isMobile ? logos.slice(0, expandIndex).map((ele, idx) => <div style={{borderRadius: isMobile ? '5px' : "15px"}} className={sectionClass} key={idx}>
            <img src={ele} alt="instaMart" className="section2Logos" />
          </div>) : logos.map((ele, idx) => <div className={sectionClass} key={idx}>
            <img src={ele} alt="instaMart" className="section2Logos" />
          </div>)}
        </div>
        {isMobile && <div onClick={() => expandIndex === 6 ? setExpandIndex(logos.length - 1) : setExpandIndex(6)}
          className="d-flex w-100 align-items-center justify-content-center mt-3" style={{ cursor: "pointer" }}>
          {expandIndex === 6 ? <label>click to see more <FiArrowDown /></label> : 
            <label>close <FiArrowUp /></label> }
        </div>}
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
