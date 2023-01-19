import styled from "styled-components";

export const Wrapper = styled.a`
  display: grid;
  grid-template-areas:
    "icon"
    "title"
    "desc";
  grid-template-rows: 1fr auto auto;

  margin: 2rem;
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
`;
