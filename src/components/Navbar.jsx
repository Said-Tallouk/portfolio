import { useState, useContext } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { ThemeContext } from "./ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="w-full flex justify-between items-center navbar pt-8">
      <a href="#home"></a>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } transition-colors duration-300 ${
              isDark ? "text-white hover:text-teal-200" : "text-gray-900 hover:text-teal-600"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        {/* Theme Toggle Button - Desktop */}
        <li className="ml-10">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDark
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
        {/* Theme Toggle Button - Mobile */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${
            isDark
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>

        {/* Menu Icon */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Mobile Menu */}
        <div
          className={`${toggle ? "flex" : "hidden"} p-6 ${
            isDark ? "bg-black-gradient" : "bg-white shadow-2xl border border-gray-200"
          } absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } transition-colors duration-300 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;