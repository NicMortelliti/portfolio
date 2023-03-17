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
  display: grid;
  grid-template-areas:
    "companyName"
    "description"
    "tech"
    "attribution"
    "professionalTag";
  grid-template-rows: 1fr;
  height: 100%;
  width: 100%;
  z-index: 2;
  transition: background-color 250ms ease;
  box-sizing: border-box;
  text-decoration: none;
  color: ${dark};
`;

export const Hover = styled.div`
  opacity: 0;
  transition: opacity 250ms ease;
`;

const Paragraph = styled.p`
  transform: translate3d(0, 50px, 0);
  transition: transform 250ms ease;
`;

export const CompanyName = styled(Paragraph)`
  grid-area: companyName;
  padding: 20px 20px 10px;
  font-weight: bold;
`;

export const Description = styled(Paragraph)`
  grid-area: description;
  padding: 0 20px 5px;
  font-style: italic;
`;

export const Tech = styled(Paragraph)`
  grid-area: tech;
  padding: 0 40px;
`;

export const Attribution = styled.a`
  grid-area: attribution;
  color: ${dark};
  width: 100%;
  background-color: #00000022;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

export const BigTitle = styled.h2`
  grid-area: title;
  color: ${color};
  background-color: ${dark}55;
  backdrop-filter: blur(15px);
  padding: 0.5rem;
  z-index: 10;
`;

export const Background = styled.div`
  grid-area: background;
  display: grid;
  grid-template-areas: "displayover";
  grid-template-rows: 1fr auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  color: ${dark};
  position: relative;
  width: 300px;
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

export const CardProfOrPersonal = styled.p`
  grid-area: professionalTag;
  background-color: ${({ isProfessional }) =>
    isProfessional ? `#ffe9e8` : `#c2efb3`};
  color: ${({ isProfessional }) => (isProfessional ? `#f26157` : `#005500`)};
  text-align: center;
  z-index: 10;
`;