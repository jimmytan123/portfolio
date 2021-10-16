//Nav.js component, to return a navigation for header section
import { NavLink } from 'react-router-dom';

import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';

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
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <li className="nav-social-media">
          <a
            className="nav-social-icon"
            href="https://github.com/jimmytan123"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            className="nav-social-icon"
            href="https://www.linkedin.com/in/zhixi-tan/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="nav-social-icon"
            href="mailto:jimmytan0424@gmail.com"
            title="email"
          >
            <HiOutlineMail />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
