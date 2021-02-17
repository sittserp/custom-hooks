import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../state/themeContext';
import styles from './Header.css';

const Header = () => {
  // const [theme, setTheme] = useContext(ThemeContext);
  const { theme, toggle } = useTheme();
  // const toggle = ({ target }) => {
  //   if(target.checked) setTheme('dark');
  //   else setTheme('light');
  // };
console.log(theme);
  return (
    <>
      <div className={`${styles[theme]}`}>
        <Link to = {'/'}>
          <button>
     Home
          </button>
        </Link>
        <input type="checkbox" onChange={toggle} />
        <p>{theme}</p>
      </div>
    </>
  );
};

export default Header;
