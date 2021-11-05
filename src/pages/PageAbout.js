import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { init } from 'ityped';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const PageAbout = () => {
  const topicsRef = useRef(null);

  useEffect(() => {
    if (!topicsRef.current) {
      return;
    }

    init(topicsRef.current, {
      showCursor: true,
      typeSpeed: 150,
      startDelay: 800,
      strings: [
        'Coding...',
        'Web Development...',
        'Landscape Photography...',
        'Data Analysis...',
        'Stocks...',
        'Technology...',
        'Cooking...',
        'Automotive...',
        'Exploring cities...',
        'NBA...',
      ],
    });
  }, []);

  return (
    <motion.div
      className="about-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <Helmet>
        <title>Jimmy Tan | About Me</title>
        <meta
          name="description"
          content="A summary of Jimmy Tan's background and technical skills as a Front-End Developer."
        />
      </Helmet>
      <section className="about-content">
        <div className="about-text">
          <h1>About Me.</h1>
          <p>
            My training and hands-on projects experience at{' '}
            <abbr title="British Columbia Institute of Technology">BCIT</abbr>{' '}
            Front-End Web Developer Program, have allowed me to further develop
            my passion and skillsets in web development industry. With solid
            fundamentals in various front-end programming languages as well as
            web design, I mostly enjoy working with React JS, HTML5, CSS3,
            JavaScript and Adobe XD.
          </p>
          <p>
            Graduated with a Bachelor of Science Statistics major in University
            of Victoria and gained a few years of working experience, I have
            developed a detail-oriented mindset, creative problem-solving skills
            and strong logical thinking ability.
          </p>
          <p>
            In addition to web development, one of my greatest interests is
            landscape photography. I enjoy the process of slowing down and
            capturing the point of aesthetics.
          </p>
        </div>
      </section>
      <section className="skills">
        <div className="skills-flex">
          <div className="skills-cat">
            <h3>Development Skills</h3>
            <ul>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Sass</li>
              <li>React</li>
              <li>jQuery</li>
              <li>PHP</li>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>BootStrap</li>
              <li>SQL</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
          <div className="skills-cat">
            <h3>Design Skills</h3>
            <ul>
              <li>Adobe XD</li>
              <li>Figma</li>
              <li>Invision</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="interested-topics">
        <div className="interested-topics-content">
          <h2>Here are the topics that I am interested in...</h2>
          <p>
            <span ref={topicsRef}></span>
          </p>
        </div>
      </section>
      <Contact />
    </motion.div>
  );
};

export default PageAbout;
