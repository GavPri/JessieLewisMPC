import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FaqsAccordion = () => {
  return (
    <div className="w-full h-fit mt-4">
      <div className="w-10/12 h-fit rounded-md bg-lightest text-darkest py-4 px-6 hover:cursor-pointer mb-4">
        <div className="flex justify-between items-center mb-4">
          <p>Question One</p>
          <p>
            <AiOutlinePlus size={20} />
          </p>
        </div>
        {/* Answer Div */}
        <div>
          <p>
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
