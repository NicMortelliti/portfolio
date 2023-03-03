const dark = "#011627";
const light = "#f1e8e4";
const accent = "#13c7a8";

const appSettings = {
  mobileWidthLimit: "700px",
};

export const lightTheme = {
  ...appSettings,
  dark: dark,
  light: light,
  bgColor: light,
  color: dark,
  accent: accent,
};

export const darkTheme = {
  ...appSettings,
  dark: dark,
  light: light,
  bgColor: dark,
  color: light,
  accent: accent,
};
