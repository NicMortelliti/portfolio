import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
 
  /* background: ${({ theme }) => theme.bgColor || "black"}; */

  color: ${({ theme }) => theme.color || "black"};;
}

body {
  background-image: radial-gradient(circle, ${({ theme }) => theme.gradient});
  transition: all 0.50s linear;
}
`;

export default GlobalStyles;
