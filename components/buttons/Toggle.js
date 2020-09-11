import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

import Sun from '../Svg/Sun';
import Moon from '../Svg/Moon';

const Button = styled.button`
  width: 5rem;
  height: 3rem;
  background-color: ${ ({ darkMode, theme }) => 
    darkMode.value ? theme.background.light : theme.background.dark };
  border: 0;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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
    
    svg {
      fill: ${({ darkMode, theme }) => darkMode.value ? theme.background.light : theme.background.dark};
    }
  }

  span {
    display: none;
  }

  @media (min-width: 1024px) {
    span {
      display: block;
    }

    width: 12rem;
    margin-left: 0;
  }
`;

const Svg = styled.svg`
  height: 1.5rem;
  fill: ${({ darkMode, theme }) => !darkMode.value ? theme.background.light : theme.background.dark};
  margin-left: 0;

  @media (min-width: 1024px) {
    margin-left: ${({ theme }) => theme.spacing.spacingSm};
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
      aria-labelledby="toggle-text"
    >
      <span id="toggle-text">Toggle { darkMode.value ? 'light' : 'dark' } mode</span>
    <Svg 
      height="512" 
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg" 
      darkMode={ darkMode }
    >
      { darkMode.value 
        ? <Sun/>
        : <Moon />
      }
    </Svg>
    </Button>
  );
}

export default Toggle;