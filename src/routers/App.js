import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //React Router V6
import { HelmetProvider } from 'react-helmet-async';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ReactGA from 'react-ga';

import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageWork from '../pages/PageWork';
import PageSingleProject from '../pages/PageSingleProject';
import PageNoMatch from '../pages/PageNoMatch';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  useEffect(() => {
    // Animate on scroll library initialization settings
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });

    // Initialize Google Analytics
    ReactGA.initialize('UA-211842220-1');
    // This line will trigger on a route change
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="site-wrapper">
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/work" element={<PageWork />} />
              <Route path="/project-:id" element={<PageSingleProject />} />
              <Route path="*" element={<PageNoMatch />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
