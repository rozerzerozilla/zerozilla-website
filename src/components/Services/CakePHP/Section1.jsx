import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/cake-php-section-1-cover.svg';
const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`CakePHP Development`}
            subtitle1={`Your search ends HERE!`}
            subtitle2={`Get high-performing, scalable CakePHP service HERE!`}
            sectionCover={sectionCover}
            background={`#F4F8FF`}
            btnText={`Get a quote`}
            boxShadow={false}
            extraText={false}
            isColored={false}
            titleColor={`#4C2E88`}
            viewBtn={true}
        />
    );
};

export default Section1;