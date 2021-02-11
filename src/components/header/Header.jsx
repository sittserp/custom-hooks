import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, ThemeProvider } from '../../state/themeContext';

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const toggle = ({ target }) => {
    if(target.checked) setTheme('dark');
    else setTheme('light');
  };

  return (
    <>
      <Link to = {'/'}>
        <button>
     Home
        </button>
      </Link>
      <input type="checkbox" onChange={toggle} />
      <p>{theme}</p>
    </>
  );
};

export const CompleteHeader = () => (
  <ThemeProvider>
    <Header />
  </ThemeProvider>
);
