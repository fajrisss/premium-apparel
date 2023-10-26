// import React from 'react'
import "./../index.css";
import BAHAN from "./../assets/Group 5.png";
import MOCKUP from "./../assets/mockup.png";

const About = () => {
  return (
    <div id="about">
      <div className="">
        <div className="running-text-container bg-black ">
          <div className="running-text ">
            <p className="font-inter text-white text-lg font-semibold py-3">
              EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL
              * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC
              APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL *
              EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL
              * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC
              APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL *
              EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL
              * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC
              APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL *
              EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL
              * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC
              APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL *
              EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL
              * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC APPAREL * EXOTIC
              APPAREL * EXOTIC APPAREL * EXOTIC APPAREL *
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary font-inter py-10 text-white">
        <div className="">
          <h1 className=" font-black text-2xl md:text-4xl text-center">
            KUALITAS BAHAN <span className="text-secondary">TERBAIK</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-8 px-6 md:px-[130px] justify-center items-center">
          <img src={BAHAN} alt="" className="w-[200px] m-auto md:m-0" />
          <div className="">
            <div className="flex items-center gap-2">
              <h2 className="bg-secondary w-max px-3 py-1 rounded-full">1</h2>
              <p className="text-xl font-semibold">
                Terverifikasi{" "}
                <span className="text-secondary"> Higg Index</span> Sustainable
                Apparel
              </p>
            </div>
            <div className="flex items-center gap-2 py-6 md:py-8">
              <h2 className="bg-secondary w-max px-3 py-1 rounded-full">2</h2>
              <p className="text-xl font-semibold">
                Menggunakan kapas Combed dengan{" "}
                <span className="text-secondary">Grade AA+</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="bg-secondary w-max px-3 py-1 rounded-full">3</h2>
              <p className="text-xl font-semibold">
                Terverifikasi{" "}
                <span className="text-secondary">OEKO-TEX100</span> Sehingga
                Tidak Menimbulkan Risiko
                <span className="text-secondary">Kesehatan</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <div className="h-[200px]">
          <img
            src="https://source.unsplash.com/400x200?clothing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute h-[200px] w-full bottom-0">
          <div className="relative">
            <div className=" h-[200px] w-full bg-greeyyy  opacity-40"></div>
            <p className="opacity-100 w-full  text-center absolute bottom-1/2 translate-y-1/2 font-outline-2 font-inter text-transparent text-2xl md:text-5xl font-black">
              100% COTTON <br />
              100% COTTON <br />
              <span className="text-primary font-outline-0">100% COTTON</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary font-inter py-20 text-white px-6 md:px-[130px]">
        <h1 className="text-center uppercase font-black text-3xl md:text-6xl">
          Rasakan <span className="text-secondary">pengalaman luar biasa</span>{" "}
          secara langsung
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 pt-10 ">
          <img src={MOCKUP} alt="" className="w-[200px]" />
          <div className="">
            <div className=" text-center md:text-left uppercase md:text-lg text-base font-semibold flex flex-col gap-2" >
              <p>✔ Menggunakan bahan luxury</p>
              <p>✔ Bahan yang digunakan sangat lembut</p>
              <p>✔ Warna solid</p>
              <p>✔ Tampilan kaos anti bulu</p>
              <p>✔ Tersedia berbagai macam warna</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
