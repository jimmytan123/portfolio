import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import logo from '../globals/logos/jimmy-logo-v1.png';
import { hamburgerIcon, closeIcon } from '../globals/icon';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  //function to toggle state to show/hide mobile navs when user click the hamburger/close button
  const handleShowHide = () => {
    setNavOpen(!navOpen);
  };

  const isDesktop = (e) => {
    if (e.matches) {
      setNavOpen(false);
    }
  };

  //when browser width is larger than 576px, close the mobile nav
  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 576px)');
    mediaQuery.addEventListener('change', isDesktop);
    //cleanup function to remove the event listener
    return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);

  // prevent scroll when mobile nav is open
  useEffect(
    () => (document.body.style.overflow = navOpen ? 'hidden' : 'unset'),
    [navOpen]
  );

  return (
    <header className={navOpen ? 'active' : undefined}>
      <div className="top-bar">
        <div className="header-logo-container">
          <NavLink to="/" className="header-logo">
            {' '}
            <img src={logo} alt="Jimmy's Logo" />
          </NavLink>
        </div>
        <button
          onClick={handleShowHide}
          className="btn-main-nav"
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          {!navOpen ? hamburgerIcon : closeIcon}
        </button>
        <Nav handleShowHide={handleShowHide} />
      </div>
    </header>
  );
};

export default Header;
