import { Link } from 'react-router-dom';
import { ReactComponent as LaptopCode } from '../images/laptop-code.svg';
import { downArrow } from '../globals/icon';
import Contact from '../components/Contact';

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
            <Link className="work-btn" to="/work">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eos dolor officiis eligendi doloribus corrupti minus laudantium,
            perspiciatis, asperiores tempora aspernatur suscipit rem magnam
            velit quae non labore voluptate ipsa! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eaque sunt, quo voluptatibus quos
            magnam debitis, ipsa fuga voluptatum ut ab recusandae voluptate
            facilis veniam illo dicta amet mollitia quaerat unde.
          </p>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default PageHome;
