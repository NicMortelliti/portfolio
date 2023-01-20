import styled from "styled-components";

const color = ({ theme }) => theme.color;

export const Button = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.accent};
  border: 1px solid ${color};
  color: ${color};
  height: 3em;
  margin: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
`;

export const NavButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  border-bottom: 0.5vw solid transparent; /* Prevents page content dipping when button hovered*/
  color: ${({ theme }) => theme.color};
  height: 3em;
  margin: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  font-size: 3vw;

  &:hover,
  &:active {
    border-bottom-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;
