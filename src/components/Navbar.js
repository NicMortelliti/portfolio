import React from "react";
import { NavLink } from "react-router-dom";

// Styled components
import { NavBar as Nav } from "./styles/NavBar.styled";

// External Links
const linkedInURL = "https://www.linkedin.com/in/nicolas-mortelliti/";
const githubURL = "https://github.com/NicMortelliti";

// Create an array of links with a "to" that points to the react-router path,
// as well as the "text" to display as the NavLink.
// Then map through the links, creating a navlink for each one.
const links = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/portfolio", text: "Portfolio" },
];

const RenderLinks = () =>
  links.map(({ to, text }) => (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : undefined)}>
      {text}
    </NavLink>
  ));

function Navbar() {
  return (
    <Nav>
      <RenderLinks />
      <a href={linkedInURL}>LinkedIn</a>
      <a href={githubURL}>Github</a>
    </Nav>
  );
}

export default Navbar;
