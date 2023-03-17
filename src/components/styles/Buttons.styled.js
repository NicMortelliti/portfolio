import styled from "styled-components";

const bgColor = ({ theme }) => theme.bgColor;
const color = ({ theme }) => theme.color;
const accent = ({ theme }) => theme.accent;
const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;
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
  width: 100%;
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
  cursor: pointer;
  text-decoration: none;
  color: ${color};
  border-bottom: ${borderThickness} solid transparent;
  text-align: center;
  font-size: x-large;

  &.active, /* Set color on active buttons */
  &:hover {
    /* Set color on hovered buttons */
    transition: color ${transTime};
    color: ${accent};
  }

  /* Create underline pseudo-element */
  ::after {
    content: "";
    display: block;
    width: 0;
    height: ${borderThickness};
    background-color: ${accent};
    transition: width ${transTime};
  }

  &.active::after, /* Show underline on active buttons */
  :hover::after {
    /* Show underline on hovered buttons */
    width: 100%;
  }
`;

export const SocialButton = styled(Link)`
  font-size: 2.5rem;
  line-height: 3rem;
  margin: 20px 0;

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

export const NavLink = styled(Link)`
  @media (max-width: ${mobileWidthLimit}) {
    display: none;
  } ;
`;

export const NavLinkExtended = styled(Link)`
  margin: 20px 0;
`;
