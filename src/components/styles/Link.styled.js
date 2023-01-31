import styled from "styled-components";

const bgColor = ({ theme }) => theme.bgColor;
const color = ({ theme }) => theme.color;
const accent = ({ theme }) => theme.accent;

export const LinkCont = styled.div`
  display: flex;
  gap: 1.5rem 1rem;
  overflow: wrap;
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
  padding: 1rem;
  gap: 1rem;
  max-width: 500px;
  text-align: center;
  text-decoration: none;
  background-color: ${color};

  :hover {
    box-shadow: 2px 2px 2px black;
    background-color: ${accent};
    color: ${bgColor};

    * {
      background-color: ${accent};
      color: ${color};
    }
  }

  & > * {
    background-color: ${color};
    color: ${bgColor};
  }

  .icon {
    grid-area: icon;
    font-size: xx-large;
  }

  .title {
    grid-area: title;
    font-weight: bold;
  }

  .desc {
    grid-area: desc;
  }

  .techIcons {
    grid-area: tech;
    font-size: x-large;
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid black;
  }
`;
