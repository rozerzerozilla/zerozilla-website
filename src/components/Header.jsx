import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import appLogo from "../assets/icons/appLogo.png";
import { AppContext } from "../context/Context";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const history = useHistory();
  const [isMobile] = useContext(AppContext);
  const margin = !isMobile ? "70px" : "20px";
  return (
    <Navbar className="color-nav" variant="light" expand="lg">
      <Container style={{ marginRight: margin, marginLeft: margin }}>
        <Navbar.Brand
          onClick={() => history.go(0)}
          style={{ cursor: "pointer" }}
        >
          <img className="appLogo" src={appLogo} alt="appLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-menu-links">
          <Nav
            variant="pills"
            defaultActiveKey="/"
            className="nav-links justify-content-end"
            style={{ width: "100%", marginTop: isMobile && "20px" }}
          >
            <Nav.Link className="navMenuLinks" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="navMenuLinks" href="/about-us">
              About Us
            </Nav.Link>
            <NavDropdown title="Company" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1" href="/portfolio">
                Portfolio
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2" href="/portfolio/skill-mine">
                Skillmine
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="nav-dropdown">
              <NavDropdown.Item
                eventKey="4.1"
                href="/services/web-design-and-development"
              >
                Web Design & Development
              </NavDropdown.Item>

              <NavDropdown.Item
                eventKey="4.2"
                href="/services/custom-application-development"
              >
                Custom Application Development
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="4.3"
                href="/services/digital-marketing"
              >
                Digital Marketing
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="4.4"
                href="/services/search-engine-optimization"
              >
                Search Engine Optimization
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                eventKey="4.5"
                href="/services/social-media-marketing"
              >
                Social Media Marketing
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.6" href="/services/pay-per-click">
                Pay-Per Click
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.7" href="/services/lead-generation">
                Lead Generation Services
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Insights" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navMenuLinks" href="/contact-us">
              Contact Us
            </Nav.Link>
            <Nav.Link className="navMenuLinks" href="#other">
              <FaSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
