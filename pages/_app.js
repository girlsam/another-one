import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ theme }>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
