import styled from "styled-components";

const dark = ({ theme }) => theme.dark;
const light = ({ theme }) => theme.light;
const accent = ({ theme }) => theme.accent;

const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;
const transTime = "0.3s";
const borderThickness = "4px";

export const LinkCont = styled.div`
  gap: 1.5rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${mobileWidthLimit}) {
    margin: 0 30px;
  }
`;

export const Link = styled.a`
  flex-basis: 100%;
  display: grid;
  grid-template-areas:
    "icon"
    "title"
    "desc"
    "tech";
  grid-template-rows: auto auto auto 1fr;
  gap: 1rem;
  max-width: 500px;
  text-align: center;
  text-decoration: none;
  background-color: ${light};
  border: 1px solid ${dark};
  box-shadow: 2px 2px 5px black;

  ::after {
    content: "";
    display: block;
    width: 0;
    height: 6px;
    background-color: ${accent};
    transition: width ${transTime};
  }

  :hover::after {
    width: 100%;
  }

  :active {
    transform: translate(${borderThickness}, ${borderThickness});
    box-shadow: none;
  }

  * {
    background-color: transparent;
    color: ${dark};
  }

  .icon {
    grid-area: icon;
    font-size: xx-large;
    padding-top: 1rem;
  }

  .title {
    grid-area: title;
    font-weight: bold;
    padding: 0 1rem;
  }

  .desc {
    grid-area: desc;
    padding: 0 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${dark};
  }

  div {
    grid-area: tech;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 0.5rem;
  }
`;

export const ProfessionalTag = styled.div`
  position: absolute;
  margin: 5px;
  background-color: #ffe9e8;
  border: 2px solid #f26157;
  color: #f26157;
  padding: 10px;
`;
