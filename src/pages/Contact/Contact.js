import React from "react";
import { Socials } from "../../components/ui/Buttons/index";
import ContactForm from "./ContactForm";

// Styled components
import { Wrapper } from "../../components/styles/Contact/Contact.styled";
import { PageTitle } from "../../components/styles/Layout.styled";

const Contact = () => {
  return (
    <Wrapper>
      <PageTitle>Contact Me</PageTitle>
      <ContactForm />
      <Socials />
    </Wrapper>
  );
};

export default Contact;
