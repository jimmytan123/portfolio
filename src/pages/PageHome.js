// import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import { ReactComponent as LaptopCode } from '../globals/logos/laptop-code.svg';
import { downArrow } from '../globals/icon';
import Contact from '../components/Contact';

const PageHome = () => {
  // const [breakPointWidth, setBreakPointWidth] = useState(
  //   window.innerWidth < 1024
  // );

  // const updateMedia = () => {
  //   setBreakPointWidth(window.innerWidth < 1024);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', updateMedia);
  //   return () => window.removeEventListener('resize', updateMedia);
  // }, []);

  const elementRef = useRef(null);
  const executeScroll = () =>
    elementRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <motion.div
      className="home-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <Helmet>
        <title>Jimmy Tan | Portfolio</title>
        <meta
          name="description"
          content="A portfolio site built in React by Jimmy Tan, a Front-End Developer based in Vancouver, BC, Canada. He has hands-on experience building websites from scratch, with a mobile-first approach. He likes React, JavaScript, HTML, CSS."
        />
      </Helmet>
      <section className="landing">
        <div
          className="landing-content"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <LaptopCode className="laptop-code-svg" />
          <div className="text">
            <h1>I'm Jimmy Tan</h1>
            <p>
              A <mark>front-end developer</mark> based in Vancouver, Canada.
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
        {/* <p className="landing-background-text">
          {breakPointWidth ? 'deb' : 'web developer'}
        </p> */}
      </section>
      <section ref={elementRef} className="background">
        <div className="text">
          <h2>Front-End Developer</h2>
          <p>
            I'm Jimmy Tan. A self-motivated front-end developer with{' '}
            <Link className="link-to-work" to="/work">
              <mark>hands-on project experience</mark>
            </Link>{' '}
            designing and building websites from scratch. My goal is to build
            websites with both visually appealing and user experience-oriented
            functionality.
            <Link className="link-to-about" to="/about">
              <mark>More about me.</mark>
            </Link>
          </p>
          <div className="grid">
            <h3>Things I Love</h3>
            <div className="card">
              <FaCode className="code-icon" />
              <p>
                I enjoy front-end development and love to work with React JS,
                HTML5, CSS3/Sass and modern JavaScript.
              </p>
            </div>
            <div className="card">
              <FaPaintBrush className="brush-icon" />
              <p>
                I also like being part of the design creative process and I have
                been working on web design using Adobe Creative Cloud.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </motion.div>
  );
};

export default PageHome;
