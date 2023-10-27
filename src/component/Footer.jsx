import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import {BiMapPin} from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="bg-black text-greeyyy -mt-2 py-10 md:px-[130px] px-6 flex flex-col md:flex-row justify-center md:justify-between items-center md:gap-5 gap-10  " id="contact">
      <div className="flex gap-10 justify-center items-center  md:gap-3">
        <a target="blank" href="https://www.instagram.com/exoticapparel_id/">
          <BsInstagram className="text-3xl hover:scale-110" />
        </a>
        <a target="blank" href="https://www.facebook.com/3xoticapparel">
          <BsFacebook className="text-3xl hover:scale-110" />
        </a>
        <a target="blank" href="http://wa.me/6281311118809">
          <BsWhatsapp className="text-3xl hover:scale-110" />
        </a>
      </div>
      {/* <img src={LOGO} alt="" className="w-32 m-auto" /> */}
      <div className="">
        <ul className=" flex flex-col md:flex-row justify-center items-center gap-3">
          <li>
            <a
              href="#home"
              className="font-semibold text-base uppercase underline hover:text-lg "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-semibold text-base uppercase underline hover:text-lg"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#product"
              className="font-semibold text-base uppercase underline hover:text-lg"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-semibold text-base uppercase underline hover:text-lg"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-2 ">
      <BiMapPin className="text-3xl"/>
        <p className="text-center text-lg">  Pecatu E8 / 18, Purimas, Kec. Gn. Anyar, <br />Surabaya, Jawa Timur 60294</p>
      </div>
    </footer>
  );
};

export default Footer;
