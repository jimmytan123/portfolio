import { Link, useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();

  //console.log(location.pathname);

  return (
    <section className="contact" id="contact">
      <div className="text">
        <h2>Get in Touch</h2>
        <p>
          If you have an idea that you would like to discuss with me about my
          work or anything else, please send me a message.
        </p>
        <div className='btn-wrapper'>
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
              <a href="mailto:jimmytan0424@gmail.com">Email me</a>
            </div>

            <div className="side hover-side hover-side-email-btn">
              <a href="mailto:jimmytan0424@gmail.com">Email me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
