import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/android-ux-section1-cover.webp';

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`Android Game UX Design`}
            subtitle1={`Unique interactive gaming experience`}
            subtitle2={`Gaming apps that bring the best designs to life`}
            sectionCover={sectionCover}
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