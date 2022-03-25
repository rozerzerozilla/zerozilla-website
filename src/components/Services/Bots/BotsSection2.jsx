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
                                    Need BOTs App? Yes, it is possible!
                                </p>
                                <p className="sectionContent">
                                    Chatbots are revolutionizing customer support. By 2029, chatbots will be indistinguishable from humans predicts Ray Kurzweil of Google.In 2019, people are already more open to communicating with chatbots. In fact, 63% of people say that would message an online chatbot, especially for answers needed in an emergency.Taking advantage of this revolution is easy. Get a Bots App made for your company or brand. It will boost efficiency, create stronger customer relationships, assist in disseminating information and help initiate valuable two-way dialogues with your target audiences.We build, connect, deploy, and manage intelligent bots to interact naturally with your users via websites, apps, Skype, Slack, Facebook Messenger and more. But you pay only for what you use.
                                </p>
                                <p className="sectionContent large bold secondary-color">
                                    Our e-commerce mobile apps are Android and iOS based.
                                </p>
                                <p className="sectionContent">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
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
