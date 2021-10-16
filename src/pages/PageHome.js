import { Link } from 'react-router-dom';
import { ReactComponent as LaptopCode } from '../images/laptop-code.svg';
import { downArrow } from '../globals/icon';
import Contact from '../components/Contact';

import { FaCode, FaPaintBrush } from 'react-icons/fa';

const PageHome = () => {
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
        <div className="text">
          <h2>Background</h2>
          <p>
            I am a Front-End Developer based in Vancouver, British Columbia,
            Canada. As a web developer, my goal is to build websites that not
            only look beautiful but also be functional and implement UX
            principles. I value clean design patterns and thoughtful features.
            <Link className="link-to-about" to="/about">
              <mark>More about me.</mark>
            </Link>
          </p>
          <div className="grid">
            <h3>Things I Love</h3>
            <div className="card">
              <FaCode />
              <p>
                I enjoy front-end development and love to work with ReactJS,
                HTML, CSS and modern JavaScript.
              </p>
            </div>
            <div className="card">
              <FaPaintBrush />
              <p>
                I love being part of the creative process and I have working web
                design using Adobe Creative Cloud.
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
