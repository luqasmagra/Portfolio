import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4"
    >
      <div className="pb-8">
        <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
          Contacto
        </p>
      </div>
      <div>
        <ul className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          <li className="w-[160px] h-[60px] flex justify-between items-center  md:hover:scale-110 duration-500  bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/luqasmagra/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center  md:hover:scale-110 duration-500  bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/luqasmagra"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center  md:hover:scale-110 duration-500  bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:luqasmagra@gmail.com"
              rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center  md:hover:scale-110 duration-500  bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1F8ldz9nZdMlRGP6twTmJyQBIK1cIDPyy/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              Resumen <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
