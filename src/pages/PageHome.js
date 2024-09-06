import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ReactComponent as LaptopCode } from '../globals/logos/laptop-code.svg';
import { downArrow } from '../globals/icon';
import Contact from '../components/Contact';
import HomeFeaturedProjects from '../components/HomeFeaturedProjects';
import WeatherWidget from '../components/WeatherWidget';

const PageHome = () => {
  const elementRef = useRef(null);
  const executeScroll = () =>
    elementRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <motion.div
      className="home-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <Helmet>
        <title>Jimmy Tan | Web Developer</title>
        <meta
          name="description"
          content="A portfolio site built in React by Jimmy Tan, a Full-Stack Developer(front-end focused) based in Vancouver, BC, Canada. He has hands-on experience building websites from scratch, with a mobile-first approach. He likes React, JavaScript, HTML, CSS."
        />
      </Helmet>
      <section className="landing">
        <div
          className="landing-content"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <LaptopCode className="laptop-code-svg" />
          <div className="text">
            <h1>I'm Jimmy Tan</h1>
            <p>
              A <mark>full-stack developer</mark> based in Vancouver, Canada.
            </p>
            <Link className="work-btn homepage-btn" to="/work">
              View My Work
              <div className="overlay"></div>
            </Link>
          </div>
        </div>
        <button onClick={executeScroll} className="scroll-btn">
          {downArrow}
        </button>
        <WeatherWidget />
      </section>
      <section ref={elementRef} className="brief-intro">
        <div className="text">
          <h2>One Pixel at a Time</h2>
          <p>
            A focused and motivated full-stack developer(front-end focused) with
            hands-on{' '}
            <Link className="link-to-work" to="/work">
              <span>project experience.</span>
            </Link>{' '}
            Passionate to build functional and user-friendly websites with great
            attention to detail. I value continuous learning and keeping up with
            trends.
            <Link className="link-to-about" to="/about">
              <span> More about me.</span>
            </Link>
          </p>
        </div>
      </section>
      <HomeFeaturedProjects />
      <Contact />
    </motion.div>
  );
};

export default PageHome;
