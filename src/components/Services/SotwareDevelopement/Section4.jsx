import React from 'react'
import { Container } from 'react-bootstrap';
import { AppContext } from "../../../context/Context";
import { FiSquare } from 'react-icons/fi';


const services = [
    {
        id: 1,
        icon: <FiSquare style={{fontSize:"20px", fontWeight:"800"}}/>,
        title: "Requirement Assessment",
        description:"Requirement assessment refers to finding out the precise business requirement. This includes shaping the application goals, complete features, target audience, and other similar information about the application.",
    },
    {
        id: 1,
        icon: <FiSquare style={{ fontSize: "20px", fontWeight: "800" }} />,
        title: "Project Summary",
        description: "Project summary sums up the website's requirements. It serves as a reference point throughout the web development process and the document is typically concise. ",
    },
    {
        id: 1,
        icon: <FiSquare style={{ fontSize: "20px", fontWeight: "800" }} />,
        title: "Determining Required Resources",
        description: "The project planning stage also defines the software and other resource requirements for the website project. In this step, the needs of 3rd party media is identified. All of the resource requirements is then added to the budget of the project.",
    },
    {
        id: 1,
        icon: <FiSquare style={{ fontSize: "20px", fontWeight: "800" }} />,
        title: "Key performance goals",
        description: "The software planning stage also involves determining key performance goals. Budgeted costs, project deadlines, and page speed are some of the website design and advance goals that are set at this stage. ",
    },
    {
        id: 1,
        icon: <FiSquare style={{ fontSize: "20px", fontWeight: "800" }} />,
        title: "Competitor Analysis",
        description: "A competitor analysis is done. The type of audience, daily hits, load capability, security etc. are thought through. Other things that are considered important at this stage include visual branding, call to action, navigation, and layout.",
    },
]


export default function Section4() {
    const [isMobile] = React.useContext(AppContext);
  return (
      <Container fluid="lg" className="py-5 mb-3">
          <div className={`row `}>
              <div className={`mx-auto my-3 ${isMobile ? "col-12" : "col-8"}`}>
                  
                  <p className="section3Head black extra-bold text-center">
                      <span className="section3Head black" style={{ fontWeight: "600" }}>
                          How do we do the Project Planning?
                      </span>
                  </p>
                  <p className="sectionContent text-center">
                      Project planning refers to defining goals and objectives of the overall web development project. This is the most important stage in the entire project. It is further divided into the following five parts.
                  </p>
              </div>
          </div>

          <div className="row mt-3">
              {services.map((ele, idx) => <div key={idx} className="col-xs-12 col-md-4">
                  <div className="row p-2">
                      <div className="col-3 d-flex flex-row-reverse">
                          {ele.icon}
                      </div>
                      <div className="col-9">
                          <div className="12 mb-2" style={{ fontSize:"18px", fontWeight:"700" }}>{ele.title}</div>
                          <div className="12">{ele.description}</div>
                    </div>
                  </div>
              </div>)}
          </div>
    </Container>
  )
}
