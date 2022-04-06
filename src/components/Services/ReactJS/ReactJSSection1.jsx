import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import animationData from "./react-logo.json"
const Section1 = ({ handleFunction }) => {
     
 
    return (
        <CommonSection1
            handleFunction={handleFunction}
            // animatedImage={true}
            // animationData={animationData}
            title={`ReactJS Application`}
            subtitle1={`Get interactive with ReactJS!`}
            subtitle2={`Let us help you with data - intensive web apps!`}
            sectionCover={"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"}
            background={`#F4F8FF`}
            btnText={`Get started!`}
            boxShadow={false}
            extraText={false}
            isColored={false}
            titleColor={`#4C2E88`}
            viewBtn={true}
        />
    );
};

export default Section1;
