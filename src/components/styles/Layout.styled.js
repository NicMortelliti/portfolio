import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100dvh;
  min-height: 100vh; /* In case dvh isn't supported by browser */
  grid-template-areas:
    "landing"
    "about"
    "portfolio"
    "contact";
`;

export const Section = styled.div`
  grid-area: ${({ section }) => section};
  min-height: 100dvh;
  min-height: 100vh; /* Make each section at least the height of the viewport*/
`;
