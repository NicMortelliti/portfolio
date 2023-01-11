import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


body {
  background: ${({ theme }) => theme.bgColor || "black"};
  font-family: 'Play', sans-serif;
}
`;