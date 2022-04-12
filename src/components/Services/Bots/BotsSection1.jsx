import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/seo-section-1-cover.webp';
import * as lottieJson from "./bots-lottie.json";

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`Bots Application Devlopment`}
            subtitle1={`Streamline your customer interaction!`}
            subtitle2={`Transform the way your business interacts with customers!`}
            sectionCover={""}
            animationData={lottieJson}
            animatedImage={true}
            background={`#F4F8FF`}
            btnText={`Get a qoute`}
            boxShadow={false}
            extraText={false}
            isColored={false}
            titleColor={`#4C2E88`}
            viewBtn={true}
        />
    );
};

export default Section1;