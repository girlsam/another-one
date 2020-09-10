import styled from 'styled-components';

const Section = styled.section`
  min-height: 90vh;
  max-width: 1440px;
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
  padding: ${({ theme }) => theme.spacing.spacingXs };
  font-size: ${({ theme }) => theme.fontSize.h1}
`;

const H2 = styled.h2`
  font-size: ${({theme}) => theme.fontSize.h2};
  padding: ${({ theme }) => theme.spacing.spacingXs};
`;

const Body = ({ children }) => (
  <Section>
    <H1 className="title">Hey, world! I'm Sam.</H1>
    <H2>I've carved out a tiny, little corner of the internet. Welcome!</H2>
    { children }
  </Section>
);

export default Body;
