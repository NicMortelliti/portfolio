import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactConfirmation from './ContactConfirmation';

// Styled components
import { Form } from '../../components/styles/Contact/Contact.styled';
import { Button } from '../../components/styles/Buttons.styled';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    message: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [sendBtnIsDisabled, setSendBtnIsDisabled] = useState(true);

  // emailJS uses useRef to send current form state.
  const form = useRef();

  // Set send button to enabled if all form fields
  // are populated.
  useEffect(() => {
    if (formData.userName && formData.userEmail && formData.message) {
      setSendBtnIsDisabled(false);
    } else {
      setSendBtnIsDisabled(true);
    }
  }, [formData]);

  // Function to update the form data state with user input
  const updateFormData = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Function to send email containing user-entered form data
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5a8wqtr',
        'template_8iy1omo',
        form.current,
        'PLVv2FFJV86IooiJ1'
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === 'OK') {
            setShowConfirmation(true);
          }
        },
        (error) => {
          alert(
            'Something went wrong. Please contact me through my social media links instead.'
          );
        }
      );
  };

  return (
    <div>
      {showConfirmation ? (
        <ContactConfirmation />
      ) : (
        <Form ref={form} onSubmit={(e) => sendEmail(e)}>
          <label htmlFor='userName'>Name*</label>
          <input
            type='text'
            name='userName'
            placeholder='Name'
            value={formData.userName}
            onChange={updateFormData}
          />
          <label htmlFor='userEmail'>Email*</label>
          <input
            type='email'
            name='userEmail'
            placeholder='Email'
            value={formData.userEmail}
            onChange={(e) => updateFormData(e)}
          />
          <label htmlFor='message'>Message*</label>
          <textarea
            name='message'
            placeholder='Message'
            id=''
            cols='25'
            rows='5'
            value={formData.message}
            onChange={(e) => updateFormData(e)}
          />
          <Button disabled={sendBtnIsDisabled} type='submit'>
            Send
          </Button>
          <div />
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
