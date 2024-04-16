const dark = '#000';
const light = '#fff';
const accent = '#13c7a8';

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
