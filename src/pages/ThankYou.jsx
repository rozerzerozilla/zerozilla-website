import React from "react";
import { NavLink} from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

// logo
import appLogo from "../assets/icons/appLogo.png";

const WebDevlopment = () => {
    return (
        <div className="thanking-page">
            <Container fluid="md">
                <Row className="align-items-center">
                    <Col xs="12">
                        <h1>Thank You !</h1>
                    </Col>
                </Row>
                
                <Row className="align-items-center">
                    <Col xs="12">
                        <img src={appLogo} alt="logo" title="Zerozilla" width="200px" />
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <p>Dear , Thanks for showing interest in Zerozilla services. We will get back to you at the earliest.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12"><NavLink to="/" className="sliderBtns colored" style={{textDecoration:"none"}}>Home</NavLink></Col>
                </Row>
            </Container>
        </div>
    );
};

export default WebDevlopment;
