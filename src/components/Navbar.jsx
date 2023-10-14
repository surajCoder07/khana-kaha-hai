import React, { useState } from "react";
import { GrCart, GrMenu, GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center h-[70px] px-4 py-2 shadow-md relative z-[999]">
      <div className="">
        <h1 className="text-primary-green font-semibold text-xl">Khana</h1>
        <p className="text-primary-green  text-sm">Kidhr hai</p>
      </div>
      <div
        className={`max-sm:absolute max-sm:flex max-sm:justify-center max-sm:shadow-lg max-sm:items-center max-sm:top-0 max-sm:h-screen  max-sm:w-[60%] max-sm:z-[-1] max-sm:left-0 max-sm:duration-300 bg-white ${
          isOpen ? " max-sm:-translate-x-0 " : "max-sm:-translate-x-[100%]"
        }`}
      >
        <ul className="flex items-center gap-4 max-sm:flex-col ">
          <li className="cursor-pointer py-1 rounded-sm duration-300 hover:bg-primary-green hover:text-white ">
            <Link to={"/"} className="px-3 py-2 text-xl">
              Home
            </Link>
          </li>
          <li className="cursor-pointer  py-1 rounded-sm duration-300 hover:bg-primary-green hover:text-white ">
            <Link to={"/about"} className="px-3 py-2 text-xl">
              About
            </Link>
          </li>
          <li className="cursor-pointer py-1 rounded-sm duration-300 hover:bg-primary-green hover:text-white ">
            <Link to={"/faq"} className="px-3 py-2 text-xl">
              FAQ
            </Link>
          </li>
          <li className="cursor-pointer px-2 py-1  ">
            <Link to={"/cart"}>
              <GrCart size={"1.3em"} className="" />
            </Link>
          </li>
          <li className="cursor-pointer px-2 py-1 rounded-sm duration-300 hover:bg-primary-green hover:text-white ">
            <button className=" text-xl">Login</button>
          </li>
        </ul>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className=" hidden max-sm:block">
        {isOpen ? (
          <GrClose size={"1.5em"} className="cursor-pointer" />
        ) : (
          <GrMenu size={"1.5em"} className="cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
