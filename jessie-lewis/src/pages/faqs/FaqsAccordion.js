import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import faqsData from "../../data/faq-data/FaqsData";

const FaqsAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(-1);

  const handleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="w-full h-fit mt-4 overscroll-y-contain">
      {faqsData.map((faq, index) => (
        <>
          <div
            key={index}
            className="w-10/12   rounded-md text-darkest pb-4 px-6 md:px-0 hover:cursor-pointer mb-4"
          >
            <div
              className={`flex justify-between items-center relative ${
                openAccordion === index
                  ? "pb-2 border-b-2 border-b-darkest transition-all duration-300"
                  : "transition-all duration-300"
              }`}
              onClick={() => handleAccordion(index)}
            >
              <h2 className="font-bold font-poppins">{faq.question}</h2>
              <p
                className={
                  openAccordion
                    ? " transition-all duration-300 ease-in-out"
                    : "rotate-45 transition-all duration-300 ease-in-out"
                }
              >
                <AiOutlinePlus size={20} />
              </p>
            </div>
            {/* Answer Div */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openAccordion === index ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <p
                className={`font-poppins transition-all duration-500 ${
                  openAccordion === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default FaqsAccordion;
