import styled from 'styled-components';

import Header from '../components/Header';

const Section = styled.section`
  min-height: calc(100% - 70px);
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacingLg };

   @media (${({ theme }) => theme.devices.mobileLg}) {
     min-height: calc(100% - 100px);
   }
`;

const Body = ({ children }) => (
  <>
    <Header />
    <Section>
      { children }
    </Section>
  </>
);

export default Body;
