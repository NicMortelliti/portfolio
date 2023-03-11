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
    "professional icon"
    "company company"
    "title title"
    "description description"
    "tech tech";
  gap: 1rem;
  max-width: 500px;
  text-decoration: none;
  background-color: white;
  border: 1px solid ${dark};
  box-shadow: 2px 2px 5px black;
`;

export const CardProf = styled.div`
  grid-area: professional;
  border: 1px dashed red;
`;

export const CardIcon = styled.svg`
  grid-area: icon;
  font-size: xx-large;
  padding-top: 1rem;
`;

export const CardCompany = styled.div`
  grid-area: company;
  color: red;
`;

export const CardTitle = styled.div`
  grid-area: title;
  color: orange;
`;

export const CardDescription = styled.div`
  grid-area: description;
  color: blue;
`;

export const CardTechNames = styled.div`
  grid-area: tech;
  color: magenta;
`;
