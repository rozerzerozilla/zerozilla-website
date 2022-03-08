import React, { useContext } from "react";
import sectionCover from "../../../assets/images/seo-section-3-cover.png";
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';

const AWSSection3 = () => {
    const [isMobile] = useContext(AppContext);
    return (
        <div className="row Home-area3" style={{ margin: 0, padding: 0 }}>
            <div
                className={`col-12 Home-main-area3`}
                style={{
                    paddingLeft: !isMobile ? "70px" : "15px",
                    paddingRight: !isMobile && "70px",
                }}
            >
                <div className="row">
                    <div
                        className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
                        style={
                            isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                        }
                    >
                        <Fade bottom>
                            <div className={`row col-12 ${isMobile && "m-0"}`}>
                                <p className="section3Head black extra-bold">
                                    Specialized AWS Cloud facilities designed to secure your cloud experience
                                </p>
                                <p className="sectionContent">
                                    Thinking about how to scale up your business and handle the
                                    immense workload? Wondering if an ideal cloud infrastructure
                                    is a far-fetched dream? No worries! Whether you want to start
                                    a new operation or revamp your existing tech infrastructure,
                                    we at Zerozilla can enable optimum functionality and seamless
                                    data management for you!
                                </p>
                                <p className="sectionContent">
                                    We offer access to the best cloud infrastructure with our
                                    AWS managed services and solutions. As your company grows,
                                    the stake of technology increases. Isn’t it? We understand and
                                    fine-tune ourselves according to this. Through specialized cloud services,
                                    our professionals handle the latest technology of Big data and
                                    facilitate seamless computing.
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    Secure your tools and cloud infrastructure with us!
                                </p>
                                <p className="sectionContent">
                                    The productive and timely functioning of secure business
                                    assets is a crucial factor to have an edge above the rest. 
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    In addition to this comes, 
                                </p>
                                <ul>
                                    <li>AWS architecture </li>
                                    <li>AWS migrations</li>
                                    <li>AWS cloud management</li>
                                </ul>
                                <p className="sectionContent">
                                    With the ideal cloud services, you can scale up your business and migrate, manage and maintain your cloud infrastructure easily. 
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div
                        className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
                        style={{
                            marginTop: isMobile && "40px",
                            textAlign: isMobile ? "center" : "right",
                        }}
                    >
                        <Fade top>
                            <img
                                src={sectionCover}
                                alt="sectionVideo"
                                style={{ width: "90% " }}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AWSSection3;
