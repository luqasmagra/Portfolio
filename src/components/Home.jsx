import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hola, mi nombre es</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          LUCAS MAGRA
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Soy desarrollador web full-stack especializado en construir
          excepcionales experiencias digitales. Actualmente estoy enfocado en
          construir aplicaciones web responsivas full-stack
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-700">
              Trabajos
              <span className="group-hover:rotate-90 duration-700">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
