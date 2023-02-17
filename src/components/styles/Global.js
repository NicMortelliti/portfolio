import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
}

html {
  scroll-behavior: smooth; 
}

body {
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.color};
}
`;

export default GlobalStyles;
