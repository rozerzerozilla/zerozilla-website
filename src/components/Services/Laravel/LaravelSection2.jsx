import React, { useContext } from "react";
import sectionCover from "../../../assets/images/laravel-section-2-cover.webp";
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';

const ContentServiceSection3 = () => {
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
                        className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
                        style={
                            isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                        }
                    >
                        <Fade bottom>
                            <div className={`row col-12 ${isMobile && "m-0"}`}>
                                <p className="section3Head black extra-bold">
                                Create innovative, enterprise-level applications with Laravel!
                                </p>
                                <p className="sectionContent">
                                    Laravel is a PHP-based web app framework that is free and open-source. Due to its quick development approach and
                                    MVC architectural pattern, it is favoured by developers. It offers stress-free coding.
                                    <br />
                                    At Zerozilla, you can find experts in delivering simple code for numerous bundles to create robust and
                                    alluring websites for diverse verticals of industry and domains. Our developers can develop Laravel
                                    PHP Framework suiting both small and large-scale projects.
                                    <br />
                                    Zerozilla offers the best Laravel development services, including developing web and mobile applications that
                                    are smooth, scalable, resilient, high-performance, and secure. We can provide you with dedicated Laravel developers
                                    to help you create high-end, feature-rich web applications. Our certified Laravel developers have worked across a
                                    wide range of businesses. Our strong team of Laravel developers and programmers, provide high end and reliable
                                    solutions at the most competitive rates.
                                    <br />
                                    We help a business to righteously achieve its
                                    underlying goals using outstanding offers of Laravel framework.
                                </p>
                                {/* <p className="sectionContent large bold secondary-color">
                                    We therefore:
                                </p>
                                <ul>
                                    <li className="sectionContent">
                                        Begin with Passion: We feel for your brand and drive it with passion
                                    </li>
                                    <li className="sectionContent">
                                        Create Error-free, Consumable Content: The key to any rocking content marketing gig
                                    </li>
                                    <li className="sectionContent">
                                        Grasp Like an Empath: Understand your audiences better than they understand themselves
                                    </li>
                                    <li className="sectionContent">
                                        Research like a Sleuth: Track competition, keep up with the latest industry statistics, predict the future
                                    </li>
                                    <li className="sectionContent">
                                        Master SEO and Analytics: Utilize all the wisdom we have on high ranking and inbound marketing
                                    </li>
                                    <li className="sectionContent">
                                        Be a Social Media Virtuoso: Posting becomes second nature with words, videos and graphics that are difficult to ignore, perfectly timed and seen at the right places
                                    </li>
                                </ul> */}

                            </div>
                        </Fade>
                    </div>
                    <div
                        className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
                        style={{
                            marginTop: "0px",
                            textAlign: isMobile ? "center" : "right",
                        }}
                    >
                        <Fade top>
                            <img
                                src={sectionCover}
                                alt="sectionVideo"
                                style={{ width: "100% " }}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentServiceSection3;
