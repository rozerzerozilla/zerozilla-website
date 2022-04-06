import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import appLogo from "../assets/icons/logoWhite.svg";
import { AppContext } from "../context/Context";
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram, BsYoutube, BsPinterest } from "react-icons/bs";
import { footerLink } from "../helper/footer";
import Fade from 'react-reveal/Fade';
import nasscom from "../assets/icons/nasscom.svg";
import iso from "../assets/icons/iso.svg";

const Footer = ()=>{
    const history = useHistory();
    const [isMobile] = useContext(AppContext);
    const margin = !isMobile ? "70px" : "20px";
    return <footer>
        <Fade>
        <Container fluid="lg" className="pt-5 pb-2">
            <Row className="pb-3 footer-bottom-divider" style={{color:"white"}}>
                <Col xs="12" lg="3" className="pt-3 pe-4 footer-right-divider">
                    <Navbar.Brand
                        onClick={() => history.go(0)}
                        style={{ cursor: "pointer" }}
                        >
                        <img className="appLogo" src={appLogo} alt="appLogo" />
                    </Navbar.Brand>
                    <p className="mt-4">
                        If there’s one thing we’ve learned about marketing in these times, is that ‘if it’s not on the web, it doesn’t really count!’ Out of the 7.7 billion people on earth, almost 4 billion have the means to access the internet.
                    </p>
                        <div className="d-flex w-100 justify-content-between align-items-center">
                            <img src={nasscom}
                                 width={"200px"}/>
                            <img  width={"50px"}
                                src={iso}
                            />
                    </div>
                </Col>
                {footerLink.map((link, index)=><Col xs="12" lg="2" key={index + 'footer-link'} className="pt-3 ps-3 footer-right-divider">
                    <Row>
                        <Col lg="12">
                            <h3 style={{color:"white"}}>{link.title}</h3>
                        </Col>
                        {link.subList.map((subLink, i)=><Col lg="12" key={subLink.id}><Nav.Link href={subLink.href} className="footerLink">
                                {subLink.name}
                            </Nav.Link></Col>)}
                    </Row>
                </Col>)}
                    <Col xs="12" lg="3" className="pt-3 ps-3">
                        <h3 style={{color:"white"}}>Get In touch</h3>
                        <p >+91 9916585246</p>
                        <p>info@zerozilla.com</p>
                    <div className="d-flex flex-column w-100">
                        <div className="w-100">
                            <p >#1<br />
                                T1, 3rd Floor, Swastik Manandi Arcade Opp.Sheshadripuram police station, Sheshadripuram, Bengaluru, Karnataka 560020, India
                            </p>
                        </div> 
                        <div className="w-100">
                            <p >#2<br />
                                Silver Spirit Tech. Park
                                WAP Factory Rd, Meenakunte, Hebbal Industrial Estate, Hebbal, Ilavala Hobli, Karnataka 570016
                            </p>
                            </div> 
                            <div className="w-100">
                                <p >#3<br />
                                    Matawan NJ 07747,USA
                                </p>
                        </div> 
                            
                    </div>
                </Col>
            </Row>
            <br/>
            <Row className="pb-4 footer-bottom-divider">
                <Col xs="12" lg="4" className="py-md-2 footer-right-divider">
                    <h3 style={{ color: "white" }}>Zerozilla social</h3>
                    <a href="https://www.facebook.com/Zerozilladigitalagency/" target="_blank">
                        <button className="footer-icon-btn">
                            <BsFacebook style={{ fontSize: '24px' }} />
                        </button>
                    </a>
    
                        <a href="https://twitter.com/Zerozilla_com" target="_blank">
                        <button className="footer-icon-btn">
                            <BsTwitter style={{ fontSize: '24px' }} />
                        </button>
                    </a>
                
                        <a href="https://www.linkedin.com/company/zerozillaofficial" target="_blank">
                        <button className="footer-icon-btn">
                            <BsLinkedin style={{ fontSize: '24px' }} />
                        </button>
                    </a>
                
                        <a href="https://www.instagram.com/zerozillaofficial/" target="_blank">
                        <button className="footer-icon-btn">
                            <BsInstagram style={{ fontSize: '24px' }} />
                        </button>
                    </a>
                
                        <a href="https://www.youtube.com/channel/UCnvBj9lC1P_j_46FEhqsqMg" target="_blank">
                        <button className="footer-icon-btn">
                            <BsYoutube style={{ fontSize: '24px' }} />
                        </button>
                    </a>
                
                        <a href="https://in.pinterest.com/zerozillaofficial/" target="_blank">
                        <button className="footer-icon-btn">
                            <BsPinterest style={{ fontSize: '24px' }} />
                        </button>
                    </a>
                </Col>
                <Col xs="12" lg="8">
                    <Row className="align-items-center">
                        <Col xs="12" lg="6" className="px-md-5">
                            <h3 style={{color:"white"}}>Subscribe</h3>
                            <p >Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </Col>
                        <Col xs="12" lg="6" className="ps-md-5">
                            <div className="footerInputWrapper">
                                <input placeholder="Email" className="footerInput"/>
                                <button className="footerButton">Send</button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="pt-2">
                <Col xs="12" lg="6">
                    <p className="footerCopyright"><em>Copyright ©{new Date().getFullYear()}, Zerozilla Infotech Pvt Ltd</em></p>
                </Col>
                <Col xs="12" lg="3">
                    <p >Privacy Policy</p>
                </Col>
                <Col xs="12" lg="3">
                    <p >Terms and Conditions</p>
                </Col>
            </Row>
            </Container>
        </Fade>
    </footer>
}

export default Footer