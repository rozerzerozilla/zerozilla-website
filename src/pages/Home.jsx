import React, { useState, useEffect } from "react";
import Section1 from "../components/Home/Section1";
import GoUp from "../components/GoUp";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Section5 from "../components/Home/Section5";
import SEOChecker from "../components/Home/SEOChecker";
import Section6 from "../components/Home/Section6";
import Section8 from "../components/Home/Section8";
import Section7 from "../components/Home/Section7";
const HomePage = () => {
  return (
    <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <SEOChecker />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
};

export default HomePage;
