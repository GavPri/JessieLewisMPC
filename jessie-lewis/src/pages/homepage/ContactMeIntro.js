import React from "react";
import contactData from "../../data/contact-data/contactData";
const ContactMeIntro = () => {
  return (
    <div >
      <h1>Contact Me</h1>
      <div>
        {contactData.meansOfContact.map((mean, index) => (
          <>
            <p>{mean.method} <span>{mean.methodIcon}</span></p>
            <p>{mean.methodInfo}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default ContactMeIntro;
