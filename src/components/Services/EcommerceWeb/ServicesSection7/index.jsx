import React from "react";

import { AppContext } from "../../../../context/Context";
import Card from "./Card";

const strategy = [
    {
        title: "UX Process",
        description: "We craft intuitive, robust apps, with Pixel perfect designs that combine the best practices of a great UX.",
        icon : "web-strat-icon-1.svg",
    },
    {
        title: "Design",
        description: "Our designs follow the architecture and principles of HIG for iOS with no loss of clarity.",
        icon: "web-strat-icon-2.svg",
    },
    {
        title: "Development",
        description: "The development stage is safe in the hands of our professional app developers who understand every nuance of the process.",
        icon: "web-strat-icon-3.svg",
    },
    {
        title: "Testing",
        description: "We ensure that no glitches come in the way of creating the best experience for your customers.",
        icon: "web-strat-icon-4.svg",
    },
    {
        title: "Launch",
        description: "We assist you in the launch of your app by making sure that it meets the deadlines set by you.",
        icon: "web-strat-icon-5.svg",
    },
    {
        title: "Support",
        description: "Our support and assistance extend beyond the launch phase. We help you in maintaining the app in optimal condition.",
        icon: "web-strat-icon-6.svg",
    },

]

export default function () {
    const [isMobile] = React.useContext(AppContext);
    return (
        <div className="container mb-5">
            <div className="row my-3">
                <div className="col-xs-12 col-md-8 mx-auto">
                    <div className="black-head-section extra-bold">How do we develop the websites?</div>
                    <div>Our hard-earned experience guides us to develop solutions that interest, inspire and enrich your audience.</div>
                </div>
            </div>
            <div className="row">
                {strategy.map((ele, idx) => <div key={idx} className={`pe-3 py-3 ${isMobile ? 'col-12' : 'col-4'}`}>
                    <Card
                        title={ele.title}
                        icon={ele.icon}
                        description={ele.description}
                        number={`0${idx + 1}`}
                    />
                </div>)}
            </div>
        </div>
    )
}