import React from 'react';
import useDarkMode from 'use-dark-mode';

const Toggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <button
      type="button"
      aria-labelledby="toggle"
      aria-pressed={ darkMode.value }
      onClick={ () => darkMode.toggle() }
    >
      <span id="toggle">Toggle {darkMode.value ? 'light' : 'dark'} mode</span>
    </button>
  );
}

export default Toggle;