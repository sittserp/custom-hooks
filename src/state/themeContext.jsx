import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const toggle = ({ target }) => {
    if(target.checked)
      setTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useToggleOff = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

export const useToggleOn = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};
