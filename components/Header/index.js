import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import Nav from '../Nav';
import Logo from './Logo';

const HeaderContainer = styled.header`
  height: 70px;
  border-bottom: 1.5px solid ${({ darkMode, theme }) => darkMode.value ? theme.colors.dark : theme.colors.light };
  display: flex;
  padding-right: ${({ theme }) => theme.spacing.spacingXl};

  @media (${({ theme }) => theme.devices.mobileLg}) {
    min-height: 100px;
  }
`;

const Header = () => {
  const darkMode = useDarkMode(false);

  return (
    <HeaderContainer darkMode={ darkMode }>
      <Logo darkMode={ darkMode }/>
      <Nav />
    </HeaderContainer>
  );
}

export default Header;