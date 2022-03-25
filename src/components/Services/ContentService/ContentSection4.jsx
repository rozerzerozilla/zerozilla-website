import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { customWebDevCard } from "../../../helper/services";
import BookCallButton from "../../BookCallButton";
import Fade from 'react-reveal/Fade';

const IOSSection4 = () => {
    const [isMobile] = useContext(AppContext);
    return (
        <div
            className="row short-section"
            style={{ margin: 0, padding: 0 }}
        >
            <div className="col-12 pb-1 pt-4 text-center" >
                <p className="sectionHead3">See our plans that matches your need</p>
            </div>
            <div className="col-12 pt-1 pb-4 align-items-center justify-content-center d-flex">
                <BookCallButton
                    text={`Select Plan`}
                    className={null}
                    isColored={false}
                    showImage={false}
                    handleFunction={() => { }}
                />
            </div>
        </div>
    );
};

export default IOSSection4;
