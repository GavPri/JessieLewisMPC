import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import faqsData from "../../data/faq-data/FaqsData";

const FaqsAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(false);

  const handleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };

  return (
    <div className="w-full h-fit mt-4">
      {faqsData.map((faq, index) => (
        <>
          <div key={index} className="w-10/12 h-fit rounded-md bg-lightest text-darkest py-4 px-6 hover:cursor-pointer mb-4">
            <div
              className="flex justify-between items-center relative"
              onClick={handleAccordion}
            >
              <p>{faq.question}</p>
              <p
                className={
                  openAccordion
                    ? "rotate-45 transition-all duration-300 ease-in-out"
                    : "transition-all duration-300 ease-in-out"
                }
              >
                <AiOutlinePlus size={20} />
              </p>
            </div>
            {/* Answer Div */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openAccordion ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <p
                className={`font-poppins transition-all duration-500 ${
                  openAccordion ? "opacity-100" : "opacity-0"
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
