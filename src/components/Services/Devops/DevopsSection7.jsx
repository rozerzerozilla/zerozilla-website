import React from "react";
import { awsPlans } from "../../../helper/plans";
import CommonPlansComponent from "../../Common/CommonPlansPage";

const Section7 = () => {
    return <CommonPlansComponent data={awsPlans} />;
};

export default Section7;
