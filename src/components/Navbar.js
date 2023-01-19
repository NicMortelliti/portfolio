import React from "react";
import { NavLink } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

// Data
import { internalLinks, externalLinks } from "../data/linkData";

// Styled components
import { NavBar as Nav } from "./styles/NavBar.styled";

function Navbar({ setTheme }) {
  // External Links
  // Create an array of links with a "to" that points to the external url,
  // as well as the "text" to display.
  // Then map through the links, creating a link for each one.
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
  const RenderLinks = () =>
    internalLinks.map(({ to, text, theme }, index) => (
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
