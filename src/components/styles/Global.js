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

  transition: all 0.25s linear;

  animation: fadein 2s;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
}
`;

export default GlobalStyles;
