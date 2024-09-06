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
          content="A summary of Jimmy Tan's background and technical skills as a Full-Stack Developer."
        />
      </Helmet>
      <section className="about-content">
        <article className="about-text">
          <h1 data-aos="fade-up">About Me.</h1>
          <p data-aos="fade-up" data-aos-delay="50">
            I'm Jimmy(Zhixi) Tan, a full-stack developer(front-end focused)
            based in Vancouver. Passionate to build functional and user-friendly
            websites with great attention to detail. I value continuous learning
            and keeping up with trends. My training and hands-on projects
            experience at
            <abbr title="British Columbia Institute of Technology"> BCIT </abbr>
            , have allowed me to further develop my passion and skillsets in the
            web development industry. With solid fundamentals in various
            front-end programming languages as well as web design.
          </p>
          <p data-aos="fade-up" data-aos-delay="100">
            Graduated with a Bachelor of Science Statistics major at University
            of Victoria and gained a few years of working experience as a
            front-end developer, I have developed a detail-oriented mindset,
            creative problem-solving skills and strong logical thinking ability.
          </p>
          <p data-aos="fade-up" data-aos-delay="150">
            In addition to web development, one of my greatest interests is
            landscape photography. I enjoy the process of slowing down and
            capturing the point of aesthetics.
          </p>
        </article>
      </section>
      <section className="work" data-aos="fade-up" data-aos-delay="200">
        <div className="work-wrapper">
          <h3>Professional Experience</h3>
          <div className="work-item">
            <h4>airG Inc.(Vancouver, BC) - Junior Front-End Developer</h4>
            <ul>
              <li>
                Contribute to building cross-platform web applications, mainly
                focusing on airG Inc.'s customer-facing web apps.
              </li>
              <li>
                Leveraging my problem-solving skills to promptly address and
                resolve reported bugs, and ensure cross-browser usability.
              </li>
              <li>
                Worked together within an Agile framework and maintained a
                dynamic partnership with Senior Front-End Developers, Back-End
                Developers, UI/UX Designers and QA to consistently deliver value
                to the organization.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="skills" data-aos="fade-up" data-aos-delay="200">
        <div className="skills-flex">
          <div className="skills-cat">
            <h3>Development Skills</h3>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Redux</li>
              <li>Next.js</li>
              <li>Angular</li>
              <li>AngularJS</li>
              <li>Lit</li>
              <li>Web Components</li>
              <li>Lit</li>
              <li>Git</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="skills-cat">
            <h3>Design Skills</h3>
            <ul>
              <li>Adobe XD</li>
              <li>Figma</li>
              <li>Invision</li>
            </ul>
          </div>
          <div className="skills-cat">
            <h3>Others</h3>
            <ul>
              <li>SEO</li>
              <li>Stripe</li>
              <li>Mixpanel</li>
              <li>Jira</li>
              <li>Scrum</li>
              <li>Agile</li>
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
