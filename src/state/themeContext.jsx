import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggle = () => {
    if(theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  const color = theme === 'light' ? '#000000' : '#FFFFFF';
  const bgColor = theme === 'light' ? '#FFFFFF' : '#000000';

  document.body.style.color = color;
  document.body.style.backgroundColor = bgColor;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  const { setTheme } = useContext(ThemeContext);
  const { toggle } = useContext(ThemeContext);
  return { theme, setTheme, toggle };
};

