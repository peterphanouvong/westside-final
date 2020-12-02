import React, { useState } from "react";
import * as emailjs from "emailjs-com";

const Contact = () => {
  emailjs.init("user_3q8sb1ukWuDc69NsZ6voQ");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o54nffk",
        "template_mey0qhp",
        e.target,
        "user_3q8sb1ukWuDc69NsZ6voQ"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-section">
      <h2>FIND OUT MORE</h2>
      <p>
        Before becoming a member we'd love for you to join in on the action and
        meet the gang!
        <br />
        Be sure to reach out so we can arrange a session for you to swing by and
        play!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            placeholder="name"
            name="from_name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            onChange={handleEmailChange}
            type="email"
            name="reply_to"
            placeholder="email"
            value={email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Message</label>
          <textarea
            onChange={handleMessageChange}
            placeholder="message"
            value={message}
            name="message"
          />
        </div>

        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default Contact;
