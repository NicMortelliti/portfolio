import React from "react";
import { email } from "../../data/bioData";
import { Socials } from "../../components/ui/Buttons/index";

// Styled components
import { Wrapper } from "../../components/styles/Landing.styled";
import { Link } from "../../components/styles/Buttons.styled";

const Contact = () => {
  return (
    <Wrapper>
      <h1>Let's work together</h1>
      <Link href={`mailto:${email}`}>{email}</Link>
      <Socials />
    </Wrapper>
  );
};

export default Contact;
