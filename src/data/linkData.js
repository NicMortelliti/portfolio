import { RiArticleLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";

export const internalLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/portfolio", text: "Portfolio" },
  { to: "/contact", text: "Contact Me" },
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
