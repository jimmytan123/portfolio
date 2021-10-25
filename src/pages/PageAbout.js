import Contact from '../components/Contact';

const PageAbout = () => {
  return (
    <div className="about-container">
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
      <Contact />
    </div>
  );
};

export default PageAbout;
