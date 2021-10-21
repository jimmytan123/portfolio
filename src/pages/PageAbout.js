import Contact from '../components/Contact';

const PageAbout = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <section className="about-content">
        <div className="about-text">
          <p>
            My training and hands-on projects experience at BCIT's Front-End
            Developer Program, has allowed me to become a well-rounded front-end
            developer with solid fundamentals in various front-end programming
            languages as well as web design. My favourite tools are React,
            HTML5, CSS3, JavaScript and Adobe XD.
          </p>
          <p>
            My previous educational experience with the Bachelor of Science
            Statistics major at University of Victoria allowed me to implement a
            detail-oriented mindset and logical thinking skills into the web
            development field. Overall, I would say I'm a detail-oriented person
            and I'm good at self-learning and problem-solving.
          </p>
          <p>
            In addition to web development, one of my interests is landscape
            photography. I enjoy the process of slowing down and finding the
            point of aesthetics.
          </p>
        </div>
      </section>
      <section className="skills">
        <div className="development-stack">
          <h2>Development Stack</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Redux</li>
            <li>jQuery</li>
            <li>BootStrap</li>
            <li>WordPress</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>WooCommerce</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="development-stack">
          <h2>Design Stack</h2>
          <ul>
            <li>Adobe XD</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Figma</li>
            <li>Invision</li>
          </ul>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default PageAbout;
