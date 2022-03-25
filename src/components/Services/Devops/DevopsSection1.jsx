import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import * as lottieJson from "./devops-lottie.json";

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`DevOps Services and Support`}
            subtitle1={`Deliver apps at high velocity!`}
            subtitle2={`Compete effectively with DevOps`}
            sectionCover={""}
            animationData={lottieJson}
            animatedImage={true}
            background={`#F4F8FF`}
            btnText={`Get DevOps services`}
            boxShadow={false}
            extraText={false}
            isColored={false}
            titleColor={`#4C2E88`}
            viewBtn={true}
        />
    );
};

export default Section1;