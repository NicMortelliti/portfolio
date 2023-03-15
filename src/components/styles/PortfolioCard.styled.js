import styled from "styled-components";

const dark = ({ theme }) => theme.dark;
const color = ({ theme }) => theme.color;

export const Card = styled.a`
  display: grid;
  grid-template-areas:
    "background"
    "title";
  grid-template-rows: 1fr auto;
  background-color: #ffffff99;
  backdrop-filter: blur(15px);
  text-decoration: none;
  border: 1px solid ${dark};
  color: ${dark};
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

export const Hover = styled.div`
  opacity: 0;
  transition: opacity 350ms ease;
`;

export const Paragraph = styled.p`
  transform: translate3d(0, 50px, 0);
  transition: transform 350ms ease;
`;

export const Description = styled.p`
  transform: translate3d(0, 50px, 0);
  transition: transform 350ms ease;
  font-style: italic;
  text-align: left;
`

export const CTA = styled.a`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const BigTitle = styled.h2`
  grid-area: title;
  color: ${color};
  background-color: ${dark}55;
  backdrop-filter: blur(15px);
  padding: 0.5rem;
`;

export const Background = styled.div`
  grid-area: background;
  display: grid;
  grid-template-areas:
    "displayover"
    "professionaltag";
  grid-template-rows: 1fr auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  color: ${dark};
  position: relative;
  width: 400px;
  height: 300px;
  cursor: pointer;

  &:hover ${DisplayOver} {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(15px);
  }

  &:hover ${Paragraph}, &:hover ${Description} {
    transform: translate3d(0, 0, 0);
  }

  &:hover ${Hover} {
    opacity: 1;
  }
`;

export const CardProf = styled.div`
  grid-area: professionaltag;
  background-color: #ffe9e8;
  color: #f26157;
  justify-content: start;
  align-items: start;
`;
