import React, { createContext, useState, useContext } from 'react';

// Create a context for theme
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  
  // Theme values for light and dark modes
  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode ? {
      // Dark theme colors
      background: '#121212',
      cardBackground: '#1E1E1E',
      secondaryBackground: '#222222',
      text: '#FFFFFF',
      subText: 'rgba(255, 255, 255, 0.8)',
      primary: '#C4FF4D',
      secondary: '#2962FF',
      accent: '#FF6A3C',
      statusBar: 'light-content',
    } : {
      // Light theme colors
      background: '#F5F5F5',
      cardBackground: '#FFFFFF',
      secondaryBackground: '#F0F0F0',
      text: '#121212',
      subText: 'rgba(0, 0, 0, 0.7)',
      primary: '#4CAF50',
      secondary: '#2962FF',
      accent: '#FF6A3C',
      statusBar: 'dark-content',
    }
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);