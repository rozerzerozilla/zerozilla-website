import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Tooltip } from 'antd';
import appLogo from "../assets/icons/applogo.svg";
import { AppContext } from "../context/Context";
import { FaSearch, FaChevronUp, FaUser, FaTeamspeak, FaSquare } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {
  routes,
  marketingServices,
  businessServices,
  customServices,
  portfolioInsights,
  blogInsights,
  videosInsights,
  cloudServices,
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
      <li onClick={() => setMenuKey(null)}>
        <div className="d-flex align-items-center">
          <span className="pe-3">Company</span><FaChevronUp />
        </div>
        <div className={`mobile-drop-menu show ${menukey === 'services' ? 'show' : 'hide'}`} >
          <Container style={{ width: '100%' }}>
            <Row>
              <Col xs="12">
                <NavLink to={"/about-us"}
                  className={isActive =>
                    "subnavlink" + (isActive ? " active-subnavlink" : "")
                  }
                  isActive={(match, location) => {
                    if (!match) {
                      return false;
                    }
                    return location.pathname === '/about-us'
                  }}
                >
                  <div className="d-flex align-items-center py-2">
                    <div className="megaMenuIcons"><FaUser /></div>
                    <span className="ps-3">About Us</span>
                  </div>
                </NavLink>
              </Col>
              <Col xs="12">
                <a href={"/about-us#journey"}
                  className={"subnavlink"}
                >
                  <div className="d-flex align-items-center py-2">
                    <div className="megaMenuIcons"><FaUser /></div>
                    <span className="ps-3">Journey</span>
                  </div>
                </a>
              </Col>
              <Col xs="12">
                <a href={"/about-us#ourteam"}
                  className={"subnavlink"}
                >
                  <div className="d-flex align-items-center py-2">
                    <div className="megaMenuIcons"><FaTeamspeak /></div>
                    <span className="ps-3">Our Team</span>
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </li>
      <li onClick={(e) => menukey === 'services'? setMenuKey(null) : setMenuKey("services")}>
        <div className="d-flex align-items-center">
          <span className="pe-3">Servies</span><FaChevronUp />
        </div>
        <div className={`mobile-drop-menu show ${menukey === 'services' ? 'show':'hide'}`} >
          <Container style={{ width: '100%' }}>
            <Row>
              <Col xs="12" md="3">
                <h4 className="megaMenuSubheading">Web Application</h4>
                {businessServices.map(service => <Col xs="12" key={service.id}>
                  <NavLink to={service.href}>
                    <div className="d-flex align-items-center py-3">
                      <div className="megaMenuIcons"><service.icon /></div>
                      <span className="ps-3">{service.subtitle}</span>
                    </div>
                  </NavLink>
                </Col>)}
              </Col>
              <Col xs="12" md="3">
                <h4 className="megaMenuSubheading">Mobile Applications</h4>
                {customServices.slice(0, 6).map(service => <Col xs="12" key={service.id}>
                  <NavLink to={service.href}>
                    <div className="d-flex align-items-center py-3">
                      <div className="megaMenuIcons"><service.icon /></div>
                      <span className="ps-3">{service.subtitle}</span>
                    </div>
                  </NavLink>
                </Col>)}
                {/* <Row>
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
                </Row> */}
              </Col>
              <Col xs="12" md="3">
                <h4 className="megaMenuSubheading">Cloud Service</h4>
                {cloudServices.map(service => <Col xs="12" key={service.id}>
                  <NavLink to={service.href}>
                    <div className="d-flex align-items-center py-3">
                      <div className="megaMenuIcons"><service.icon /></div>
                      <span className="ps-3">{service.subtitle}</span>
                    </div>
                  </NavLink>
                </Col>)}
              </Col>
              <Col xs="12" md="3">
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
                <h4 className="megaMenuSubheading">Portfolios</h4>
                {portfolioInsights.map(service => <Col xs="12" key={service.id}>
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
  </>;

  /**------------- Desktop Menu ------------------**/
  const desktopMenu = (
    <>
      <ul className="navbar-menus desktop-menu">
        <li>
          <NavLink to="/"
            className={isActive =>
              "navlink" + (isActive ? " active-navlink" : "")
            }
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              return location.pathname === '/'
            }}
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/about-us" 
            className={isActive =>
              "navlink" + (isActive ? " active-navlink" : "")
            }
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              return location.pathname === '/about-us'
            }}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/company"
            className={isActive =>
              "navlink" + (isActive ? " active-navlink" : "")
            }
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              return location.pathname === '/company'
            }}
          >
            Company
          </NavLink>
        </li> */}
        <li className="dropdown-list">
          <NavLink to="#" className="pe-2 navlink"><span>Company</span> <FaChevronUp className="drop-arrow"/></NavLink>
          <div className="dropdown-menus">
            <Container style={{ width: '100%' }}>
              <Row>
                <Col xs="12">
                  <NavLink to={"/about-us"}
                    className={isActive =>
                    "subnavlink" + (isActive ? " active-subnavlink" : "")
                  }
                    isActive={(match, location) => {
                      if (!match) {
                        return false;
                      }
                      return location.pathname === '/about-us'
                    }}
                  >
                    <div className="d-flex align-items-center py-2">
                      <div className="megaMenuIcons"><FaUser/></div>
                      <span className="ps-3">About Us</span>
                    </div>
                  </NavLink>
                </Col>
                <Col xs="12">
                  <a href={"/about-us#journey"}
                    className={"subnavlink"}
                  >
                    <div className="d-flex align-items-center py-2">
                      <div className="megaMenuIcons"><FaUser /></div>
                      <span className="ps-3">Journey</span>
                    </div>  
                  </a>
                </Col>
                <Col xs="12">
                  <a href={"/about-us#ourteam"}
                    className={"subnavlink"}
                  >
                    <div className="d-flex align-items-center py-2">
                      <div className="megaMenuIcons"><FaTeamspeak /></div>
                      <span className="ps-3">Our Team</span>
                    </div>
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </li>
        
        <li className="dropdown-list">
          <NavLink to="#" className="pe-2 navlink"><span>Solutions</span> <FaChevronUp className="drop-arrow"/></NavLink>
          <div className="dropdown-menus" style={{width:"1300px", right:0}}>
            <Container style={{ width: '100%' }}>
              <Row>
                <Col xs="12" md="4">
                  <NavLink to={"/web-application"}><h4 className="megaMenuSubheading">Services</h4></NavLink>
                  {businessServices.map(service => <Col xs="12" key={service.id}>
                    <NavLink to={service.href}
                      className={isActive =>
                        "subnavlink" + (isActive ? " active-subnavlink" : "")
                      }
                      isActive={(match, location) => {
                        if (!match) {
                          return false;
                        }
                        return location.pathname === service.href
                      }}
                    >
                      <div className="d-flex align-items-center py-2">
                        <div className="megaMenuIcons"><service.icon /></div>
                        <span className="ps-3">{service.subtitle}</span>
                      </div>
                    </NavLink>
                  </Col>)}
                </Col>
                <Col xs="12" md="4">
                  <NavLink to={"/mobile-app-development"}><h4 className="megaMenuSubheading">Technologies</h4></NavLink>
                  <Row>
                    <Col xs="12" md="6">
                      {customServices.slice(0,5).map(service => <Col xs="12" key={service.id}>
                        <NavLink to={service.href}
                          className={isActive =>
                            "subnavlink" + (isActive ? " active-subnavlink" : "")
                          }
                          isActive={(match, location) => {
                            if (!match) {
                              return false;
                            }
                            return location.pathname === service.href
                          }}
                        >
                          <div className="d-flex align-items-center py-2">
                            <div className="megaMenuIcons"><service.icon /></div>
                            <span className="ps-3">{service.subtitle}</span>
                          </div>
                        </NavLink>
                      </Col>)}
                    </Col>

                    <Col xs="12" md="6">
                      {customServices.slice(5, 10).map(service => <Col xs="12" key={service.id}>
                        <NavLink to={service.href}
                          className={isActive =>
                            "subnavlink" + (isActive ? " active-subnavlink" : "")
                          }
                          isActive={(match, location) => {
                            if (!match) {
                              return false;
                            }
                            return location.pathname === service.href
                          }}
                        >
                          <div className="d-flex align-items-center py-2">
                            <div className="megaMenuIcons"><service.icon /></div>
                            <span className="ps-3">{service.subtitle}</span>
                          </div>
                        </NavLink>
                      </Col>)}
                    </Col>
                  </Row>
                </Col>
                {/* <Col xs="12" md="4">
                  <NavLink to={"/cloud-service"}><h4 className="megaMenuSubheading">Cloud Service</h4></NavLink>
                  {cloudServices.map(service => <Col xs="12" key={service.id}>
                    <NavLink to={service.href}
                      className={isActive =>
                        "subnavlink" + (isActive ? " active-subnavlink" : "")
                      }
                      isActive={(match, location) => {
                        if (!match) {
                          return false;
                        }
                        return location.pathname === service.href
                      }}
                    >
                      <div className="d-flex align-items-center py-2">
                        <div className="megaMenuIcons"><service.icon /></div>
                        <span className="ps-3">{service.subtitle}</span>
                      </div>
                    </NavLink>
                  </Col>)}
                </Col> */}
                <Col xs="12" md="4">
                  <NavLink to={"/digital-marketing"}><h4 className="megaMenuSubheading">Digital Marketing</h4></NavLink>
                  {marketingServices.map(service => <Col xs="12" key={service.id}>
                    <NavLink to={service.href}
                      className={isActive =>
                        "subnavlink" + (isActive ? " active-subnavlink" : "")
                      }
                      isActive={(match, location) => {
                        if (!match) {
                          return false;
                        }
                        return location.pathname === service.href
                      }}
                    >
                      <div className="d-flex align-items-center py-2">
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
          <NavLink to="#" className="pe-2 navlink"><span>Insights</span> <FaChevronUp className="drop-arrow"/></NavLink>
          <div className="dropdown-menus">
            <Container style={{ width: '100%' }}>
              <Row>
                <Col xs="12">
                  <NavLink to={"/portfolio"}
                    className={isActive =>
                      "subnavlink" + (isActive ? " active-subnavlink" : "")
                    }
                    isActive={(match, location) => {
                      if (!match) {
                        return false;
                      }
                      return location.pathname === '/portfolio'
                    }}
                  >
                    <div className="d-flex align-items-center py-2">
                      <div className="megaMenuIcons"><FaSquare /></div>
                      <span className="ps-3">Portfolio</span>
                    </div>
                  </NavLink>
                </Col>
                <Col xs="12">
                  <NavLink to={"/journey"}><a href="https://www.zerozilla.com/blog/" target="_blank"
                    className={isActive =>
                      "navlink" + (isActive ? " active-navlink" : "")
                    }
                    isActive={(match, location) => {
                      if (!match) {
                        return false;
                      }
                      return location.pathname === "https://www.zerozilla.com/blog/"
                    }}
                  >
                    <div className="d-flex align-items-center py-2">
                      <div className="megaMenuIcons"><FaSquare /></div>
                      <span className="ps-3">Blog</span>
                    </div>
                  </a></NavLink>
                </Col>
                <Col xs="12">
                  <NavLink to={"/career"}
                    className={isActive =>
                      "subnavlink" + (isActive ? " active-subnavlink" : "")
                    }
                    isActive={(match, location) => {
                      if (!match) {
                        return false;
                      }
                      return location.pathname === '/career'
                    }}
                  >
                    <div className="d-flex align-items-center py-2">
                      <div className="megaMenuIcons"><FaSquare /></div>
                      <span className="ps-3">Gallery</span>
                    </div>
                  </NavLink>
                </Col>
              </Row>
            </Container>
          </div>
        </li>



        {/* <li><NavLink to={"/portfolio"}
          className={isActive =>
            "navlink" + (isActive ? " active-navlink" : "")
          }
          isActive={(match, location) => {
            if (!match) {
              return false;
            }
            return location.pathname === '/portfolio'
          }}
        >Portfolio</NavLink></li> */}
        <li><NavLink to="/contact-us"
          className={isActive =>
            "navlink" + (isActive ? " active-navlink" : "")
          }
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              return location.pathname === '/contact-us'
            }}
        >Contact</NavLink></li>
        <li><NavLink to="/career"
          className={isActive =>
            "navlink" + (isActive ? " active-navlink" : "")
          }
          isActive={(match, location) => {
            if (!match) {
              return false;
            }
            return location.pathname === '/career'
          }}
        >
          <Tooltip title="We are hiring"
            overlayInnerStyle={{
              color: "#c31f5d",
              backgroundColor: "#ffeaf2",
              borderRadius: "5px",
              boxShadow: "none",
              fontSize: "12px",
            }}
            overlayStyle={{
              position:"relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop:"-5px"
            }}
            color={"#ffeaf2"}
            placement="rightTop"
          >
            <span>Careers</span>
          </Tooltip>
        </NavLink></li>
      </ul>
    </>
  )
  return (<>
    <header>
      <Container fluid="lg">
        <nav>
          <div>
            <img className="appLogo" src={appLogo} alt="appLogo" />
          </div>
          
          <div className="d-flex align-items-center">
            {isMobile ? mobileMenu : desktopMenu}
            <div className="nav-search-wrapper d-flex align-items-center justify-content-end"
              style={{ width: isMobile ? 'unset': '200px'}}
            >
              <input placeholder=""/>
              <FaSearch />
            </div>
          </div>

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
