import React from 'react';
import styles from './Navbar.module.css';
import useNavbar, { Nav } from './useNavbar';

type NavbarProps = {
  leftLinks: Nav[];
  rightLinks: Nav[];
  logoText: string;
};

const Navbar: React.FC<NavbarProps> = ({ leftLinks, rightLinks, logoText }) => {
  const { renderLink } = useNavbar();

  return (
    <div className={styles.wrapNav}>
      <div className={styles.menu}>
        {leftLinks.map((link, index) =>
          renderLink(
            { ...link, className: `${styles.radius} ${link.className || ''}` },
            index
          )
        )}
      </div>
      <a className={styles.logo} href="/">{logoText}</a>
      <div className={styles.menu}>
        {rightLinks.map((link, index) =>
          renderLink(
            { ...link, className: `${styles.radius} ${link.className || ''}` },
            index
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
