import Section1 from "../components/About/AboutSection1";
import Section2 from "../components/About/AboutSection2";
import Section3 from "../components/About/AboutSection3";
import Section4 from "../components/About/AboutSection4";
import Section5 from "../components/About/AboutSection5";
import Section6 from "../components/About/AboutSection6";
import Section7 from "../components/About/AboutSection7";

const AboutPage = () => {
  return (
    <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};

export default AboutPage;
