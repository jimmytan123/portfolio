import React from 'react';
import { getYear } from '../utilities/date';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import { gitHubURL, linkedInURL, email } from '../globals/global';

const Footer = () => {
  return (
    <footer>
      <section className="footer social-media">
        <a
          className="footer-icon"
          href={gitHubURL}
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          className="footer-icon"
          href={linkedInURL}
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a className="footer-icon" href={`mailto:${email}`} title="email">
          <HiOutlineMail />
        </a>
      </section>

      <p>&copy; {getYear()} Jimmy(Zhixi) Tan</p>
    </footer>
  );
};

export default Footer;
