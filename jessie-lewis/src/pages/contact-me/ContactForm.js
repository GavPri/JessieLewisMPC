import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-[800px] glass m-auto mt-24">
      <form className="max-w-[80%] m-auto p-6">
        <div className="max-w-full mb-4">
          <label htmlFor="name" className="hidden">
            Your full name:
          </label>
          <input
            required
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
            required
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
            required
            name="services"
            value="services"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-1/2"
          >
            <option value="">Please select a topic</option>
            <option value="1-1 coaching">1-1 coaching</option>
            <option value="Teams & Organizations">Teams & Organizations</option>
            <option value="Speaking Engagements">Speaking Engagements</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="max-w-full mb-4">
          <label htmlFor="email" className="hidden">
            Service Enquiry
          </label>
          <textarea
            on
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
            placeholder="Your question..."
            minLength={16}
            wrap="hard"
            rows={7}
            cols={20}
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-transparent border-2 border-dark rounded-md text-neutral font-bold font-poppins hover:text-lightest hover:bg-neutral hover:border-light transition-all duration-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
