import React from 'react'
import { Container } from 'react-bootstrap';
import { AppContext } from "../../../context/Context";
import { FiSquare } from 'react-icons/fi';
import CommonCard from "../../Common/CommonCard"

const services = [
    {
        id: 1,
        icon: "software-sec-3-icon-1.svg",
        title: "Requirement Assessment",
        description:"Requirement assessment refers to finding out the precise business requirement. We shape the application goals, complete features, target audience, and other similar information about the application in this stage. ",
    },
    {
        id: 1,
        icon: "software-sec-3-icon-1.svg",
        title: "Project Summary",
        description: "The project summary sums up the website's requirements. This stage serves as a reference point throughout the software development process. ",
    },
    {
        id: 1,
        icon: "software-sec-3-icon-1.svg",
        title: "Determining Required Resources",
        description: "The project planning stage also defines the software and other resource requirements for the website project. In this step, the needs of 3rd party media are identified. All of the resource requirements are then added to the budget of the project.",
    },
    {
        id: 1,
        icon: "software-sec-3-icon-1.svg",
        title: "Key performance goals",
        description: "The software planning stage also involves determining key performance goals. Budgeted costs, project deadlines, and page speed are some of the website design and advance goals that are set at this stage. ",
    },
    {
        id: 1,
        icon: "software-sec-3-icon-1.svg",
        title: "Competitor Analysis",
        description: "Competitor analysis is done to understand the type of audience, daily hits, load capability, security, and more. Other things that are considered important at this stage include visual branding, call to action, navigation, and layout.",
    },
]


export default function Section4() {
    const [isMobile] = React.useContext(AppContext);
  return (
      <Container fluid="lg" className="py-5 mb-3">
          <div className={`row `} sytle={{ height:"100%" }}>
              <div className={`mx-auto my-3 ${isMobile ? "col-12" : "col-8"}`}>
                  
                  <p className="section3Head black extra-bold text-center">
                      <span className="section3Head black" style={{ fontWeight: "600" }}>
                          A sneak peek into our Project Planning 
                      </span>
                  </p>
                  <p className="sectionContent text-center">
                      Project planning refers to defining goals and objectives of the overall web development project. This is the most important stage in the entire project. It is further divided into the following five parts.
                  </p>
              </div>
          </div>

          <div className="row mt-3">
              {services.map((ele, idx) => <div key={idx} className="col-xs-12 col-md-4 mb-4">
                  <CommonCard
                      image={ele.icon}
                      name={ele.title}
                      description={ele.description}
                      isMobile={isMobile}
                      background={"#EBE2FF"}
                      imageWidth={"50%"}
                      padding={"0px 20px"}
                  />
              </div>)}
          </div>
    </Container>
  )
}
