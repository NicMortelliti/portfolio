import { green, blue, yellow, purple } from "../components/styles/Theme";

import { RiArticleLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";

export const internalLinks = [
  { to: "/", text: "Home", theme: green },
  { to: "/about", text: "About", theme: blue },
  { to: "/portfolio", text: "Portfolio", theme: yellow },
  { to: "/contact", text: "Contact Me", theme: purple },
];

export const externalLinks = [
  {
    to: "https://www.linkedin.com/in/nicolas-mortelliti/",
    text: "LinkedIn",
    icon: <RiLinkedinLine />,
  },
  {
    to: "https://github.com/NicMortelliti",
    text: "Github",
    icon: <RiGithubLine />,
  },
  { to: "https://dev.to/nicm", text: "Blog", icon: <RiArticleLine /> },
];
