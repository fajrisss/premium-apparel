// import React from 'react'
import { useState } from "react";
import KAOS1 from "./../assets/kaos1.png";
import KAOS2 from "./../assets/kaos2.png";
import KAOS3 from "./../assets/kaos3.png";
import KAOS4 from "./../assets/kaos4.png";
// import { items } from "../assets/data/data";

const Product = () => {
  const items = [
    {
      id: 1,
      name: "Merah",
      imageUrl: KAOS1,
      desc: "Warna merah menggoda, simbol semangat dan keberanian, cocok untuk tampilan berani Anda.",
    },
    {
      id: 2,
      name: "Kuning",
      imageUrl: KAOS2,
      desc: "Kelembutan kuning menciptakan kesan ceria dan kebahagiaan, sempurna untuk nuansa riang.",
    },
    {
      id: 3,
      name: "Biru",
      imageUrl: KAOS3,
      desc: " Ketenangan biru menginspirasi kepercayaan diri, memberikan kesan elegan pada penampilan Anda.",
    },
    {
      id: 4,
      name: "Putih",
      imageUrl: KAOS4,
      desc: "Kesucian putih memancarkan kesederhanaan yang elegan, menciptakan tampilan bersih dan modern.",
    },
    {
      id: 5,
      name: "Ungu",
      imageUrl: KAOS1,
      desc: "Keanggunan ungu memberi sentuhan mewah, menciptakan nuansa penuh pesona dan keindahan.",
    },
    {
      id: 6,
      name: "Pink",
      imageUrl: KAOS3,
      desc: "Kemanisan pink mencerminkan kelembutan, cocok untuk tampilan feminin yang memukau dan ceria.",
    },
    {
      id: 7,
      name: "Maroon",
      imageUrl: KAOS4,
      desc: "Maroon menawarkan aura kehangatan dan kemewahan, menciptakan tampilan yang elegan dan berkelas.",
    },
    {
      id: 8,
      name: "Hijau",
      imageUrl: KAOS2,
      desc: "Kesejukan hijau menciptakan suasana segar dan damai, menambah kesan alami pada penampilan Anda.",
    },
  ];
  const [poopContent, setPopoopContent] = useState([]);
  const [closePopup, setClosePopup] = useState(false);
  const changeContent = (item) => {
    setPopoopContent([item]);
    setClosePopup(!closePopup);
  };
  return (
    <div>
      <div
        className="bg-primary py-10 -mt-1 pt-[120px] md:pt-20 m-auto"
        id="product"
      >
        <div className="mt-7">
          <h1 className="text-center pb-10 text-3xl font-black text-white">
            OUR PRODUCT
          </h1>
          <ul className="flex flex-wrap gap-3 justify-center items-center px-6 md:px-[130px]">
            {items.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <button type="button" onClick={() => changeContent(item)}>
                <li
                  key={item.id}
                  className="border-2 shadow-xl p-3 h-max w-[150px] md:w-48 rounded-md  text-left  text-white hover:scale-110  transition-all"
                >
                  <img
                    src={item.imageUrl}
                    alt="food img"
                    className="object-cover rounded-md mb-2 "
                  />

                  <div className="">
                    <h3 className="text-lg font-semibold text-center py-2 px-5 bg-violet-800 rounded-md">
                      {item.name}
                    </h3>
                  </div>
                </li>
              </button>
            ))}
          </ul>
          {closePopup && (
            <>
              {poopContent.map((pop) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50">
                    <div className="border-2 shadow-xl p-3  w-3/4  relative text-white bg-primary rounded-md  sm:w-96 flex flex-col items-center sm:p-5 h-[500px]">
                      <button
                        className="py-1 px-2.5 text-sm rounded-full bg-red-600 absolute top-0 right-0 text-white font-black text-center m-auto border flex justify-center items-center border-white dark:border-slate-800 dark:text-slate-100"
                        onClick={changeContent}
                      >
                        X
                      </button>
                      <img
                        src={pop.imageUrl}
                        alt="food img"
                        className="rounded-md"
                      />
                      <div className="">
                        <div className="my-3 flex items-end text-right justify-end">
                          <p className="line-through text-red-700">Rp 60.000,-</p>
                          <h3 className="text-lg font-semibold underline">
                            RP 40.000,-
                          </h3>
                        </div>
                        <p className="text-center pb-1">Jenis Bahan:</p>
                        <form className="flex gap-5 justify-center">
                          <div className="flex items-center gap-1">
                            {" "}
                            <input
                              type="radio"
                              name="jenis"
                              id="combed24s"
                              value="combed24s"
                            />
                            <label htmlFor="combed24s">COMBED 24S</label>
                          </div>
                          <div className="flex items-center gap-1">
                            <input
                              type="radio"
                              name="jenis"
                              id="combed30s"
                              value="combed30s"
                            />
                            <label htmlFor="combed30s">COMBED 30S</label>
                          </div>
                        </form>
                        <p className="text-center pb-1">Ukuran: </p>
                        <form className="flex gap-5 justify-center">
                          <div className="flex items-center gap-1">
                            <input
                              type="radio"
                              name="ukuran"
                              id="s"
                              value="s"
                              className="pr-2"
                            />
                            <label htmlFor="s">S</label>
                          </div>
                          <div className="flex items-center gap-1">
                            <input
                              type="radio"
                              name="ukuran"
                              id="m"
                              value="m"
                              className="pr-2"
                            />
                            <label htmlFor="m">M</label>
                          </div>
                          <div className="flex items-center gap-1">
                            <input
                              type="radio"
                              name="ukuran"
                              id="l"
                              value="l"
                              className="pr-2"
                            />
                            <label htmlFor="l">L</label>
                          </div>
                          <div className="flex items-center gap-1">
                            <input
                              type="radio"
                              name="ukuran"
                              id="xl"
                              value="xl"
                              className="pr-2"
                            />
                            <label htmlFor="xl">XL</label>
                          </div>
                          <div className="flex items-center gap-1">
                            <input
                              type="radio"
                              name="ukuran"
                              id="xxl"
                              value="xxl"
                              className="pr-2"
                            />
                            <label htmlFor="xxl">XXL</label>
                          </div>
                        </form>
                        {/* <p className="my-4">{pop.desc}</p> */}
                        <div className="flex justify-center items-center pt-5">
                          <a
                            href="http://wa.me/6281311118809"
                            target="blank"
                            className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full hover:scale-110"
                          >
                            Pesan Sekarang
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
