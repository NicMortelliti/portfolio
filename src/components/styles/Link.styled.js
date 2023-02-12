import styled from "styled-components";

const dark = ({ theme }) => theme.dark;
const light = ({ theme }) => theme.light;
const bgColor = ({ theme }) => theme.bgColor;
const color = ({ theme }) => theme.color;
const accent = ({ theme }) => theme.accent;

const transTime = "0.3s";

const borderThickness = "4px";

export const LinkCont = styled.div`
  gap: 1.5rem 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Link = styled.a`
  flex-basis: 100%;
  display: grid;
  grid-template-areas:
    "icon"
    "title"
    "desc"
    "tech";
  grid-template-rows: 1fr auto auto auto;
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
  }

  .techIcons {
    grid-area: tech;
    font-size: x-large;
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${dark};
  }
`;
