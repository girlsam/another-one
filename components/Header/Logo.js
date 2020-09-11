import styled from 'styled-components';

import Skier from '../Svg/Skier';

const Header = styled.h1`
  font-family: 'Bad Script', serif;
  font-weight: lighter;
  margin-left: ${({ theme }) => theme.spacing.spacingSm};
  font-size: 2rem;

   @media (${({ theme }) => theme.devices.mobileLg}) {
    font-size: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: ${({ theme }) => theme.spacing.spacingXl};
`;

const Svg = styled.svg`
  stroke-width: 1px;
  fill: ${({ darkMode, theme }) => darkMode ? theme.background.light : theme.background.dark};
  height: 2rem;
  
  @media (${({ theme }) => theme.devices.mobileLg}) {
    height: 3rem;
  }
`;

const Logo = ({ darkMode }) => (
  <Container>
    <Svg darkMode={ darkMode.value } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.998 511.998">
      <Skier />
    </Svg>
    <Header>girlsam</Header>
  </Container>
);

export default Logo;
