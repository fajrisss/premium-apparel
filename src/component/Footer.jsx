// import React from 'react']
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import {BiMapPin} from 'react-icons/bi';
// import LOGO from "./../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-greeyyy -mt-2 py-10 md:px-[130px] px-6 flex flex-col md:flex-row justify-center items-center md:gap-5 gap-10 md:justify-between">
      <div className="flex gap-10 justify-center items-center md:w-1/3 md:gap-3">
        <a href="">
          <BsInstagram className="text-3xl" />
        </a>
        <a href="">
          <BsFacebook className="text-3xl" />
        </a>
        <a href="">
          <BsWhatsapp className="text-3xl" />
        </a>
      </div>
      {/* <img src={LOGO} alt="" className="w-32 m-auto" /> */}
      <div className="md:w-1/3">
        <ul className=" flex flex-col md:flex-row justify-center items-center gap-3">
          <li>
            <a
              href="#home"
              className="font-semibold text-lg uppercase underline "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-semibold text-lg uppercase underline"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#product"
              className="font-semibold text-lg uppercase underline"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-semibold text-lg uppercase underline"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-2 md:w-1/3">
      <BiMapPin className="text-3xl"/>
        <p className="text-center text-lg">  Pecatu E8 / 18, Purimas, Kec. Gn. Anyar, <br />Surabaya, Jawa Timur 60294</p>
      </div>
    </footer>
  );
};

export default Footer;
