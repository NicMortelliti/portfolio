import styled from "styled-components";

const bgColor = ({ theme }) => theme.accent;
const light = ({ theme }) => theme.white;
const dark = ({ theme }) => theme.black;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${light};
  border: 2px solid ${bgColor};
  border-radius: 5px;
  color: ${bgColor};
  box-shadow: 2px 2px 2px ${dark};
  margin: 1rem;
  padding: 1.5rem;
  font-size: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.white};
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

export const ThemeButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  margin: 1rem;
  padding: 1.5rem;
  font-size: 2rem;

  &:active {
    transform: translate(2px, 2px);
  }
`;
