import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colors = {
    coffeeDark: '#0F0B08',
    espresso: '#1B1410',
    mocha: '#3E2723',
    caramel: '#C08B5C',
    latte: '#E8D5C4',
    cream: '#F8F3EE',
    gold: '#D4A373',
    accent: '#FFB347',
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
