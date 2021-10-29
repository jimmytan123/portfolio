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
          viewBox="0 0 1440 238"
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
            d="M0,72L80,84C160,96,320,120,480,116C640,112,800,80,960,80C1120,80,1280,112,1440,124C1600,136,1760,128,1920,112C2080,96,2240,72,2400,76C2560,80,2720,112,2880,128C3040,144,3200,144,3360,140C3520,136,3680,128,3840,140C4000,152,4160,184,4320,176C4480,168,4640,120,4800,96C4960,72,5120,72,5280,64C5440,56,5600,40,5760,28C5920,16,6080,8,6240,28C6400,48,6560,96,6720,128C6880,160,7040,176,7200,168C7360,160,7520,128,7680,132C7840,136,8000,176,8160,176C8320,176,8480,136,8640,108C8800,80,8960,64,9120,72C9280,80,9440,112,9600,104C9760,96,9920,48,10080,28C10240,8,10400,16,10560,20C10720,24,10880,24,11040,28C11200,32,11360,40,11440,44L11520,48L11520,240L11440,240C11360,240,11200,240,11040,240C10880,240,10720,240,10560,240C10400,240,10240,240,10080,240C9920,240,9760,240,9600,240C9440,240,9280,240,9120,240C8960,240,8800,240,8640,240C8480,240,8320,240,8160,240C8000,240,7840,240,7680,240C7520,240,7360,240,7200,240C7040,240,6880,240,6720,240C6560,240,6400,240,6240,240C6080,240,5920,240,5760,240C5600,240,5440,240,5280,240C5120,240,4960,240,4800,240C4640,240,4480,240,4320,240C4160,240,4000,240,3840,240C3680,240,3520,240,3360,240C3200,240,3040,240,2880,240C2720,240,2560,240,2400,240C2240,240,2080,240,1920,240C1760,240,1600,240,1440,240C1280,240,1120,240,960,240C800,240,640,240,480,240C320,240,160,240,80,240L0,240Z"
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
        <FaArrowCircleUp onClick={toTop} />
      </div>
    </section>
  );
};

export default Contact;
