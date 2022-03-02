import React from "react";
import { ppcPlans } from "../../../helper/plans";
import CommonPlansComponent from "../../Common/CommonPlansPage";

const Section5 = () => {
  return (
    <CommonPlansComponent
      data={ppcPlans}
      smallerText={true}
      background={"#fff"}
    />
  );
};

export default Section5;
