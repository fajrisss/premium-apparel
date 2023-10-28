// import React from "react";
import HERO from './../assets/hero.png'

const Home = () => {
  return (
    <div id="home" className="bg-greeyyy ">
      <div className="md:px-[130px] px-6 text-center md:text-left pt-[127px] h-[900px] relative">
        <div className="flex flex-col justify-center items-center text-primary">
          <h1 className="font-black text-7xl font-inter">EXOTIC APPAREL</h1>
          <h2 className="font-extrabold text-4xl tracking-[0.35em] text-secondary md:pt-2 pt-10">KAOS POLOS PREMIUM</h2>
        </div>
        <div className="pt-24 pl-48 font-bold hidden md:block">
          <p>EXPLORE OUR EXCLUSIVE <br/> COLLECTION</p>
        </div>
        <div className=" absolute bottom-0 right-[50%] translate-x-[50%] w-max ">
          <img src={HERO} alt="" className='w-[350px] md:w-[450px]'/>
        </div>
        <a href='#product' className="absolute md:right-[130px] md:bottom-[120px] md:translate-x-0 bottom-10 right-[50%] translate-x-[50%] bg-violet-800 text-white py-3 px-10 rounded-md text-xl font-semibold cursor-pointer hover:scale-110 hover:animate-bounce" >Pesan Sekarang</a>
      </div>
    </div>
  );
};

export default Home;
