import styled from "styled-components";

const dark = ({ theme }) => theme.dark;
const light = ({ theme }) => theme.light;
const accent = ({ theme }) => theme.accent;

const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;
const transTime = "0.3s";
const borderThickness = "4px";

export const Card = styled.a`
  background-color: #ffffff99;
  backdrop-filter: blur(15px);
  grid-template-areas:
    "displayover"
    "company"
    "professional"
    "title";
  flex-basis: 100%;
  display: grid;
  text-decoration: none;
  border: 1px solid ${dark};
  box-shadow: 2px 2px 5px black;
  color: ${dark};
  gap: 1rem;

  /* Override the global paragraph setting */
  p {
    text-align: center;
  }
`;

export const DisplayOver = styled.a`
  grid-area: displayover;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  z-index: 2;
  transition: background-color 350ms ease;
  background-color: transparent;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  text-decoration: none;
  color: ${dark};
`;

export const BigTitle = styled.h2`
  grid-area: title;
  text-transform: uppercase;
  color: ${dark};
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
`;

export const Hover = styled.div`
  opacity: 0;
  transition: opacity 350ms ease;
`;

export const SubTitle = styled.h4`
  grid-area: company;
  transform: translate3d(0, 50px, 0);
  transition: transform 350ms ease;
`;

export const Paragraph = styled.p`
  transform: translate3d(0, 50px, 0);
  transition: transform 350ms ease;
`;

export const CTA = styled.a`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const Background = styled.div`
  grid-template-areas:
    "displayover"
    "company"
    "professional"
    "title";
  flex-basis: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  position: relative;
  width: 300px;
  height: 400px;
  cursor: pointer;
  background-image: ${({ image }) => `url(${image})`};

  &:hover ${DisplayOver} {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(15px);
  }

  &:hover ${SubTitle}, &:hover ${Paragraph} {
    transform: translate3d(0, 0, 0);
  }

  &:hover ${Hover} {
    opacity: 1;
  }
`;

export const CardProf = styled.div`
  grid-area: professional;
  background-color: #ffe9e8;
  color: #f26157;
`;
