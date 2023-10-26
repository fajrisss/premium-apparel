// import React from 'react'
import { useState } from "react";
import KAOS1 from "./../assets/kaos1.png";
import KAOS2 from "./../assets/kaos2.png";
import KAOS3 from "./../assets/kaos3.png";
import KAOS4 from "./../assets/kaos4.png";

const Catalog = () => {
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState({
    img1: KAOS1,
    img2: KAOS2,
    img3: KAOS3,
    img4: KAOS4,
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <div className="bg-primary py-20 px-6 md:px-[130px] -mt-2" id="product">
      <h1 className="text-center text-white font-black text-3xl">KATALOG</h1>
    <div className="flex flex-col justify-center items-center lg:flex-row md:gap-16 gap-10 md:items-center max-w-fit min-h-max  text-white p-4 bg-opacity-60 rounded-lg">
      <div className="flex flex-col gap-6 pt-0 md:pt-4 md:w-1/4">
        <img
          src={activeImg}
          alt=""
          className="w-[200px] h-[200px] m-auto rounded-xl"
        />
        <div className="flex flex-row justify-center gap-2 flex-wrap">
          <img
            src={images.img1}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
          <img
            src={images.img1}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
          <img
            src={images.img1}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
          <img
            src={images.img1}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
          <img
            src={images.img1}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-10 h-10 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-white font-semibold">
            KAOS POLOS PREMIUM
          </span>
          <h1 className="text-3xl font-bold text-secondary">Cotton Combed 24s</h1>
        </div>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi laudantium ab odit dicta quis quod non ipsa magnam, iure tempore eum perferendis consequuntur quam iusto inventore veniam architecto iste illo?
        </p>
        <h6 className="text-2xl font-semibold text-secondary">Rp. 40.000</h6>
        <div className="flex flex-row items-center gap-12">
          
          <a href='http://wa.me/6281311118809' target='blank' className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
            Pesan Sekarang
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Catalog;
