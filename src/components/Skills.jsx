import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import express from "../assets/express.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import PostgreSQL from "../assets/postgresql.png";
import Sequelize from "../assets/sequelize.png";
import Next from "../assets/next.png";
import Slack from "../assets/slack.png";
import Stripe from "../assets/stripe.png";
import Figma from "../assets/figma.png";
import Auth0 from "../assets/auth0.png";
import Jira from "../assets/jira.png";
import Redux from "../assets/redux.png";
import Mongo from "../assets/mongodb.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Tecnologias
          </p>
          <p className="py-4">// Tecnologias con las que he trabajado</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JS icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="NODE icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="REACT icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Redux} alt="REDUX icon" />
            <p className="my-4">REDUX</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="TAILWIND icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={express} alt="EXPRESS icon" />
            <p className="my-4">EXPRESS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Auth0} alt="AUTH0 icon" />
            <p className="my-4">AUTHO</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Stripe} alt="STRIPE icon" />
            <p className="my-4">STRIPE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PostgreSQL} alt="PSQL icon" />
            <p className="my-4">POSTGRESQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Sequelize}
              alt="SEQUELIZE icon"
            />
            <p className="my-4">SEQUELIZE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GITHUB icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Slack} alt="SLACK icon" />
            <p className="my-4">SLACK</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Jira} alt="JIRA icon" />
            <p className="my-4">JIRA</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Figma} alt="FIGMA icon" />
            <p className="my-4">FIGMA</p>
          </div>
        </div>
        <div>
          <p className="py-4">// Tecnologias que tengo algun conocimiento</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Next} alt="NEXT icon" />
            <p className="my-4">NEXT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="MONGODB icon" />
            <p className="my-4">MONGO DB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
