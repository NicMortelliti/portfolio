import React from "react";

import Button from "./Button";

// External Links
const linkedInURL = "https://www.linkedin.com/in/nicolas-mortelliti/";
const githubURL = "https://github.com/NicMortelliti";

function Navbar() {
  return (
    <div>
      <Button url={linkedInURL} value="LinkedIn" ui="social" />
      <Button url={githubURL} value="Github" ui="social" />
    </div>
  );
}

export default Navbar;
