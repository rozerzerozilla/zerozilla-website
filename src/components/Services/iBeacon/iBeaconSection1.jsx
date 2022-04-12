import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/iBeacon-section1-cover.svg';

const Section1 = ({handleFunction}) => {

    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`iBeacon Application Development`}
            subtitle1={`Level up your customer interactions!`}
            subtitle2={`Unlock the power of iBeacon!`}
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