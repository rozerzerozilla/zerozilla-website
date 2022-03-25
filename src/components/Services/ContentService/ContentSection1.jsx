import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import * as lottieJson from "./content-lottie.json";

const ContentSection1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`Content Marketing Service`}
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

export default ContentSection1;