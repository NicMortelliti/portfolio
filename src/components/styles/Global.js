import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
 
  color: ${({ theme }) => theme.color || "black"};;
}

html {
  scroll-behavior: smooth; 
}

body {
  background-image: radial-gradient(circle, ${({ theme }) => theme.gradient});
  animation: fadein 2s;

  animation: animateBg 13s linear infinite;
  background-image: radial-gradient(90deg,#1a5fb4,#f9f06b,#1a5fb4,#f9f06b);
  background-size: 300% 100%;
}
  @keyframes animateBg {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
}

@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
`;

export default GlobalStyles;
