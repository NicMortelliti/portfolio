import styled from "styled-components";

const bgColor = ({ theme }) => theme.bgColor;
const color = ({ theme }) => theme.color;
const accent = ({ theme }) => theme.accent;
const transTime = "0.3s";
const borderThickness = "4px";

// Button template
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
    transform: translateY(${borderThickness});
  }
`;

// Primary button style
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
    transform: translateY(${borderThickness});
  }
`;

// Link template
export const Link = styled.a`
  text-decoration: none;
  background: transparent;
  color: ${color};
  border-bottom: ${borderThickness} solid transparent;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.8;

  &:hover {
    transition: color ${transTime};
    color: ${accent};
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

export const SocialButton = styled(Link)`
  font-size: 2.5rem;
  line-height: 3rem;

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
