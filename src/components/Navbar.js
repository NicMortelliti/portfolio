import React from "react";

import Button from "./Button";

// External Links
const resumeURL =
  "https://drive.google.com/file/d/14YPdAxf0GCHst7gSb9p4TZAn32ud2GfI/view?usp=sharing";
const linkedInURL = "https://www.linkedin.com/in/nicolas-mortelliti/";
const githubURL = "https://github.com/NicMortelliti";

function Navbar() {
  return (
    <div>
      <Button url={resumeURL} value="Resume" ui="social" />
      <Button url={linkedInURL} value="LinkedIn" ui="social" />
      <Button url={githubURL} value="Github" ui="social" />
    </div>
  );
}

export default Navbar;
