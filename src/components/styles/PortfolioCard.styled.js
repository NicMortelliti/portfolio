import styled from "styled-components";

const dark = ({ theme }) => theme.dark;
const light = ({ theme }) => theme.light;
const accent = ({ theme }) => theme.accent;

const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;
const transTime = "0.3s";
const borderThickness = "4px";

export const CardContainer = styled.a`
  flex-basis: 100%;
  display: grid;
  grid-template-areas:
    "icon"
    "professional"
    "company"
    "title"
    "description"
    "tech";
  gap: 1rem;
  max-width: 500px;
  text-decoration: none;
  background-color: white;
  border: 1px solid ${dark};
  box-shadow: 2px 2px 5px black;
  color: ${dark};

  /* Override the global paragraph setting */
  p {
    text-align: center;
  }
`;

export const CardIcon = styled.div`
  grid-area: icon;
  font-size: xx-large;
  padding-top: 1rem;
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

export const CardTitle = styled.div`
  grid-area: title;
  color: ${dark};
  align-items: start;
  justify-content: start;
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
