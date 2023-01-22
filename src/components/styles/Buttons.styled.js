import styled from "styled-components";

const color = ({ theme }) => theme.color;
const accent = ({ theme }) => theme.accent;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid ${color};
  color: ${color};
  height: 3em;
  margin: 0.5em;
  padding-left: 2em;
  padding-right: 2em;

  &:hover {
    background-color: #3333330d;
    box-shadow: 2px 2px 2px black;
  }
`;

export const NavButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  border-bottom: 0.5vw solid transparent; /* Prevents page content dipping when button hovered*/
  color: ${color};
  height: 3em;
  margin: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  font-size: 3vw;

  &:hover,
  &:active {
    border-bottom-color: ${accent};
    color: ${accent};
  }
`;
