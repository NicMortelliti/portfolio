import React from "react";
import { NavLink } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

// Styled components
import { NavBar as Nav } from "./styles/NavBar.styled";
import { green, red, yellow, purple } from "../components/styles/Theme";

function Navbar({ setTheme }) {
  // External Links
  // Create an array of links with a "to" that points to the external url,
  // as well as the "text" to display.
  // Then map through the links, creating a link for each one.
  const externalLinks = [
    { to: "https://www.linkedin.com/in/nicolas-mortelliti/", text: "LinkedIn" },
    { to: "https://github.com/NicMortelliti", text: "Github" },
    { to: "https://dev.to/nicm", text: "Blog" },
  ];

  const RenderExternalLinks = () =>
    externalLinks.map(({ to, text }, index) => (
      <a key={index} href={to}>
        <h2>
          {text} <FiExternalLink />
        </h2>
      </a>
    ));

  // Internal Links
  // Create an array of links with a "to" that points to the react-router path,
  // as well as the "text" to display as the NavLink.
  // Then map through the links, creating a navlink for each one.
  const links = [
    { to: "/", text: "Home", theme: green },
    { to: "/about", text: "About", theme: red },
    { to: "/portfolio", text: "Portfolio", theme: yellow },
    { to: "/contact", text: "Contact Me", theme: purple },
  ];

  const RenderLinks = () =>
    links.map(({ to, text, theme }, index) => (
      <NavLink
        key={index}
        to={to}
        onClick={() => setTheme(theme)}
        className={({ isActive }) => (isActive ? "active" : undefined)}>
        <h2>{text}</h2>
      </NavLink>
    ));

  return (
    <Nav>
      <RenderLinks />
      <RenderExternalLinks />
    </Nav>
  );
}

export default Navbar;
