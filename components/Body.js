import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  background-image: linear-gradient(
    transparent 0%, 
    transparent 45%, 
    ${({ theme }) => theme.colors.lightAccentColor} 45%, 
    ${({ theme }) => theme.colors.lightAccentColor} 90%, 
    transparent 90%
  );
`;

const Body = ({ children }) => (
  <Section>
    <H1 className="title">Hey, world! I'm Sam.</H1>
    { children }
  </Section>
);

export default Body;
