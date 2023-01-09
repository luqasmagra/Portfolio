import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Whatsapp from "../assets/wsp.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const menuNavigation = [
    "Home",
    "Sobre mi",
    "Tecnologias",
    "Trabajos",
    "Contacto",
  ];
  return (
    <div className="fixed mx-auto w-full h-[80px] flex justify-around items-center px-4 bg-[#0a192f] text-gray-300">
      <a
        className="fixed right-6 bottom-6 w-20 h-20 text-green"
        href="https://wa.me/543584380680"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Whatsapp} alt="wsp icon" />
      </a>
      <div className="font-bold text-xl border-b-4 border-pink-600 cursor-pointer hover:border-gray-300 transition hover:text-pink-600 duration-700">
        <h1>luqasmagra</h1>
      </div>
      <ul className="hidden md:flex">
        {menuNavigation.map((item, index) => (
          <li key={index}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              className="font-bold cursor-pointer hover:text-pink-600 rounded p-2 duration-700"
            >
              {item}
            </Link>
          </li>
        ))}
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
        {menuNavigation.map((item, index) => (
          <li className="py-6 text-4xl" key={index}>
            <Link onClick={handleClick} to={item} smooth={true} duration={500}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
