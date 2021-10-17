import { Link } from 'react-router-dom';
import { ReactComponent as LaptopCode } from '../assets/logos/laptop-code.svg';
import { downArrow } from '../globals/icon';
import Contact from '../components/Contact';
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const PageHome = () => {
  useEffect(() => {
    Aos.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="home-container">
      <section className="landing">
        <div className="landing-content">
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
        <a href="#background">{downArrow}</a>
      </section>
      <section className="background" id="background">
        <div className="text" data-aos="fade-up">
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
    </div>
  );
};

export default PageHome;
