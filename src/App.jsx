import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Home from "./containers/Home";
import PeaPackGladstoneMap from "./containers/PeaPackGladstoneMap";
import BernardsvilleMap from "./containers/BernardsvilleMap";
import FarHillsMap from "./containers/FarHillsMap";
import Contact from "./containers/Contact";
import StrategyOverview from "./containers/StrategyOverview";
import FirmOverview from "./containers/FirmOverview";
import Leadership from "./containers/Leadership";
import InvestorLogin from "./containers/InvestorLogin";
//import BlogDetail from "./containers/BlogDetail";
//import BlogHome from "./containers/BlogHome";
import Footer from "./components/Footer";
import ScrollToTop from "./containers/ScrollToTop";
//import TransitionGroup from "react-transition-group/TransitionGroup";
//import AnimatedSwitch from "./containers/AnimatedSwitch";

import InTheNews from "./containers/InTheNews";
import Projects from "./containers/Projects";
import Project from "./containers/Project";
import MarketPulse from "./containers/MarketPulse";
import MarketArticle from "./containers/MarketArticle";

import { BackTop } from "antd";

export default class App extends React.PureComponent {
  state = {
    newKey: new Date(),
  };

  render() {
    document.getElementById("body").onclick = function (e) {
      this.setState({ newKey: new Date() });
    }.bind(this);

    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <ScrollToTop>
            <BackTop />
            <div>
              <Navigation newKey={this.state.newKey} />
              <Route
                render={({ location }) => (
                  <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    key={location.key}
                    location={location}
                  >
                    <Route exact path="/" component={Home} />

                    <Route
                      path="/contact"
                      render={(props) => <Contact {...props} />}
                    />
                    <Route
                      path="/portfolio/peapack-gladstone"
                      render={(props) => <PeaPackGladstoneMap {...props} />}
                    />
                    <Route
                      path="/portfolio/bernardsville"
                      render={(props) => <BernardsvilleMap {...props} />}
                    />
                    <Route
                      path="/portfolio/farhills"
                      render={(props) => <FarHillsMap {...props} />}
                    />
                    <Route
                      path="/strategy"
                      render={(props) => <StrategyOverview {...props} />}
                    />
                    <Route
                      path="/firm"
                      render={(props) => <FirmOverview {...props} />}
                    />
                    <Route
                      path="/leadership"
                      render={(props) => <Leadership {...props} />}
                    />
                    <Route
                      path="/investor-login"
                      render={(props) => <InvestorLogin {...props} />}
                    />
                    {/*<Route exact path="/press" component={BlogHome} />
                      <Route path="/press/:title/:id" component={BlogDetail} />*/}
                    <Route exact path="/inthenews" component={InTheNews} />
                    <Route path="/inthenews/:project" component={Projects} />
                    <Route path="/news/:project/:slug/:id" component={Project} />
                    <Route path="/marketpulse" component={MarketPulse} />
                    <Route
                      path="/marketarticle/:id"
                      component={MarketArticle}
                    />
                  </AnimatedSwitch>
                )}
              />
            </div>
          </ScrollToTop>
          <Footer />
        </div>
      </BrowserRouter>
    );
  } // End of render function
} // End of App component
