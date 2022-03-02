import React from "react";
import { leadGenerationPlans } from "../../../helper/plans";
import CommonPlansComponent from "../../Common/CommonPlansPage";

const Section6 = () => {
  return (
    <CommonPlansComponent
      data={leadGenerationPlans}
      smallerText={true}
      background={"#fff"}
    />
  );
};

export default Section6;
