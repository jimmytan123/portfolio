import { Link, useLocation } from 'react-router-dom';
import { email } from '../globals/global';
import { FaArrowCircleUp } from 'react-icons/fa';

const Contact = () => {
  const location = useLocation();

  //console.log(location.pathname);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="wave-decoration">
        <svg
          id="wave"
          style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
          viewBox="0 0 1440 158"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(43, 43, 43, 1)" offset="0%"></stop>
              <stop stopColor="rgba(51, 102, 153, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: 'translate(0, 0px)', opacity: '1' }}
            fill="url(#sw-gradient-0)"
            d="M0,80L120,85.3C240,91,480,101,720,98.7C960,96,1200,80,1440,80C1680,80,1920,96,2160,106.7C2400,117,2640,123,2880,104C3120,85,3360,43,3600,32C3840,21,4080,43,4320,48C4560,53,4800,43,5040,34.7C5280,27,5520,21,5760,29.3C6000,37,6240,59,6480,69.3C6720,80,6960,80,7200,77.3C7440,75,7680,69,7920,61.3C8160,53,8400,43,8640,45.3C8880,48,9120,64,9360,80C9600,96,9840,112,10080,114.7C10320,117,10560,107,10800,85.3C11040,64,11280,32,11520,40C11760,48,12000,96,12240,114.7C12480,133,12720,123,12960,114.7C13200,107,13440,101,13680,96C13920,91,14160,85,14400,80C14640,75,14880,69,15120,58.7C15360,48,15600,32,15840,37.3C16080,43,16320,69,16560,77.3C16800,85,17040,75,17160,69.3L17280,64L17280,160L17160,160C17040,160,16800,160,16560,160C16320,160,16080,160,15840,160C15600,160,15360,160,15120,160C14880,160,14640,160,14400,160C14160,160,13920,160,13680,160C13440,160,13200,160,12960,160C12720,160,12480,160,12240,160C12000,160,11760,160,11520,160C11280,160,11040,160,10800,160C10560,160,10320,160,10080,160C9840,160,9600,160,9360,160C9120,160,8880,160,8640,160C8400,160,8160,160,7920,160C7680,160,7440,160,7200,160C6960,160,6720,160,6480,160C6240,160,6000,160,5760,160C5520,160,5280,160,5040,160C4800,160,4560,160,4320,160C4080,160,3840,160,3600,160C3360,160,3120,160,2880,160C2640,160,2400,160,2160,160C1920,160,1680,160,1440,160C1200,160,960,160,720,160C480,160,240,160,120,160L0,160Z"
          ></path>
        </svg>
      </div>

      <div className="text">
        <h2>Get in Touch.</h2>
        <p>
          I'm ready for challenges and opportunities. Please send me an email if
          you want to chat with me.
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
        <FaArrowCircleUp onClick={toTop} title="Up arrow icon" />
      </div>
    </section>
  );
};

export default Contact;
