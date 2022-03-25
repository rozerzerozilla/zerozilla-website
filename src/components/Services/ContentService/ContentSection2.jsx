import React, { useContext } from "react";
import sectionCover from "../../../assets/images/content-service-section2-cover.svg";
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
                        className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
                        style={
                            isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                        }
                    >
                        <Fade bottom>
                            <div className={`row col-12 ${isMobile && "m-0"}`}>
                                <p className="section3Head black extra-bold">
                                    The perfect content marketing mix to make you shine!
                                </p>
                                <p className="sectionContent">
                                    Content Marketing is considered to be a ‘pull’ mechanism, much preferred over the traditional ‘push’ ones that old-school promotional techniques were built around.<br /><br />
                                    So what is it that does the pulling? You guessed it! Content! <br /><br />
                                    Then what does Content Marketing do? It knows who to pull in, when and how, so it does! A Content Marketing Plan gives direction to the content making sure its valuable, steady and relevant. Then it distributes it, in just the right quantities, to just the right people, at just the right frequency. Over time, a defined audience emerges from this lot who can be driven to act with little or no persuasion. These actions can be to try, buy, join or tell. But they all finally result in profitable action.
                                </p>
                                <p className="sectionContent large bold secondary-color">
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
                                </ul>

                            </div>
                        </Fade>
                    </div>
                    <div
                        className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
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
