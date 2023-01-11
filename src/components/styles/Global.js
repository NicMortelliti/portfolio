import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-family: 'Play', sans-serif;
  font-weight: 400;
 
  background: ${({ theme }) => theme.bgColor || "black"};
  color: ${({ theme }) => theme.color || "black"};;
}
`;

export default GlobalStyles;
