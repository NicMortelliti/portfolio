import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr auto;
  min-height: 100vh; /* In case dvh isn't supported by browser */
  min-height: 100dvh;
  margin: 0 80px;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

export const HeaderSection = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  display: grid;
  place-items: center;
`;

export const MainSection = styled.div`
  grid-area: main;
  min-height: 100vh; /* Make each section at least the height of the viewport*/
  min-height: 100dvh;
  display: grid;
  place-items: center;
  align-content: center;
`;

export const MemojiSection = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: grid;
  place-items: start;

  img {
    max-width: 20vh;
    height: auto;
  }
`;
