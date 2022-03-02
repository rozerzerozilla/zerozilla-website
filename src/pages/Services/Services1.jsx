import React from "react";
import Section3 from "../../components/Services/Web-Development/ServiceSection3";
import Section4 from "../../components/Services/Web-Development/ServiceSection4";
import Section6 from "../../components/Services/Web-Development/ServiceSection6";
import Section5 from "../../components/Services/Web-Development/ServiceSecton5";
import Section1 from "../../components/Services/Web-Development/ServicesSection1";
import Section2 from "../../components/Services/Web-Development/ServicesSection2";

const ServicePage1 = () => {
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

export default ServicePage1;
