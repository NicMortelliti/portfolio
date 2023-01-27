import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100dvh;
  min-height: 100vh; /* In case dvh isn't supported by browser */
  grid-template-areas:
    "header"
    "landing"
    "about"
    "portfolio"
    "contact";
`;

export const Section = styled.div`
  grid-area: ${({ section }) => section};
  min-height: 100dvh;
  min-height: 100vh; /* Make each section at least the height of the viewport*/
  display: grid;
  place-items: center;
  align-content: center;
`;

export const HeaderSection = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  display: grid;
  place-items: end;
`;

export const MemojiSection = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 999;
  display: grid;
  place-items: start;
`;
