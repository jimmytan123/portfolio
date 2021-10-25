import { Link, useLocation } from 'react-router-dom';
import { email } from '../globals/global';

import { FaArrowCircleUp } from 'react-icons/fa';

const Contact = () => {
  const location = useLocation();

  //console.log(location.pathname);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="text">
        <h2>Get in Touch</h2>
        <p>
          If you have an idea that you would like to discuss with me about my
          work or anything else, please send me a message.
        </p>
        <div className="btn-wrapper">
          {location.pathname !== '/work' && (
            <div className="btn">
              <div className="side default-side">
                <Link to="/work">View work</Link>
              </div>
              <div className="side hover-side">
                <Link to="/work">View work</Link>
              </div>
            </div>
          )}
          <div className="btn">
            <div className="side default-side">
              <a href={`mailto:${email}`}>Email me</a>
            </div>

            <div className="side hover-side hover-side-email-btn">
              <a href={`mailto:${email}`}>Email me</a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-to-top">
        <FaArrowCircleUp onClick={toTop} />
      </div>
    </section>
  );
};

export default Contact;
