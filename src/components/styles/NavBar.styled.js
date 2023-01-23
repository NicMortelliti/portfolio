import styled from "styled-components";

const primary = ({ theme }) => theme.primary;

export const NavBar = styled.div`
  position: fixed;
  display: flex;

  padding: 0 3rem;
  gap: 0.5rem;

  background-color: #33333366;
  border-radius: 0.25rem;
  border-top: 4px solid transparent;

  .active {
    pointer-events: none;
    border-bottom: 4px solid ${primary};
  }

  a {
    display: block;
    color: ${primary};

    font-size: medium;

    text-decoration: none;
    align-items: center;
    padding: 1rem;
  }
`;
