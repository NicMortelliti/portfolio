import styled from "styled-components";

import { Bounce as bounce } from "./Animations/Bounce.styled";

const headerFooterHeight = 80;
const bgColor = ({ theme }) => theme.bgColor;
const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  min-height: 100vh; /* In case dvh isn't supported by browser */
  min-height: 100dvh;
  margin: 0 80px;
  grid-template-areas:
    "header"
    "main"
    "footer";

  @media (max-width: ${mobileWidthLimit}) {
    margin: 0;
  }
`;

export const HeaderSection = styled.div`
  grid-area: header;
  position: sticky;
  top: 0;
  display: grid;
  place-items: center;
  height: ${headerFooterHeight}px;
  background-color: ${bgColor};
  z-index: 999;
`;

export const MainSection = styled.div`
  grid-area: main;
  display: grid;
  place-items: center;
  align-content: center;
`;

export const FooterSection = styled.div`
  grid-area: footer;
  height: ${headerFooterHeight}px;
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

export const ThemeSwitcherSection = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;
  place-items: start;
  animation: ${bounce} 10s ease infinite;
`;

export const PageTitle = styled.h1`
  @media (min-width: ${mobileWidthLimit}) {
    display: none;
  }
`;
