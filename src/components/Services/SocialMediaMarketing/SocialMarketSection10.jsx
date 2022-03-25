import React from "react";
import CommonConsultSection from "../../Common/CommonConsultSection";

const Section10 = ({handleFunction}) => {
  return (
    <CommonConsultSection
      handleFunction={handleFunction}
      btnText={`Let’s Talk`}
      type2={false}
      text={"Talk to us today for a consultation"}
      extraBold={false}
    />
  );
};

export default Section10;
