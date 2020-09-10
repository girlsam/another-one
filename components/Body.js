import styled from 'styled-components';

const Section = styled.section`
  min-height: 90vh;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacingLg };
`;

const H1 = styled.h1`
  background-image: linear-gradient(
    transparent 0%, 
    transparent 45%, 
    ${({ theme }) => theme.colors.lightAccentColor} 45%, 
    ${({ theme }) => theme.colors.lightAccentColor} 90%, 
    transparent 90%
  );
  margin: ${({ theme }) => theme.spacing.spacingLg };
  font-size: ${({ theme }) => theme.fontSize.h1}
`;

const H2 = styled.h2`
  font-size: ${({theme}) => theme.fontSize.h3};
  font-weight: normal;
  line-height: 1.5;
  text-align: center;
`;

const Body = ({ children }) => (
  <Section>
    <H1>Hey, world! I'm Sam.</H1>
    <H2>I'm a UI Enginer, and I've carved out this tiny, little corner of the internet.</H2>
    <H2>Thanks for stopping by!</H2>
    { children }
  </Section>
);

export default Body;
