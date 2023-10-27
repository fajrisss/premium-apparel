// import React from 'react'
import LOGO from "./../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between md:px-[130px] gap-5 flex-col md:flex-row px-6 py-5 items-center fixed w-screen bg-[#eaeaea] z-50 border-b font-inter">
      <div className="logo">
        <a href="#home" className="font-bold text-2xl">
          <img src={LOGO} alt="" className="w-24" />
        </a>
      </div>
      <div className="">
        <ul className=" flex justify-between gap-4 underline md:gap=[40px]">
          <li>
            <a
              href="#home"
              className="font-semibold text-[#1B2232] text-base md:text-lg uppercase transition-all ease-in-out hover:text-xl "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-semibold text-[#1B2232] text-base md:text-lg uppercase transition-all ease-in-out hover:text-xl"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#product"
              className="font-semibold text-[#1B2232] text-base md:text-lg uppercase transition-all ease-in-out hover:text-xl"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-semibold text-[#1B2232] text-base md:text-lg uppercase transition-all ease-in-out hover:text-xl"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
