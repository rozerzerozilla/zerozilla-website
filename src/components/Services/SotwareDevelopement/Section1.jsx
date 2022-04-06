import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
// import { sliderAreaStyle } from "../../helper";
import BookCallButton from "../../BookCallButton";
// import BreadCrumbs from "../BreadCrumbs";
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from "react-bootstrap";
import sectionCover from "../../../assets/images/soft-section-1-cover.webp";
import CommonSection1 from "../../Common/CommonSection1"
const Section1 = ({ handleFunction }) => {
    const [isMobile, setIsMobile] = useContext(AppContext);
    return (
        <CommonSection1
            fullbackground={true}
            handleFunction={handleFunction}
            title={`Software Development`}
            subtitle1={`We help you give shape to your innovative ideas.`}
            subtitle2={`Accelerate disruption within your organization with our custom software development services.`}
            sectionCover={sectionCover}
            btnText={`Let's talk`}
            boxShadow={true}
            isColored={false}
            isWhiteBtn={true}
            titleColor={`#fff`}
            viewBtn={true}
            whiteText={true}
        />
        // <Container fluid style={{
        //     backgroundImage: `url(${sectionCover})`,
        //     minHeight: "80vh",
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     color:"white"
        // }}>
        //     <Container fluid="lg">
        //         <Row>
        //             <Col xs="12" md="4">
        //                 <div className="d-flex flex-column align-items-start justify-content-center"
        //                     style={{ height: "100%" }}
        //                 >
        //                     <Fade bottom>
        //                         <span className="sliderHead2 mb-3" style={{ lineHeight: "48px" }}>
        //                             Software Development
        //                         </span>
        //                     </Fade>
        //                     <Fade bottom>
        //                         <div className="col-12">
        //                             <p
        //                                 className="sliderHead1 mb-0 no-underline"
        //                                 style={{ textAlign: isMobile && "center" }}
        //                             >
        //                                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero.
        //                             </p>
        //                         </div>
        //                     </Fade>
        //                 </div>
        //                 <div>
        //                     <Fade>
        //                         <BookCallButton
        //                             handleFunction={handleFunction}
        //                             text={`Let's talk`}
        //                             className={null}
        //                             isColored={false}
        //                             showImage={false}
        //                         />
        //                     </Fade>
        //                 </div>
        //             </Col>
        //             <Col xs="12" md="8"></Col>
        //         </Row>
        //     </Container>
        // </Container>
    );
};

export default Section1;
