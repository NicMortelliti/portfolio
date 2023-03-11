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

h1 {
  border-bottom: 4px solid ${({ theme }) => theme.accent};
  padding-bottom: 4px;
}

p {
  font-size: clamp(16px, 18px, 22px);
  text-align: left;
  margin: 10px 30px;
  max-width: 600px;
}
`;

export default GlobalStyles;
