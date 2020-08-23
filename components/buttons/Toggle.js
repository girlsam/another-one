import React from 'react';
import useDarkMode from 'use-dark-mode';

const Toggle = () => {
  const darkMode = useDarkMode(false);
  
  return (
    <button
      type="button" 
      onClick={ darkMode.toggle }
      onKeyDown={ darkMode.toggle }
    >
      Toggle Theme
    </button>
  );
}

export default Toggle;