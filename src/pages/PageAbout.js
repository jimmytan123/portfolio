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
          content="A summary of Jimmy Tan's background and technology skills as a Front-End Developer."
        />
      </Helmet>
      <section className="about-content">
        <div className="about-text">
          <h1>About Me.</h1>
          <p>
            My training and hands-on projects experience at BCIT's Front-End
            Developer Program, has allowed me to become a well-rounded front-end
            developer with solid fundamentals in various front-end programming
            languages as well as web design. My favourite tools are React,
            HTML5, CSS3, JavaScript and Adobe XD.
          </p>
          <p>
            Prior to web development and a few years of working experience, the
            Bachelor of Science Statistics major degree that I earned at
            University of Victoria allowed me to develop a detail-oriented
            mindset, be flexible in solving problems, have investigative skills
            and have the ability to deal with abstract concepts. Overall, I
            would say I'm a detail-oriented person with self-learning and
            creative problem-solving skills.
          </p>
          <p>
            In addition to web development, one of my interests is landscape
            photography. I enjoy the process of slowing down and finding the
            point of aesthetics.
          </p>
        </div>
      </section>
      <section className="skills">
        <div className="skills-flex">
          <div className="skills-cat">
            <h3>Development</h3>
            <ul>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Sass</li>
              <li>React</li>
              <li>Redux</li>
              <li>jQuery</li>
              <li>PHP</li>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>BootStrap</li>
              <li>SQL</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className="skills-cat">
            <h3>Design</h3>
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
