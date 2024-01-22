import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FaqsAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(false);

  const handleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };

  return (
    <div className="w-full h-fit mt-4">
      <div className="w-10/12 h-fit rounded-md bg-lightest text-darkest py-4 px-6 hover:cursor-pointer mb-4">
        <div
          className="flex justify-between items-center relative"
          onClick={handleAccordion}
        >
          <p>Question One</p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            consequuntur autem ab doloremque obcaecati ducimus! Sed expedita
            error deserunt nesciunt soluta ducimus, iure eveniet libero
            molestiae nobis quia! Obcaecati nemo repudiandae ipsa velit sint
            quas sed perspiciatis provident nesciunt, perferendis recusandae
            sequi autem totam et nobis iure nihil qui eius minima ea soluta
            dolorum maxime? Quo reiciendis quas sint perferendis vero, totam,
            ullam non fugit soluta nobis eligendi nam possimus aut quasi saepe.
            Adipisci illo itaque qui, eligendi eos minus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqsAccordion;
