import styled from "styled-components";

const color = ({ theme }) => theme.color;

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
