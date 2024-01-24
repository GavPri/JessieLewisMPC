import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-[800px] bg-darkest m-auto mt-24">
      <form className="max-w-[80%] m-auto">
        <div>
          <label htmlFor="name" className="hidden">
            Your full name:
          </label>
          <input type="text" placeholder="Your full name" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
