import Link from 'next/link';

import Toggle from '../components/buttons/Toggle';

const Header = () => (
  <header>
    <nav>
      <Link href="/about">
        <a> About </a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
    <Toggle />
  </header>
)

export default Header;