const dark = process.env.THEME_DARK || '#000';
const light = process.env.THEME_LIGHT || '#fff';
const accent = process.env.THEME_ACCENT || '#13c7a8';

const appSettings = {
  mobileWidthLimit: '700px',
};

export const lightTheme = {
  ...appSettings,
  dark,
  light,
  bgColor: light,
  color: dark,
  accent,
};

export const darkTheme = {
  ...appSettings,
  dark,
  light,
  bgColor: dark,
  color: light,
  accent,
};
