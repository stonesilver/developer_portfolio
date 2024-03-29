import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { darkBackground, lightBackground } from '../../utils/background';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { navLinks } from '../../utils/navLinks';
import navbarStyles from './navbar.module.scss';

const NavBar = () => {
  const darkBackgroundImage = darkBackground;
  const lightBackgroundImage = lightBackground;
  const [checked, setChecked] = useState(false);
  const [mobileChecked, setMobileChecked] = useState(false);
  const [theme, setTheme] = useState(['black', 'white']);
  const [introFooterBackground, setIntroFooterBackground] =
    useState(darkBackgroundImage);

  const isMobile = useMediaQuery(768);

  const themeCheckBoxOnChange = () => {
    setChecked(!checked);
  };

  const mobileToggleCheckBoxOnChange = () => {
    setMobileChecked(!mobileChecked);
  };

  const closeHamburgerMenu = () => {
    isMobile ? setMobileChecked(false) : '';
  };

  const duration = () => {
    return isMobile ? 1000 : 600;
  };

  useEffect(() => {
    document.body.style.background = theme[0];
    document.body.style.color = theme[1];
    const intro = document.getElementById('intro');
    const footer = document.getElementById('footer');
    intro!.style.backgroundImage = introFooterBackground;
    footer!.style.backgroundImage = introFooterBackground;
  }, [theme]);

  useEffect(() => {
    mobileChecked && isMobile
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [mobileChecked, isMobile]);

  const changeTheme = () => {
    theme[0] === 'white'
      ? setTheme(['black', 'white'])
      : setTheme(['white', 'black']);
    introFooterBackground === lightBackgroundImage
      ? setIntroFooterBackground(darkBackgroundImage)
      : setIntroFooterBackground(lightBackgroundImage);
  };

  return (
    <nav className={navbarStyles.navbar} id='home'>
      <div className={navbarStyles.navbarLogoContainer}>
        <Link href='/'>
          <span className={navbarStyles.name}>{'<ESC />'}</span>
        </Link>
      </div>
      <div className={navbarStyles.navbarLinksContainer}>
        <input
          type='checkbox'
          name='mobileToggle'
          checked={mobileChecked}
          onChange={mobileToggleCheckBoxOnChange}
          id={navbarStyles.mobileToggle}
        />
        <div className={navbarStyles.mobileToggle}>
          <div className={navbarStyles.hamburgerContainer}>
            {[0, 1, 2].map((item) => (
              <span key={item} className={navbarStyles.hambuger}></span>
            ))}
          </div>
        </div>
        <ul className={navbarStyles.navLinks}>
          {navLinks.map((link) => (
            <li key={link} className={navbarStyles.link}>
              <ScrollLink
                to={link}
                smooth={true}
                duration={duration}
                onClick={closeHamburgerMenu}
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className={navbarStyles.theme}>
          <input
            type='checkbox'
            name='themeToggle'
            checked={checked}
            onChange={themeCheckBoxOnChange}
            id={navbarStyles.themeToggle}
            onClick={changeTheme}
          />
          <div className={navbarStyles.themeToggle}>
            <span className={navbarStyles.modeIcon}>🌞</span>
            <span className={navbarStyles.modeIcon}>🌜</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
