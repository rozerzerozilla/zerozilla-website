import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import * as lottieJson from "./branding-lottie.json";

const BrandingSection1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`Branding Services`}
            subtitle1={`Establish your digital presence.`}
            subtitle2={`Build a brand identity. Stand apart!`}
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

export default BrandingSection1;