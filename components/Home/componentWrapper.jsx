import React from 'react';
import { useTheme } from '@/app/Context/themeContext'; 
import OriginalHomecom1 from './Homecom1';
import OriginalHomecom2 from './Homecom2';
import OriginalHomecom3 from './Homecom3';

// Wrapper components to inject the theme context into class components
export const Homecom1 = () => {
  const theme = useTheme();
  return <OriginalHomecom1 theme={theme} />;
};

export const Homecom2 = () => {
  const theme = useTheme();
  return <OriginalHomecom2 theme={theme} />;
};

export const Homecom3 = () => {
  const theme = useTheme();
  return <OriginalHomecom3 theme={theme} />;
};