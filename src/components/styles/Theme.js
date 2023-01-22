const sixtyColor = "#d2f5ff";
const thirtyColor = "#F26D68";
const tenColor = "black";
const accent = "#00C9B7";

// Black Panther colors
const purpleLight = "#9666C1";
const purpleDark = "#750E81";
const yellowLight = "#CDA95C";
const yellowDark = "#6F4002";
const redLight = "#8A0008";
const redDark = "#460001";
const greenLight = "#11E5A4";
const greenDark = "#073530";
const blueLight = "#32AAA8";
const blueDark = "#07525B";

export const theme = {
  primary: sixtyColor,
  bgColor: sixtyColor,
  color: tenColor,
  inverse: thirtyColor,
  accent: accent,

  green: greenLight,
  blue: blueLight,
  red: redLight,
  yellow: yellowLight,
  purple: purpleLight,
};

export const green = {
  ...theme,
  gradient: `${greenLight}, #00B68B, #00886F, #005D50, ${greenDark}`,
  bgColor: greenLight,
};

export const blue = {
  ...theme,
  gradient: `${blueLight}, #259395, #197d82, #0f676f, ${blueDark}`,
  bgColor: blueLight,
};

export const red = {
  ...theme,
  gradient: `${redLight}, #790009, #670008, #560005, ${redDark}`,
  bgColor: redLight,
};

export const yellow = {
  ...theme,
  gradient: `${yellowLight}, #B68D45, #9E732E, #875919, ${yellowDark}`,
  bgColor: yellowLight,
};

export const purple = {
  ...theme,
  gradient: `${purpleLight}, #8E53B2, #853FA2, #7D2892, ${purpleDark}`,
  bgColor: purpleLight,
};

