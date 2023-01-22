import styled from "styled-components";

export const LinkCont = styled.div`
  display: grid;
  grid-auto-flow: ${({ columns }) => (columns ? "column" : undefined)};
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 1rem; ;
`;

export const Link = styled.a`
  display: grid;
  grid-template-areas:
    "icon"
    "title"
    "desc"
    "tech";
  grid-template-rows: 1fr auto auto auto;

  /* margin: 1rem; */
  padding: 1rem;

  max-width: 500px;

  text-align: center;
  text-decoration: none;

  border: 1px solid ${({ theme }) => theme.color};

  :hover {
    background-color: #3333330d;
    box-shadow: 2px 2px 2px black;
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
