import styled from "styled-components";

// Colors
const bgColor = ({ theme }) => theme.bgColor;
const color = ({ theme }) => theme.color;
const accent = ({ theme }) => theme.accent;

const transTime = "0.3s";

const borderThickness = "4px";

const ButtonTemplate = styled.button`
  cursor: pointer;
  background: transparent;
  color: ${color};

  &:hover {
    background: ${accent};
  }
  p:hover {
    transition: color ${transTime};
    color: ${accent};
  }

  :active {
    transform: translateY(4px);
  }
`;

export const Button = styled(ButtonTemplate)`
  background: ${bgColor};
  border: 2px solid ${color};
  border-radius: 5px;
  box-shadow: 2px 2px 2px black;
  margin: 1rem;
  padding: 1.5rem;
  font-size: 1.5rem;

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

export const ThemeButton = styled(ButtonTemplate)`
  border: none;
  padding: 0.35rem;
  width: 80px;
  height: 80px;
  font-size: xx-large;

  :hover {
    background: transparent;
  }

  p:hover {
    transition: color ${transTime};
    color: ${accent};
  }

  :active {
    transform: none;
  }

  p:active {
    transform: translateY(4px);
  }
`;

export const SocialButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: ${color};
  border-bottom: ${borderThickness} solid transparent;

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
    height: ${borderThickness};
    background: ${accent};
    transition: width ${transTime};
  }

  :hover::after {
    width: 100%;
  }

  :active {
    transform: translateY(${borderThickness});
  }
`;

export const CopyField = styled(ButtonTemplate)`
  border: none;
  border-bottom: ${borderThickness} solid transparent;
  width: 26ch;
  line-height: 2;

  :hover {
    transition: color ${transTime};
    color: ${accent};
    background: transparent;
  }

  ::after {
    content: "";
    display: block;
    width: 0;
    height: ${borderThickness};
    background-color: ${accent};
    transition: width ${transTime};
  }

  :hover::after {
    width: 100%;
  }
`;
