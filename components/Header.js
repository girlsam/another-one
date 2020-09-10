import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import Toggle from './buttons/Toggle';

const HeaderContainer = styled.header`
  height: 10vh;
  border-bottom: 1.5px solid ${({ darkMode, theme }) => darkMode.value ? theme.colors.dark : theme.colors.light };
  display: flex;
  padding-right: ${({ theme }) => theme.spacing.spacingSm};
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: inline-flex;
`;

const NavList = styled.li`
  display: inline-block;
  padding: 0 ${({ theme }) => theme.spacing.spacingSm};
`;

const Header = () => {
  const darkMode = useDarkMode(false);

  return (
    <HeaderContainer darkMode={ darkMode }>
      <NavContainer>
        <Nav>
          <ul>
            <NavList>About</NavList>
            <NavList>Contact</NavList>
          </ul>
        </Nav>
        <Toggle />
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;