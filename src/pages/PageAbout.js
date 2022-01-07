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
        'Investments...',
        'Technology...',
        'Cooking...',
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
        <article className="about-text">
          <h1 data-aos="fade-up">About Me.</h1>
          <p data-aos="fade-up" data-aos-delay="50">
            I'm Jimmy(Zhixi) Tan. My training and hands-on projects experience
            at{' '}
            <abbr title="British Columbia Institute of Technology">BCIT</abbr>{' '}
            Front-End Web Developer Program, have allowed me to further develop
            my passion and skillsets in the web development industry. With solid
            fundamentals in various front-end programming languages as well as
            web design, I mostly enjoy working with React JS, HTML5, CSS3,
            JavaScript and Adobe XD. I am currently learning TypeScript.
          </p>
          <p data-aos="fade-up" data-aos-delay="100">
            Graduated with a Bachelor of Science Statistics major at University
            of Victoria and gained a few years of working experience, I have
            developed a detail-oriented mindset, creative problem-solving skills
            and strong logical thinking ability.
          </p>
          <p data-aos="fade-up" data-aos-delay="150">
            In addition to web development, one of my greatest interests is
            landscape photography. I enjoy the process of slowing down and
            capturing the point of aesthetics.
          </p>
        </article>
      </section>
      <section className="skills" data-aos="fade-up" data-aos-delay="200">
        <div className="skills-flex">
          <div className="skills-cat">
            <h3>Development Skills</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Sass</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>jQuery</li>
              <li>PHP</li>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>BootStrap</li>
              <li>MySQL</li>
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
          <h2>
            Here are the topics that I am{' '}
            <mark className="interested-topics-hightlight">interested</mark>{' '}
            in...
          </h2>
          <p className="topics-text">
            <span ref={topicsRef}></span>
          </p>
        </div>
      </section>
      <Contact />
    </motion.div>
  );
};

export default PageAbout;
