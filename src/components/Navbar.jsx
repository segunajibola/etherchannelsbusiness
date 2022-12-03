import { useState } from "react";
import {
  FaMoon,
  FaLightbulb,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/navbar/etherchannellogo.png";
import { Link } from "react-router-dom";

const Navbar = ({ handleMode, darkMode }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-20 w-full h-[80px] shadow-lg flex justify-between items-center px-4 bg-[#2b4b77] dark:bg-gray-500 text-gray-300 dark:text-gray-800">
      <Link
        className="cursor-pointer"
        to="/"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={Logo}
          alt="Logo Image"
          style={{ width: "80px", height: "80px", borderRadius: "50px" }}
        />
      </Link>

      {/* menu */}
      <ul className="hidden md:flex space-x-10 text-md font-semibold tracking-wide border-4 border-red-400">
        <li className="cursor-pointer">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/services">Services</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="border-4 border-red-500">
          <button className="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white border-4 border-red-500">
            Dropdown
          </button>

          <span
            className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg border-4 border-red-500"
          >
            <a className="px-5 py-3 hover:bg-gray-200" href="#">
              About Us
            </a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#">
              Contact Us
            </a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#">
              Privacy Policy
            </a>
            </span>
        </li>
      </ul>

      {/* Dark/Light Mode */}
      <div
        onClick={handleMode}
        className="z-30 ml-72 sm:ml-[30rem] md:ml-0 cursor-pointer dark:text-gray-800"
      >
        {darkMode ? <FaMoon size={27} /> : <FaLightbulb size={27} />}
      </div>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-30 cursor-pointer dark:text-gray-800"
      >
        {!nav ? <FaBars size={22} /> : <FaTimes size={22} />}
      </div>

      {/* Mobile menu */}
      <ul
        id="nav"
        className={`top-0 right-0 w-1/2 bg-[#0a192f] p-10 pl-20 text-white fixed h-full z-20 ease-in-out duration-300 flex flex-col justify-center items-center dark:bg-gray-100 dark:text-gray-800 space-y-8 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/about">
            About
          </Link>
        </li>
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/courses">
            Courses
          </Link>
        </li>
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/services">
            Services
          </Link>
        </li>
        <li className="py-2 text-3xl">
          <Link onClick={handleClick} className="cursor-pointer" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
