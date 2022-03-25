import React from "react";
import CommonConsultSection from "../../Common/CommonConsultSection";

const Section5 = ({handleFunction}) => {
  return (
    <CommonConsultSection
      handleFunction={handleFunction}
      btnText={"Enquire now"}
      type2={false}
      text={"Talk to us today for a consultation"}
      extraBold={false}
    />
  );
};

export default Section5;
