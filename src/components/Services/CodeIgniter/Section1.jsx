import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/nodejs-section-1-cover.svg';
const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`Codeigniter Development`}
            subtitle1={`High quality digital solutions!`}
            subtitle2={`Explore the elegant framework of CodeIgniter!`}
            sectionCover={"https://cdn.worldvectorlogo.com/logos/codeigniter.svg"}
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