import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Aos from 'aos';
import ReactGA from 'react-ga';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageWork from '../pages/PageWork';
import PageSingleProject from '../pages/PageSingleProject';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  useEffect(() => {
    // Animate on scroll library
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });

    // Initialize Google Analytics
    ReactGA.initialize('UA-211842220-1');
    // Will trigger on a route change
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="site-wrapper">
          <ScrollToTop />
          <Header />
          <main>
            <Switch>
              <Route path="/" exact>
                <PageHome />
              </Route>
              <Route path="/about">
                <PageAbout />
              </Route>
              <Route path="/work">
                <PageWork />
              </Route>
              <Route path="/project-:id">
                <PageSingleProject />
              </Route>
              <Route path="*">
                <PageHome />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
