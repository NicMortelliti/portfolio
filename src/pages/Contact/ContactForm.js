import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactConfirmation from "./ContactConfirmation";

// Styled components
import { Form } from "../../components/styles/Contact/Contact.styled";
import { Button } from "../../components/styles/Buttons.styled";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Destructure state parameters
  const { user_name, user_email, message } = formData;

  // Funtion to update the form data state with user input
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
        "service_5a8wqtr",
        "template_8iy1omo",
        formData,
        "PLVv2FFJV86IooiJ1"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setShowConfirmation(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {showConfirmation ? (
        <ContactConfirmation />
      ) : (
        <Form onSubmit={(e) => sendEmail(e)}>
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={user_name}
            onChange={updateFormData}
          />
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={user_email}
            onChange={(e) => updateFormData(e)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            id=""
            cols="25"
            rows="5"
            value={message}
            onChange={(e) => updateFormData(e)}
          />
          <Button type="submit">Send</Button>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
