/* color scheme */
const lightModeBg = '#FFFEFE';
const darkModeBg = '#121212';

const lightModeFontColor = darkModeBg;
const darkModeFontColor = lightModeBg;

const lightAccentColor = '#9F75EB';

/* font sizes */
const baseFontSize = '1rem';
const p = baseFontSize;

const h1 = '2.5rem';
const h2 = '1.5rem';
const h3 = '1.15rem';
const h4 = baseFontSize;
const h5 = '0.875rem';
const h6 = '0.75rem';

/* font weight */
const headerFontWeight = 'bolder';

/* spacing */
const spacingXl = '2rem';
const spacingLg = '1.5rem';
const spacingBase = '1rem';
const spacingMd = '0.75rem';
const spacingSm = '0.5rem';
const spacingXs = '0.25rem';

const theme = {
  colors: {
    lightAccentColor,
    light: lightModeFontColor,
    dark: darkModeFontColor,
  },
  background: {
    light: lightModeBg,
    dark: darkModeBg
  },
  fontSize: { baseFontSize, p, h1, h2, h3, h4, h5, h6 },
  spacing: { spacingXl, spacingLg, spacingBase, spacingLg, spacingMd, spacingSm, spacingXs },
};

export default theme;