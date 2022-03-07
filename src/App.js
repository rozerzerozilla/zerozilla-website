import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import CustomHeader from "./components/CustomHeader";
import Footer from "./components/Footer";

// google analytics
// import ReactGA from "react-ga";

//css
import "./App.css";
import "./assets/css/base.css";

//components
import GoUp from "./components/GoUp";

// import "antd/dist/antd.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { AppProvider } from "./context/Context";

//pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicePage1 from "./pages/Services/Services1";
import ServicePage2 from "./pages/Services/Services2";
import ServicePage3 from "./pages/Services/Services3";
import ServicePage4 from "./pages/Services/Services4";
import ServicePage5 from "./pages/Services/Services5";
import ServicePage6 from "./pages/Services/Services6";
import ServicePage7 from "./pages/Services/Services7";
import PortfolioPage from "./pages/Portfolio";
import ContactUsPage from "./pages/ContactUs";
import PortfolioSubPage from "./pages/Portfolio/PortfolioSubPage";

const App = () => {
  
  // ReactGA.initialize('UA-000000-01');
  // ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <AppProvider>
      <div className="App">
        <CustomHeader/>
        {/* <Header /> */}
        <Switch>
          <Redirect exact path="/" to="/home" />
          <Route path={"/home"} component={HomePage} />
          <Route path={"/about-us"} component={AboutPage} />
          <Route
            path={"/services/web-application"}
            component={ServicePage1}
          />
          <Route
            path={"/services/mobile-application"}
            component={ServicePage2}
          />
          <Route
            path={"/services/digital-marketing"}
            component={ServicePage3}
          />
          <Route
            path={"/services/search-engine-optimization"}
            component={ServicePage4}
          />
          <Route
            path={"/services/social-media-marketing"}
            component={ServicePage5}
          />
          <Route path={"/services/pay-per-click"} component={ServicePage6} />
          <Route path={"/services/lead-generation"} component={ServicePage7} />
          <Route exact path={"/portfolio"} component={PortfolioPage} />
          <Route path={"/portfolio/skill-mine"} component={PortfolioSubPage} />
          <Route path={"/contact-us"} component={ContactUsPage} />
        </Switch>
        <GoUp />
        <Footer/>
      </div>
    </AppProvider>
  );
};

export default App;
