import React, { useContext } from "react";
import sectionCover from "../../../assets/images/bots-section-2-cover.svg";
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';

const IOSSection3 = () => {
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
                                    Revolutionize your business with Bots apps!
                                </p>
                                <p className="sectionContent">
                                    Chatbots are revolutionizing customer support. The popularity of chatbots has gone up with people choosing to interact with them to find answers during emergency situations. You can take advantage of this revolution easily, with Zerozilla. Get a Bots App made for your company or brand to boost efficiency, create stronger customer relationships, assist in disseminating information and help initiate valuable two-way dialogues with your target audiences. We build, connect, deploy, and manage intelligent bots to interact naturally with your users via websites, apps, Skype, Slack, Facebook Messenger, and more. Sounds cool, right?
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    Get industry-specific chatbots designed by the experts! 
                                </p>
                                <p className="sectionContent">
                                    Zerozilla specializes in inventing and embedding programming languages, as well as incorporating smart features into human-like bots that imitate real-time conversations and automate high-frequency interactions.
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

export default IOSSection3;
