import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-[800px] bg-darkest m-auto mt-24">
      <form className="max-w-[80%] m-auto p-6">
        <div className="max-w-full">
          <label htmlFor="name" className="hidden">
            Your full name:
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
          />
        </div>
        <div className="max-w-full">
          <label htmlFor="email" className="hidden">
            Your email
          </label>
          <input
            type="text"
            placeholder="Email address"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
