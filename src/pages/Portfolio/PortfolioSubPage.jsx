import React from "react";
import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import Section1 from "../../components/Clients/SkillMine/SkillMineSection1";
import Section2 from "../../components/Clients/SkillMine/SkillMineSection2";
import Section3 from "../../components/Clients/SkillMine/SkillMineSection3";
import Section4 from "../../components/Clients/SkillMine/SkillMineSection4";
import Section5 from "../../components/Clients/SkillMine/SkillMineSection5";
import Section6 from "../../components/Clients/SkillMine/SkillMineSection6";
import Section7 from '../../components/Clients/SkillMine/SkillMineSection7';

const PortfolioSubPage = () => {
  return (
    <>
      <CustomHeader/>
        <div
          className="container-fluid main"
          style={{ margin: 0, padding: 0 }}
        >
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
      </div>
      <Footer/>
      </>);
}

export default PortfolioSubPage;