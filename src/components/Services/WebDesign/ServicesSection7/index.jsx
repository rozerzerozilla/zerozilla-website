import React from "react";

import { AppContext } from "../../../../context/Context";
import Card from "./Card";

const strategy = [
    {
        title: "UX Process",
        description:"Well-developed UX experience to significantly improve customer satisfaction.",
        icon : "web-strat-icon-1.svg",
    },
    {
        title: "Design",
        description: "Interactive design that keeps your customers engaged.",
        icon: "web-strat-icon-2.svg",
    },
    {
        title: "Development",
        description: "User-friendly design interface with enhanced performance.",
        icon: "web-strat-icon-3.svg",
    },
    {
        title: "Testing",
        description: "Test accessibility, functionality and adaptability to ensure seamless performance.",
        icon: "web-strat-icon-4.svg",
    },
    {
        title: "Launch",
        description: "Brand strengthening and customer confidence building through flawless launch.",
        icon: "web-strat-icon-5.svg",
    },
    {
        title: "Support",
        description: "Ongoing maintenance and support to handle unforeseen events as your business evolves.",
        icon: "web-strat-icon-6.svg",
    },

]

export default function () {
    const [isMobile] = React.useContext(AppContext);
    return (
        <div className="container mb-5">
            <div className="row my-3">
                <div className="col-xs-12 col-md-10 mx-auto">
                    <div className="black-head-section extra-bold">A peek into our website development process!</div>
                </div>
                <div className="col-xs-12 col-md-8 mx-auto text-center">
                    <div>At Zerozilla, we follow a structured format with a clear line of thought to fine-tune your web design and development process.</div>
                </div>
                
            </div>
            <div className="row">
                {strategy.map((ele, idx) => <div key={idx} className={`pe-3 py-3 ${isMobile ? 'col-12' : 'col-4'}`}>
                    <Card
                        isMobile={isMobile}
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