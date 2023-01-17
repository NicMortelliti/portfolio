import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  background-color: lightcoral;

  a {
    display: flex;
    color: ${({ theme }) => theme.color};

    text-decoration: none;
    justify-content: end;
    align-items: center;

    padding: 0 1rem 0 2rem;

    border: 2px solid white;
    border-right: none;
    flex: 1;
  }
`;
