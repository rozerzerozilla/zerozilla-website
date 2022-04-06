import React from "react";

import { AppContext } from "../../../../context/Context";
import Card from "./Card";

const strategy = [
    {
        title: "UX Process",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
        icon : "web-strat-icon-1.svg",
    },
    {
        title: "Design",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
        icon: "web-strat-icon-2.svg",
    },
    {
        title: "Development",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
        icon: "web-strat-icon-3.svg",
    },
    {
        title: "Testing",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
        icon: "web-strat-icon-4.svg",
    },
    {
        title: "Launch",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
        icon: "web-strat-icon-5.svg",
    },
    {
        title: "Support",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
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
                    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div>
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