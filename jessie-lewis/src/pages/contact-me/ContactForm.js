import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-[800px] bg-darkest m-auto mt-24">
      <form className="max-w-[80%] m-auto p-6">
        <div className="max-w-full mb-4">
          <label htmlFor="name" className="hidden">
            Your full name:
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
          />
        </div>
        <div className="max-w-full mb-4">
          <label htmlFor="email" className="hidden">
            Your email
          </label>
          <input
            type="text"
            placeholder="Email address"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
          />
        </div>
        <div className="max-w-full mb-4">
          <label htmlFor="email" className="hidden">
            Service Enquiry
          </label>
          <select
            name="services"
            value="services"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
          >
            <option value="">Please select a topic</option>
            <option value="1-1 coaching">1-1 coaching</option>
            <option value="Teams & Organizations">Teams & Organizations</option>
            <option value="Speaking Engagements">Speaking Engagements</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
