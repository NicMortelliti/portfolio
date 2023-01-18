import styled from "styled-components";

const color = ({ theme }) => theme.color;
const bgColor = ({ theme }) => theme.bgColor;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  background-color: ${bgColor};

  a {
    display: flex;
    color: ${color};

    text-decoration: none;
    justify-content: end;
    align-items: center;

    padding: 0 1rem 0 2rem;

    border: 1px solid ${color};
    border-right: none;
    flex: 1;
  }
`;
