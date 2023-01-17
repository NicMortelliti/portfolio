import React from "react";
import { NavLink } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

// Styled components
import { NavBar as Nav } from "./styles/NavBar.styled";

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
  externalLinks.map(({ to, text }) => (
    <a href={to}>
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
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/portfolio", text: "Portfolio" },
  { to: "/contact", text: "Contact Me" },
];

const RenderLinks = () =>
  links.map(({ to, text }) => (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : undefined)}>
      <h2>{text}</h2>
    </NavLink>
  ));

function Navbar() {
  return (
    <Nav>
      <RenderLinks />
      <RenderExternalLinks />
    </Nav>
  );
}

export default Navbar;
