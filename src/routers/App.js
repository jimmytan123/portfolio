import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageWork from '../pages/PageWork';
import PageSingleProject from '../pages/PageSingleProject';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router basename="/portfolio">
        <div className="site-wrapper">
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
