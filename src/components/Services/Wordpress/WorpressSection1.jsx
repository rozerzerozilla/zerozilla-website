import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import * as lottieJson from "./wordpress-lottie.json";

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`WordPress e-Commerce Development`}
            subtitle1={`Add momentum to your business!`}
            subtitle2={`Wordpress service to set your growth curve high!`}
            sectionCover={""}
            animationData={lottieJson}d

            
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