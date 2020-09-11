import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import Toggle from '../buttons/Toggle';
import NavLink from './NavLink';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: space-between;
`;

const FlexContainer = styled.nav`
  height: 100%;
  margin-right: 0;
  
  @media (${({ theme }) => theme.devices.mobileLg}) {
    margin-right: ${({ theme }) => theme.spacing.spacingLg};
  }
`;

const ListContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Nav = () => {
  const darkMode = useDarkMode(false);

  return (
    <NavContainer>
      <FlexContainer>
        <ListContainer>
          <NavLink darkMode={ darkMode } href="/about">
            About
          </NavLink>
          <NavLink darkMode={ darkMode } href="/contact">
            Contact
          </NavLink>
        </ListContainer>
      </FlexContainer>
      <Toggle />
    </NavContainer>
  );
}

export default Nav;