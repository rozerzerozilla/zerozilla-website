import React, { useContext } from "react";
import sectionCover from "../../../assets/images/wordpress-section-2-cover.png";
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
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                                </p>
                                <p className="sectionContent">
                                    WordPress is an open source website creation tool written using PHP scripting language. It can also be utilized in creating an e-commerce platform which is hosted in the cloud. The WooCommerce plugin is essentially used for creating an e-commerce storefront using WordPress. Being based on WordPress,the e-commerce platforms are highly customizable, reliable, fast and secure. After all these years, WordPress has grown to be a powerful Content Management System (CMS) and also supports e-commerce websites with ease. The WordPress e-commerce solutions development is developer friendly and easy to comprehend. Being feature-rich, flexible and customizable, the WordPress e-commerce platform has enormous potential for the creativity of developers. We at ZeroZilla, start the e-commerce development using WordPress by laying a solid foundation of WordPress CMS providing effective management of media, content, database and user information. With strong security concerns, we use only PCI compliant WordPress plugins for developing shopping cart and other features. Our WordPress based e-commerce solutions are equipped with the highest security standards giving a protected shopping experience to your online consumers.
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
