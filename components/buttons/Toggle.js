import React from 'react';
import useDarkMode from 'use-dark-mode';

const Toggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <button
      type="button"
      aria-pressed={ darkMode.value }
      onClick={ () => darkMode.toggle() }
    >
      Toggle {darkMode.value ? 'light' : 'dark'} mode
    </button>
  );
}

export default Toggle;