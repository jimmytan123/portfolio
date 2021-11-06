//Nav.js component, to return a navigation for header section
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';

import { gitHubURL, linkedInURL, email } from '../globals/global';

const Nav = ({ handleShowHide }) => {
  //when user clicks a menu link or the element lost focus within the nav menu, close it
  const closeNav = (e) => {
    if (window.innerWidth < 576) {
      handleShowHide();
    } else {
      e.target.blur();
    }
  };

  return (
    <nav onClick={closeNav} className="main-nav">
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className="nav-link">
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <HashLink to="#contact" smooth className="nav-link">
            Contact
          </HashLink>
        </li>

        <li className="nav-social-media">
          <a
            className="nav-social-icon"
            href={gitHubURL}
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            className="nav-social-icon"
            href={linkedInURL}
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a className="nav-social-icon" href={`mailto:${email}`} title="email">
            <HiOutlineMail />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
