import React from "react";
import { email } from "../../data/bioData";
import { Socials } from "../../components/ui/Buttons/index";

// Styled components
import { Wrapper } from "../../components/styles/Contact/Contact.styled";
import { Link } from "../../components/styles/Buttons.styled";
import { PageTitle } from "../../components/styles/Layout.styled";

const Contact = () => {
  return (
    <Wrapper>
      <PageTitle>Contact Me</PageTitle>
      <Link href={`mailto:${email}`}>{email}</Link>
      <Socials />
    </Wrapper>
  );
};

export default Contact;
