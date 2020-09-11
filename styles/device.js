const size = {
  mobileSm: '320px',
  mobileMd: '375px',
  mobileLg: '425px',
  tablet: '768px',
  desktopSm: '1024px',
  desktopMd: '1440px',
  desktopLg: '2560px',
};

export const devices = {
  mobileSm: `min-width: ${size.mobileSm}`,
  mobileMd: `min-width: ${size.mobileMd}`,
  mobileLg: `min-width: ${size.mobileLg}`,
  tablet: `min-width: ${size.tablet}`,
  desktopSm: `min-width: ${size.desktopSm}`,
  desktopMd: `min-width: ${size.desktopMd}`,
  desktopLg: `min-width: ${size.desktopLg}`,
};

export default devices;