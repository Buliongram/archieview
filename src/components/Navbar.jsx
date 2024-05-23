import React, { useState } from "react";
import { logo } from "../assets/images/images";
import { navLinks } from "../data/navbarLinks";
import { Link } from "react-router-dom";

export default function Navbar() {
  const windowLocation = window.location.pathname;
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <>
      <nav className="bg-[#f1f5f9] py-5 px-4 lg:px-8 flex items-center justify-between relative">
        <Link to={"/"}>
          <img src={logo} className="w-[40px]" alt="" />
        </Link>
        <div className="navLink hidden md:flex items-center gap-4 text-[15px] text-gray-600">
          {navLinks.map((link) => (
            <Link
              className={`py-2.5 ${
                windowLocation === link.path
                  ? "bg-white/50 text-blue-500"
                  : "hover:bg-white/30"
              }  hover:text-blue-500 px-4 rounded-full `}
              key={link.id}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-5">
            <Link
              to={"/login"}
              className="py-2 text-sm md:text-lg px-6 rounded-2xl cursor-pointer shadow-lg text-blue-500 hover:bg-white/40 bg-white"
            >
              Sign in
            </Link>
            <Link
              to={"/register"}
              className="hidden md:block py-2 text-lg px-6 cursor-pointer rounded-2xl shadow-lg text-white bg-blue-500 hover:bg-blue-700"
            >
              Registration
            </Link>
          </div>
          <span
            onClick={() => setSidebarToggle(!sidebarToggle)}
            className="navLinks md:hidden flex flex-col justify-center gap-1 cursor-pointer h-[30px]"
          >
            <span
              className={`w-8 h-[3px] shrink-0 bg-blue-700 rounded-full ${
                sidebarToggle ? "translate-y-[4px] -rotate-[45deg]" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-[3px] shrink-0 bg-blue-700 rounded-full ${
                sidebarToggle ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-[3px] shrink-0 bg-blue-700 rounded-full ${
                sidebarToggle ? "-translate-y-[10px] rotate-[45deg]" : ""
              }`}
            ></span>
          </span>
        </div>
      </nav>

      {/* <section
        onTouchMove={(e) => e.preventDefault()}
        id="sidebar"
        className="fixed bg-white  right-0  w-full h-full flex flex-col overflow-hidden z-10"
      >
        <div className="flex flex-col items-start gap-4 text-[15px] text-gray-600 p-3"></div>
      </section> */}
    </>
  );
}
