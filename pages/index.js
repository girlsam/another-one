import styled from 'styled-components'

import Body from '../components/Body';

const H1 = styled.h1 `
  background-image: linear-gradient(
    transparent 0%, 
    transparent 45%, 
    ${({ theme }) => theme.colors.lightAccentColor} 45%, 
    ${({ theme }) => theme.colors.lightAccentColor} 90%, 
    transparent 90%
  );
  margin: ${({ theme }) => theme.spacing.spacingLg };
  font-size: ${({ theme }) => theme.fontSize.h1};
`;

const H2 = styled.h2 `
  font-size: ${({theme}) => theme.fontSize.h3};
  font-weight: normal;
  line-height: 1.5;
  text-align: center;
`;

export default function Home() {
  return (
    <main>
      <Body>
        <H1>Hey, world! I'm Sam.</H1>
        <H2>I'm a UI Enginer, and I've carved out this tiny, little corner of the internet.</H2>
      </Body>
    </main>
  );
}
