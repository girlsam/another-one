import styled from 'styled-components';

import Header from '../components/Header';

const Section = styled.section`
  min-height: calc(100% - 100px);
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacingLg };
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
