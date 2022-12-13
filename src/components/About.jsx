import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Sobre mí
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4">
          <div className="sm:text-left text-lg font-bold">
            <p>
              Me considero una persona apasionada con ganas de trabajar en un
              ambiente profesional para desempeñar mis responsabilidades de la
              manera más óptima posible y seguir desarrollándome tanto personal
              como profesionalmente.
            </p>
          </div>
          <div className="mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
