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
  /* background: ${({ theme }) => theme.bgColor}; */
  animation: fadein 2s;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  animation: sunrise 4s ease-in-out infinite;
  background: radial-gradient(
      circle at center bottom,
      #ff9a00,
      #ffa600,
      #ffb200,
      #ffbd00,
      #ffc900,
      #ecd61d,
      #d9e236,
      #c5ec4f,
      #9cf57e,
      #77faaa,
      #5dfcd2,
      #5ffbf1
    );
  
    @keyframes sunrise {
    0% {
      background-position: bottom;
    }
    50% {
      background-position: top;
    }
    100% {
      background-position: bottom;
    }
  }
}
`;

export default GlobalStyles;
