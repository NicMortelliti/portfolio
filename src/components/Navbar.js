import React from "react";

import NavButton from "./buttons/NavButton";

// External Links
const linkedInURL = "https://www.linkedin.com/in/nicolas-mortelliti/";
const githubURL = "https://github.com/NicMortelliti";

function Navbar() {
  return (
    <div>
      <NavButton url={linkedInURL} text="LinkedIn" />
      <NavButton url={githubURL} text="Github" />
    </div>
  );
}

export default Navbar;
