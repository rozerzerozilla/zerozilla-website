import { useEffect, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";


// google analytics
// import ReactGA from "react-ga";

//css
import "./App.css";
import "./assets/css/base.css";

//components
import GoUp from "./components/GoUp";

import "antd/dist/antd.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { AppProvider } from "./context/Context";

// import routes
import { customServices, marketingServices, businessServices, cloudServices } from "./helper/router"
import Loader from "./components/MainLoader"
//pages
// import AboutPage from "./pages/About";
// import ServicePage2 from "./pages/Services/CustomApplication";
// import AWS from "./pages/Services/AWS";
// import PortfolioPage from "./pages/Portfolio";
// import ContactUsPage from "./pages/ContactUs";
// import PortfolioSubPage from "./pages/Portfolio/PortfolioSubPage";
// import ThankYou from "./pages/ThankYou";
// import PagenotFound from "./pages/PageNotFound";
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const DigtalMarketing = lazy(() => import("./pages/Services/DigtalMarketing"));
const PortfolioPage = lazy(() => import('./pages/Portfolio'));
const Career = lazy(() => import('./pages/Career'));
const ContactUsPage = lazy(() => import('./pages/ContactUs'));
const PortfolioSubPage = lazy(() => import('./pages/Portfolio/PortfolioSubPage'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const PagenotFound = lazy(() => import('./pages/PageNotFound'));
const WebDevlopment = lazy(() => import('./pages/Home'));



const App = () => {
  
  // ReactGA.initialize('UA-000000-01');
  // ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <AppProvider>
      <div className="App">
        <Suspense fallback={<Loader/>}>
        {/* <Header /> */}
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/about-us"} component={AboutPage} />
          {businessServices.map((ele, idx) => <Route key={idx + Math.random() * 10} path={ele.href} component={ele.component} />)}
          {customServices.map((ele, idx) => <Route key={idx + Math.random() * 10} path={ele.href} component={ele.component}/>)}
          {cloudServices.map((ele, idx) => <Route key={idx + Math.random() * 10} path={ele.href} component={ele.component} />)}
          
          {marketingServices.map((ele, idx) => <Route key={idx + Math.random() * 10} path={ele.href} component={ele.component} />)}
            <Route path={"/digital-marketing"} component={DigtalMarketing} />
            <Route path={"/web-application"} component={WebDevlopment}/>
          <Route path={"/career"} component={Career} />
          <Route exact path={"/portfolio"} component={PortfolioPage} />
          <Route path={"/portfolio/skill-mine"} component={PortfolioSubPage} />
          <Route path={"/contact-us"} component={ContactUsPage} />
          <Route path={"/thank-you"} component={ThankYou} />
          <Route component={PagenotFound} />
        </Switch>
        <GoUp />
        </Suspense>
      </div>
    </AppProvider>
  );
};

export default App;
