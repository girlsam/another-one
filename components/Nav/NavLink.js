import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavListItem = styled.li`
  display: inline-block;
  padding: 0 ${({ theme }) => theme.spacing.spacingSm};

  @media (${({ theme }) => theme.devices.mobileLg}) {
    padding: 0 ${({ theme }) => theme.spacing.spacingLg};
  }
`;

const NavLink = ({ href, className, children, darkMode }) => {
  const router = useRouter();

  return (
    <NavListItem darkMode={ darkMode }>
      <Link href={ href }>
        <a className={ `${className} ${router.pathname === href ? 'active' : ''}` }>
          { children }
        </a>
      </Link>
    </NavListItem>
  );
}

export default styled(NavLink)`
  height: 100%;
  color: ${({ darkMode, theme }) => darkMode.value ? theme.colors.dark : theme.colors.light };

  &.active {
    border-bottom: 2px solid ${({ theme }) =>  theme.colors.lightAccentColor};
  }

  &:hover {
    background-color: ${ ({ darkMode, theme }) => 
      !darkMode.value ? theme.background.light : theme.background.dark };
  }
`;