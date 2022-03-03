import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import appLogo from "../assets/icons/appLogo.png";
import { AppContext } from "../context/Context";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {footerLink} from "../helper/footer";

import IconButton from '@material-ui/core/IconButton';

const Footer = ()=>{
    const history = useHistory();
    const [isMobile] = useContext(AppContext);
    const margin = !isMobile ? "70px" : "20px";
    return <footer>
        <Container maxWidth="lg" className="py-5">
            <Row className="pb-5 footer-bottom-divider" >
                <Col xs="12" lg="3" className="py-3 pe-4 footer-right-divider">
                    <Navbar.Brand
                        onClick={() => history.go(0)}
                        style={{ cursor: "pointer" }}
                        >
                        <img className="appLogo" src={appLogo} alt="appLogo" />
                    </Navbar.Brand>
                    <p className="sectionContent">
                        If there’s one thing we’ve learned about marketing in these times, is that ‘if it’s not on the web, it doesn’t really count!’ Out of the 7.7 billion people on earth, almost 4 billion have the means to access the internet.
                    </p>
                </Col>
                {footerLink.map((link, index)=><Col xs="12" lg="2" key={index + 'footer-link'} className="py-3 ps-3 footer-right-divider">
                    <Row>
                        <Col lg="12">
                            {link.title}
                        </Col>
                        {link.subList.map((subLink, i)=><Col lg="12" key={subLink.id}><Nav.Link href={subLink.href} className="footerLink">
                                {subLink.name}
                            </Nav.Link></Col>)}
                    </Row>
                </Col>)}
                <Col xs="12" lg="3" className="py-3 ps-3">
                    <p>Get In touch</p>
                    <p className="sectionContent">+91 9916585246</p>
                    <p className="sectionContent">info@zerozilla.com</p>
                    <p className="sectionContent">INDIA : <br/>
                        T1, 3rd Floor, Swastik Manandi Arcade Opp.Sheshadripuram police station, Sheshadripuram, Bengaluru, Karnataka 560020, India
                    </p>
                </Col>
            </Row>
            <br/>
            <Row className="pb-4 footer-bottom-divider">
                <Col xs="12" lg="4" className="py-md-2 footer-right-divider">
                    <h3>Social Media</h3>
                    <button className="footer-icon-btn">
                        <BsFacebook style={{fontSize:'30px'}}/>
                    </button>
                    <button className="footer-icon-btn">
                        <AiFillTwitterCircle style={{fontSize:'30px'}}/>
                    </button>
                    <button className="footer-icon-btn">
                        <BsLinkedin style={{fontSize:'30px'}}/>
                    </button>
                </Col>
                <Col xs="12" lg="8">
                    <Row className="align-items-center">
                        <Col xs="12" lg="6" className="px-md-5">
                            <h3>Subscribe</h3>
                            <p className="sectionContent">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </Col>
                        <Col xs="12" lg="6" className="ps-md-5">
                            <div className="footerInputWrapper">
                                <input placeholder="Enter Id" className="footerInput"/>
                                <button className="footerButton">Send</button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col xs="12" lg="6">
                    <p className="footerCopyright"><em>Copyright ©{new Date().getFullYear()-1}-{new Date().getDate()}, Zerozilla Infotech Pvt Ltd</em></p>
                </Col>
                <Col xs="12" lg="3">
                    <p className="sectionContent">Privacy Policy</p>
                </Col>
                <Col xs="12" lg="3">
                    <p className="sectionContent">Terms and Conditions</p>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer