import styled from "styled-components";

const dark = ({ theme }) => theme.dark;
const accent = ({ theme }) => theme.accent;

const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;
const transTime = "0.3s";
const borderThickness = "4px";

export const CardContainer = styled.a`
  display: none;

  :hover {
    background-color: #ffffff99;
    backdrop-filter: blur(15px);
    grid-template-areas:
      "title"
      "professional"
      "company"
      "description"
      "tech";
  }
  flex-basis: 100%;
  display: grid;
  max-width: 500px;
  height: 300px;
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

export const CardImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const CardTitle = styled.div`
  grid-area: title;
  color: ${dark};
  font-size: large;
  text-align: left;
`;

export const CardProf = styled.div`
  grid-area: professional;
  background-color: #ffe9e8;
  color: #f26157;
`;

export const CardCompany = styled.div`
  grid-area: company;
  color: ${dark};
`;

export const CardDescription = styled.div`
  grid-area: description;
  color: ${dark};
  border-top: 1px solid ${dark};
`;

export const CardTechNames = styled.div`
  grid-area: tech;
  color: ${dark};
  border-top: 1px solid ${dark};
`;
