import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    question: "",
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // Perform form validation or submission logic
    if (formData.name && formData.email && formData.services) {
      // Form submitted successfully
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
      setErrorMessage("");
    } else {
      // Display error message
      setShowSuccessAlert(false);
      setShowErrorAlert(true);
      setErrorMessage("Please fill in all required fields.");
    window.location.href = "/";
  };

  return (
    <div className="max-w-[800px] m-auto mt-24 glass py-4 rounded-md">
      <h1 className="text-4xl text-darkest px-6 font-extrabold flex items-center justify-start">
        Contact Me
        <span className="ml-4">
          <AiOutlineMail />
        </span>
      </h1>
      <form className="m-auto p-6" onSubmit={handleSubmit}>
        <div className="max-w-full mb-4">
          <label htmlFor="name">Your full name:</label>
          <input
            required
            type="text"
            placeholder="Your full name"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="max-w-full mb-4">
          <label htmlFor="email">Your email:</label>
          <input
            required
            type="text"
            placeholder="Email address"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="max-w-full mb-4">
          <label htmlFor="services">Service Enquiry:</label>
          <select
            required
            name="services"
            value={formData.services}
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-1/2"
            onChange={handleInputChange}
          >
            <option value="">Please select a topic</option>
            <option value="1-1 coaching">1-1 coaching</option>
            <option value="Teams & Organizations">Teams & Organizations</option>
            <option value="Speaking Engagements">Speaking Engagements</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="max-w-full mb-4">
          <label htmlFor="question">Your Question:</label>
          <textarea
            required
            name="question"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
            placeholder="Your question..."
            minLength={16}
            wrap="hard"
            rows={7}
            cols={20}
            value={formData.question}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 rounded-md font-poppins hover:button-hover transition-all duration-500 button active:button-drop"
          onSubmit={handleSubmit}
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
