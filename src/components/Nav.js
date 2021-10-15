//Nav.js component, to return a navigation for header section
import { NavLink } from 'react-router-dom';

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
    <nav className="main-nav" onClick={closeNav}>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          {/* <NavLink to="/#project-thumbnails">Work</NavLink> */}
          {/* <a href="/portfolio/#project-thumbnails">Work</a> */}
          <NavLink to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
