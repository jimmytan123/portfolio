import React from 'react';
import { getYear } from '../utilities/date';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <section className="footer social-media">
        <a
          className="footer-icon"
          href="https://github.com/jimmytan123"
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          className="footer-icon"
          href="https://www.linkedin.com/in/zhixi-tan/"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="footer-icon"
          href="mailto:jimmytan0424@gmail.com"
          title="email"
        >
          <HiOutlineMail />
        </a>
      </section>

      <p>&copy; {getYear()} Jimmy(Zhixi) Tan</p>
    </footer>
  );
};

export default Footer;
