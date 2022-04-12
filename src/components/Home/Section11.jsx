import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import { AppContext } from "../../context/Context";
import coverimage from "../../assets/images/career-home-cover.webp";
function Section11() {
    const [isMobile, setIsMobile] = React.useContext(AppContext);
  return (
      <Container fluid style={{backgroundImage:`url("${coverimage}")`}}>
          <div className="row py-4" style={{ color:"white"}}>
              <div className="col-12 text-center"
                  style={{ paddingLeft: isMobile && "25px" }}
              >
                  <p className="section3Head white mb-0">Be a Zillian Mind</p>
                  <p className="sectionContent">
                      Ready to unleash your expert thinking?
                  </p>
              </div>
              <div className={`d-flex align-items-center justify-content-center ${isMobile ? "col-12 mx-auto" : "col-2 mx-auto mt-2"}`}>
                  <Link to={{
                      pathname: "/career",
                      hash: "#job-applying",
                      search: "",
                      state: {},
                  }}>
                      <button className={`sliderBtns colored`}>
                          <span className={`sectionContent small`}>
                              Explore Jobs
                          </span>
                      </button>
                  </Link>
              </div>
          </div>
    </Container>
  )
}

export default Section11