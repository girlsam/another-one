import styled from 'styled-components';

import Toggle from './buttons/Toggle';

const Container = styled.header`
  height: 10vh;
  border-bottom: 2px solid black;
`;

const Nav = styled.nav`
  display: inline-flex;
`;

const NavList = styled.li`
  display: inline-block;
`;

const Header = () => {
  return (
    <Container>
      <Nav>
        <ul>
          <NavList>About</NavList>
          <NavList>Contact</NavList>
        </ul>
      </Nav>
      <Toggle />
    </Container>
  );
}

export default Header;