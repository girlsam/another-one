import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

const Button = styled.button`
  width: 9rem;
  height: 3rem;
  background-color: ${ ({ darkMode, theme }) => 
    darkMode.value ? theme.background.light : theme.background.dark };
  border: 0;
  border-radius: 40px;
  color: ${({ darkMode, theme }) =>
    darkMode.value ? theme.colors.light : theme.colors.dark
  };
  font-size: ${({ theme }) => theme.fontSize.h5};
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.spacingSm};
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${ ({ darkMode, theme }) => 
      !darkMode.value ? theme.background.light : theme.background.dark };
    border: 1.5px solid ${ ({ darkMode, theme }) => 
      darkMode.value ? theme.background.light : theme.background.dark };
    color: ${ ({ darkMode, theme }) => 
      !darkMode.value ? theme.colors.light : theme.colors.dark };
  }
`;

const Toggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <Button
      type="button"
      aria-pressed={ darkMode.value }
      onClick={ () => darkMode.toggle() }
      darkMode={ darkMode }
    >
      Toggle { darkMode.value ? 'light' : 'dark' } mode
    </Button>
  );
}

export default Toggle;