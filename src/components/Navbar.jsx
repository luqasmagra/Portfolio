import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Whatsapp from "../assets/wsp.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-around items-center px-4 bg-[#0a192f] text-gray-300">
      <a
        className="fixed right-6 bottom-6 w-20 h-20 text-green"
        href="https://wa.me/543584380680"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Whatsapp} alt="wsp icon" />
      </a>
      <div className="font-bold text-xl border-b-4 border-pink-600">
        <h1>luqasmagr</h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:bg-[#ccd6f6] font-bold hover:text-pink-600 rounded p-2 duration-700"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:bg-[#ccd6f6] font-bold hover:text-pink-600 rounded p-2 duration-700"
          >
            Sobre mí
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:bg-[#ccd6f6] font-bold hover:text-pink-600 rounded p-2 duration-700"
          >
            Tecnologias
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hover:bg-[#ccd6f6] font-bold hover:text-pink-600 rounded p-2 duration-700"
          >
            Trabajos
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:bg-[#ccd6f6] font-bold hover:text-pink-600 rounded p-2 duration-700"
          >
            Contacto
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
