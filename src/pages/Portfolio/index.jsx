import React from "react";
import Section1 from "../../components/Portfolio/PortfolioSection1";
import Section2 from "../../components/Portfolio/PortfolioSection2";
import Section3 from "../../components/Portfolio/PortfolioSection3";
import Section4 from "../../components/Portfolio/PortfolioSection4";
import Section5 from "../../components/Portfolio/PortfolioSection5";
import Section6 from "../../components/Portfolio/PortfolioSection6";

const PortfolioPage = () => {
  return (
    <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default PortfolioPage;
