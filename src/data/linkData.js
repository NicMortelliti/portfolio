import {
  FaBlog as Blog,
  FaGithub as Github,
  FaLinkedin as Linkedin,
} from "react-icons/fa";

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
    icon: <Linkedin />,
  },
  {
    to: "https://github.com/NicMortelliti",
    text: "Github",
    icon: <Github />,
  },
  { to: "https://dev.to/nicm", text: "Blog", icon: <Blog /> },
];
