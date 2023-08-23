import React from 'react';
import { Calendly, Socials } from '../../components/ui/Buttons/index';
import ContactForm from './ContactForm';

// Styled components
import { Wrapper } from '../../components/styles/Contact/Contact.styled';
import { PageTitle } from '../../components/styles/Layout.styled';
import { Toggle } from '../../components/ui/Buttons/Toggle';

const Contact = () => {
  return (
    <Wrapper>
      <PageTitle>Contact Me</PageTitle>
      <Toggle opt1='Calendly' opt2='Email' />
      <ContactForm />
      <Socials />
      <Calendly />
    </Wrapper>
  );
};

export default Contact;
