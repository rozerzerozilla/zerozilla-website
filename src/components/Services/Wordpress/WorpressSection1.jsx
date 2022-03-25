import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import * as lottieJson from "./wordpress-lottie.json";

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`WordPress e-Commerce Development`}
            subtitle1={`Lorem ipsum dolor sit amet, consetetur`}
            subtitle2={`Lorem ipsum dolor sit amet, consetetur`}
            sectionCover={""}
            animationData={lottieJson}
            animatedImage={true}
            background={`#F4F8FF`}
            btnText={`See our plans`}
            boxShadow={false}
            extraText={false}
            isColored={false}
            titleColor={`#4C2E88`}
            viewBtn={true}
        />
    );
};

export default Section1;