import React from "react";
import { NavLink } from "react-router-dom";

// Data
import { internalLinks } from "../data/linkData";

// Styled components
import { NavBar as Nav } from "./styles/NavBar.styled";

function Navbar() {
  // Internal Links
  // Create an array of links with a "to" that points to the react-router path,
  // as well as the "text" to display as the NavLink.
  // Then map through the links, creating a navlink for each one.
  const RenderLinks = () =>
    internalLinks.map(({ to, text }, index) => (
      <NavLink
        key={index}
        to={to}
        className={({ isActive }) => (isActive ? "active" : undefined)}>
        <h2>{text}</h2>
      </NavLink>
    ));

  return (
    <Nav>
      <RenderLinks />
    </Nav>
  );
}

export default Navbar;
