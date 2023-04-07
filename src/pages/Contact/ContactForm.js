import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactConfirmation from "./ContactConfirmation";

const ContactForm = () => {
  const form = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5a8wqtr",
        "template_8iy1omo",
        form.current,
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

  const RenderForm = () => {
    return (
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" />
        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="" cols="30" rows="10" />
        <input type="submit" value="Send" />
      </form>
    );
  };

  return (
    <div>{showConfirmation ? <ContactConfirmation /> : <RenderForm />}</div>
  );
};

export default ContactForm;
