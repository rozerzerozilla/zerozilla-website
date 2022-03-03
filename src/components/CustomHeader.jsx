import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import appLogo from "../assets/icons/appLogo.png";
import { AppContext } from "../context/Context";
import { FaSearch, FaChevronUp } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {
  routes,
  marketingServices,
  businessServices,
  customServices,
  businessInsights,
  blogInsights,
  videosInsights,
} from "../helper/router";

const CustomHeader = () => {
  const menu = useRef(null);
  const history = useHistory();
  const [isMobile] = useContext(AppContext);
  const margin = !isMobile ? "70px" : "20px";
  const [openMobile, setMobileOpen] = useState(false);
  const [menukey, setMenuKey] = useState(null);
  const handleClickOutside = (event) => {
    if (menu.current && !menu.current.contains(event.target)) {
      setMobileOpen(false);
      setMenuKey(null)
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const handleMenuOpen = (e) => {
    setMobileOpen(prevState => !prevState)
  }
  const mobileMenu = <>
    <ul className={`navbar-menus mobile-menu px-4 py-3 ${openMobile ? ' show-menu' : ' hide-menu'}`} ref={menu}>
      <li onClick={()=>setMenuKey(null)}><NavLink to="/home">Home</NavLink></li>
      <li onClick={()=>setMenuKey(null)}><NavLink to="/about-us">About Us</NavLink></li>
      <li onClick={()=>setMenuKey(null)}><NavLink to="/home">Company</NavLink></li>
      <li onClick={(e) => menukey === 'services'? setMenuKey(null) : setMenuKey("services")}>
        <div className="d-flex align-items-center">
          <span className="pe-3">Servies</span><FaChevronUp />
        </div>
        <div className={`mobile-drop-menu show ${menukey === 'services' ? 'show':'hide'}`} >
          <Container style={{ width: '100%' }}>
            <Row>
              <Col xs="12" md="4">
                <h4 className="megaMenuSubheading">Web Design & Development</h4>
                {businessServices.map(service => <Col xs="12" key={service.id}>
                  <NavLink to={service.href}>
                    <div className="d-flex align-items-center py-3">
                      <div className="megaMenuIcons"><service.icon /></div>
                      <span className="ps-3">{service.subtitle}</span>
                    </div>
                  </NavLink>
                </Col>)}
              </Col>
              <Col xs="12" md="4">
                <h4 className="megaMenuSubheading">Custom Applications</h4>
                <Row>
                  <Col xs="12" md="6">
                    {customServices.slice(0, 6).map(service => <Col xs="12" key={service.id}>
                      <NavLink to={service.href}>
                        <div className="d-flex align-items-center py-3">
                          <div className="megaMenuIcons"><service.icon /></div>
                          <span className="ps-3">{service.subtitle}</span>
                        </div>
                      </NavLink>
                    </Col>)}

                  </Col>
                  <Col xs="12" md="6">
                    {customServices.slice(6, 12).map(service => <Col xs="12" key={service.id}>
                      <NavLink to={service.href}>
                        <div className="d-flex align-items-center py-3">
                          <div className="megaMenuIcons"><service.icon /></div>
                          <span className="ps-3">{service.subtitle}</span>
                        </div>
                      </NavLink>
                    </Col>)}
                  </Col>
                </Row>
              </Col>
              <Col xs="12" md="4">
                <h4 className="megaMenuSubheading">Marketing Services</h4>
                {marketingServices.map(service => <Col xs="12" key={service.id}>
                  <NavLink to={service.href}>
                    <div className="d-flex align-items-center py-3">
                      <div className="megaMenuIcons"><service.icon /></div>
                      <span className="ps-3">{service.subtitle}</span>
                    </div>
                  </NavLink>
                </Col>)}
              </Col>
            </Row>
          </Container>
        </div>
      </li>
      <li onClick={(e) => menukey === 'insights' ? setMenuKey(null) : setMenuKey("insights")}>
        <div className="d-flex align-items-center">
          <span className="pe-3">Insights</span><FaChevronUp />
        </div>
        <div className={`mobile-drop-menu show ${menukey === 'insights' ? 'show' : 'hide'}`}>
          <Container style={{ width: '100%' }}>
            <Row>
              <Col xs="12" md="4">
                <h4 className="megaMenuSubheading">Web Design & Development</h4>
                {businessServices.map(service => <Col xs="12" key={service.id}>
                  <NavLink to={service.href}>
                    <div className="d-flex align-items-center py-3">
                      <div className="megaMenuIcons"><service.icon /></div>
                      <span className="ps-3">{service.subtitle}</span>
                    </div>
                  </NavLink>
                </Col>)}
              </Col>
              <Col xs="12" md="4">
                <h4 className="megaMenuSubheading">Custom Applications</h4>
                <Row>
                  <Col xs="12" md="6">
                    {customServices.slice(0, 6).map(service => <Col xs="12" key={service.id}>
                      <NavLink to={service.href}>
                        <div className="d-flex align-items-center py-3">
                          <div className="megaMenuIcons"><service.icon /></div>
                          <span className="ps-3">{service.subtitle}</span>
                        </div>
                      </NavLink>
                    </Col>)}

                  </Col>
                  <Col xs="12" md="6">
                    {customServices.slice(6, 12).map(service => <Col xs="12" key={service.id}>
                      <NavLink to={service.href}>
                        <div className="d-flex align-items-center py-3">
                          <div className="megaMenuIcons"><service.icon /></div>
                          <span className="ps-3">{service.subtitle}</span>
                        </div>
                      </NavLink>
                    </Col>)}
                  </Col>
                </Row>
              </Col>
              <Col xs="12" md="4">
                <h4 className="megaMenuSubheading">Marketing Services</h4>
                {marketingServices.map(service => <Col xs="12" key={service.id}>
                  <NavLink to={service.href}>
                    <div className="d-flex align-items-center py-3">
                      <div className="megaMenuIcons"><service.icon /></div>
                      <span className="ps-3">{service.subtitle}</span>
                    </div>
                  </NavLink>
                </Col>)}
              </Col>
            </Row>
          </Container>
        </div>
      </li>
      <li><NavLink to="/contact-us">Contact</NavLink></li>
      <li><NavLink to="/career">Career</NavLink></li>
    </ul>
  </>;

  /**------------- Desktop Menu ------------------**/
  const desktopMenu = (
    <>
      <ul className="navbar-menus desktop-menu">
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/home">Company</NavLink></li>
        
        <li className="dropdown-list">
          <span className="pe-2">Servies</span><FaChevronUp />
          <div className="dropdown-menus">
            <Container style={{ width: '100%' }}>
              <Row>
                <Col xs="12" md="4">
                  <h4 className="megaMenuSubheading">Web Design & Development</h4>
                  {businessServices.map(service => <Col xs="12" key={service.id}>
                    <NavLink to={service.href}>
                      <div className="d-flex align-items-center py-3">
                        <div className="megaMenuIcons"><service.icon /></div>
                        <span className="ps-3">{service.subtitle}</span>
                      </div>
                    </NavLink>
                  </Col>)}
                </Col>
                <Col xs="12" md="4">
                  <h4 className="megaMenuSubheading">Custom Applications</h4>
                  <Row>
                    <Col xs="12" md="6">
                      {customServices.slice(0, 6).map(service => <Col xs="12" key={service.id}>
                        <NavLink to={service.href}>
                          <div className="d-flex align-items-center py-3">
                            <div className="megaMenuIcons"><service.icon /></div>
                            <span className="ps-3">{service.subtitle}</span>
                          </div>
                        </NavLink>
                      </Col>)}
                      
                    </Col>
                    <Col xs="12" md="6">
                      {customServices.slice(6, 12).map(service => <Col xs="12" key={service.id}>
                        <NavLink to={service.href}>
                          <div className="d-flex align-items-center py-3">
                            <div className="megaMenuIcons"><service.icon /></div>
                            <span className="ps-3">{service.subtitle}</span>
                          </div>
                        </NavLink>
                      </Col>)}
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" md="4">
                  <h4 className="megaMenuSubheading">Marketing Services</h4>
                  {marketingServices.map(service => <Col xs="12" key={service.id}>
                    <NavLink to={service.href}>
                      <div className="d-flex align-items-center py-3">
                        <div className="megaMenuIcons"><service.icon /></div>
                        <span className="ps-3">{service.subtitle}</span>
                      </div>
                    </NavLink>
                  </Col>)}
                </Col>
              </Row>
            </Container>
          </div>
        </li>
        <li className="dropdown-list">
          <span className="pe-2">Insights</span><FaChevronUp />
          <div className="dropdown-menus">
            <Container style={{ width: '100%' }}>
              <Row>
                <Col xs="12" md="4">
                  <h4 className="megaMenuSubheading">Portfolios</h4>
                  {businessInsights.map(service => <Col xs="12" key={service.id}>
                    <NavLink to={service.href}>
                      <div className="d-flex align-items-center py-3">
                        <div className="megaMenuIcons"><service.icon /></div>
                        <span className="ps-3">{service.subtitle}</span>
                      </div>
                    </NavLink>
                  </Col>)}
                </Col>
                <Col xs="12" md="4">
                  <h4 className="megaMenuSubheading">Blogs</h4>
                  <Col xs="12" md="6">
                    {blogInsights.slice(0, 6).map(service => <Col xs="12" key={service.id}>
                      <NavLink to={service.href}>
                        <div className="d-flex align-items-center py-3">
                          <div className="megaMenuIcons"><service.icon /></div>
                          <span className="ps-3">{service.subtitle}</span>
                        </div>
                      </NavLink>
                    </Col>)}
                  </Col>
                </Col>
                <Col xs="12" md="4">
                  <h4 className="megaMenuSubheading">Videos</h4>
                  {videosInsights.map(service => <Col xs="12" key={service.id}>
                    <NavLink to={service.href}>
                      <div className="d-flex align-items-center py-3">
                        <div className="megaMenuIcons"><service.icon /></div>
                        <span className="ps-3">{service.subtitle}</span>
                      </div>
                    </NavLink>
                  </Col>)}
                </Col>
              </Row>
            </Container>
          </div>
        </li>
        <li><NavLink to="/contact-us">Contact</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
      </ul>
    </>
  )
  return (<>
    <header>
      <Container maxWidth="md">
        <nav>
          <div>
            <img className="appLogo" src={appLogo} alt="appLogo" />
          </div>
          
          <>
            {isMobile ? mobileMenu : desktopMenu}
            <FaSearch/>
          </>

          <>{isMobile ? <div className="hamicon" onClick={handleMenuOpen}>
            {openMobile ? <AiOutlineClose/> : <AiOutlineMenu/>}
          </div> : null}
          </>
          {/* <>{isMobile ? <div className="hamicon">
            <div className="menu-icon">
              <input className="menu-icon__cheeckbox" type="checkbox" value={openMobile} onChange={handleMenuOpen}/>
              <div>
                <span></span>
                <span></span>
              </div>
            </div>
          </div> : null}
          </> */}
        </nav>
      </Container>
    </header>
  </>);
};

export default CustomHeader;
