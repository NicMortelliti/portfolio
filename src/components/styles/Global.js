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
  background-image: radial-gradient(circle, #f26d68, #c14d70, #87396c, #4b2a5a, #13193c);
 background-image: linear-gradient(to left top, #f26d68, #fa9187, #ffb3a9, #ffd4cd, #fff5f3);
}
`;

export default GlobalStyles;
