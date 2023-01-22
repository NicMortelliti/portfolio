import styled from "styled-components";

const color = ({ theme }) => theme.color;
const bgColor = ({ theme }) => theme.bgColor;

export const NavBar = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100%;

  background-color: ${bgColor};
  box-shadow: -2px 0 5px black;

  .active {
    background-color: #33333366;
    pointer-events: none;
  }

  a {
    display: flex;
    color: ${color};

    text-decoration: none;
    justify-content: end;
    align-items: center;

    padding: 0 1rem 0 2rem;

    border: 1px solid #33333311;
    border-right: none;
    flex: 1;

    :hover {
      background-color: #33333311;
    }
  }
`;
