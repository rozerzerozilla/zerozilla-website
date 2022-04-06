import React from "react";
import CommonConsultSection from "../../Common/CommonConsultSection";

const Section4 = ({handleFunction}) => {
  return (
    <CommonConsultSection
      handleFunction={handleFunction}
      type2={false}
      btnText={"Enquire now"}
      text={"Talk to us today for a consultation"}
      extraBold={false}
    />
  );
};

export default Section4;
