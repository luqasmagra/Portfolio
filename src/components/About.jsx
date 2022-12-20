import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="sm:text-left pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Sobre mí
            </p>
            <p className="py-6">// Me interesa</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4">
          <div className="sm:text-left text-lg font-bold">
            <ul>
              <li>
                &#8594; Diseñar y desarrollar soluciones, con nuevas tecnología
                y con foco en la innovación y la performance.
              </li>
              <li>
                &#8594; Colaborar en el desarrollo de aplicaciones web
                escalables y con alto tráfico de punta a punta.
              </li>
              <li>
                &#8594; Identificar y brindar soluciones a situaciones
                complejas, sosteniendo la calidad del código.
              </li>
              <li>
                &#8594; Trabajar en desafíos técnicos que requieran mucha
                investigación y análisis.
              </li>
              <li>
                &#8594; Participar en proyectos dinámicos y disruptivos que
                generen valor agregado a las necesidades de negocio del cliente.
              </li>
              <li>
                &#8594; Utilizar buenas prácticas de programación, identificar
                problemas y proponer mejoras en un equipo de desarrollo.
              </li>
            </ul>
          </div>
          <div className="mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
