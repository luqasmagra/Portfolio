/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { data } from "../data/works.js";

const Work = () => {
  const projects = data;
  return (
    <div name="Trabajos" className="w-full h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Trabajos
          </p>
          <p className="py-6">// Algunos de mis proyectos recientes</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {projects.map(({ image, name, github, live }, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div cursor-pointer"
            >
              <div className="opacity-0 group-hover:opacity-100  duration-700">
                <span className="text-2xl font-bold text-white tracking-wider ">
                  {name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={github} target="_blank" rel="noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-white duration-700"
                    >
                      Repositorio
                    </button>
                  </a>
                  <a href={live} target="_blank" rel="noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-white duration-700"
                    >
                      Deploy
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
