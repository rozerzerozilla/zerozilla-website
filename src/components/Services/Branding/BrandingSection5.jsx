import React from "react";
import { brandingPlans } from "../../../helper/plans";
import CommonPlansComponent from "../../Common/CommonPlansPage";

const Section6 = () => {
    return (
        <CommonPlansComponent
            description={"Whether you are a start-up, medium scale or larger enterprise, we have the best solutions to help you achieve greater heights. Our Social Media marketing support is available in 3 different variants. Choose from our available social media marketing plans without delay!"}
            data={brandingPlans}
            smallerText={true}
            background={"#fff"}
        />
    );
};

export default Section6;
