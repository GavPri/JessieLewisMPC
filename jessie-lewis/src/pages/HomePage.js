import React from "react";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-lightest min-w-screen">
      <h2 className="font-bold font-poppins text-3xl  w-2/3 p-4 text-darkest">
        Mental Mastery For Peak Performance
      </h2>
      <p className="p-4 font-poppins text-dark w-5/6 font-bold">
        Peak performance is a mindset. Let us guide you through proven
        techniques to optimize your cognitive abilities and achieve your goals
      </p>
      <div className="p-4 w-5/6 pt-0">
        <Button type="button" text="Services" />
      </div>
    </div>
  );
};

export default HomePage;
