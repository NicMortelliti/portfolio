import React from 'react';
import { Calendly, Socials } from '../../components/ui/Buttons/index';
import ContactForm from './ContactForm';

// Styled components
import { Wrapper } from '../../components/styles/Contact/Contact.styled';
import { PageTitle } from '../../components/styles/Layout.styled';
import { Toggle } from '../../components/ui/Buttons/Toggle';

const options = {
  opt1: {
    title: 'Calendly',
    component: <Calendly />,
  },
  opt2: {
    title: 'Email',
    component: <ContactForm />,
  },
};

const Contact = () => {
  return (
    <Wrapper>
      <PageTitle>Contact Me</PageTitle>
      <Toggle options={options} />
      <Socials />
    </Wrapper>
  );
};

export default Contact;
