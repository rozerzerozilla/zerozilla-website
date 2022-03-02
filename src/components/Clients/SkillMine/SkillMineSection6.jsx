import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { commonColPadding } from "../../../helper";
import BookCallButton from "../../BookCallButton";
import CommonConsultSection from "../../Common/CommonConsultSection";

const Section6 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <CommonConsultSection
      btnText={"Get in touch"}
      type2={false}
      text={
        <>
          <span className="sectionContent medium">Got an idea?</span>
          <br />
          <span>Let’s craft brilliance</span>
          <br />
          <span>together!</span>
        </>
      }
      extraBold={true}
      applyRadius={true}
    />
  );
};

export default Section6;
