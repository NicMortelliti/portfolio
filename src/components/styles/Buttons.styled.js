import styled from "styled-components";

const bgColor = ({ theme }) => theme.bgColor;
const color = ({ theme }) => theme.color;
const accent = ({ theme }) => theme.accent;
const transTime = "0.3s";

export const Button = styled.button`
  cursor: pointer;
  background-color: ${bgColor};
  border: 2px solid ${color};
  border-radius: 5px;
  color: ${color};
  box-shadow: 2px 2px 2px black;
  margin: 1rem;
  padding: 1.5rem;
  font-size: 1.5rem;

  &:hover {
    background-color: ${accent};
    color: ${color};
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
  padding: 0.35rem;
  width: 80px;
  height: 80px;
  font-size: xx-large;

  p {
    color: ${color};
  }

  &:active {
    transform: translate(2px, 2px);
  }

  p:hover {
    transition: color ${transTime};
    color: ${accent};
  }
`;

export const SocialButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: ${color};
  border-bottom: 4px solid transparent;

  * {
    font-size: 2.5rem;
  }

  :hover {
    transition: color ${transTime};
    color: ${accent};
  }

  ::after {
    content: "";
    display: block;
    width: 0;
    height: 4px;
    background: ${accent};
    transition: width ${transTime};
  }

  :hover::after {
    width: 100%;
  }
`;
