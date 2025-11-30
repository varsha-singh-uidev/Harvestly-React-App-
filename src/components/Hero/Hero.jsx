import React from "react";
import Button from "../Button/Button";
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-r from-[#FAF9F6] to-[#d7f1d7]">
        <div className="pt-40 lg:pt-25 mx-auto px-6 py-16 max-w-[1300px]">
          <div className="flex items-center justify-between md:flex-row flex-col">
            <div className="mt-6 md:mt-0">
              <p className="text-xs md:text-sm uppercase tracking-widest text-[#555555] text-left mb-2">
                Export-Grade Quality, Locally Delivered
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2E573A] leading-tight tracking-tight text-left max-w-2xl mx-auto
              [text-shadow:_1px_2px_4px_rgba(0,0,0,0.15)]">
              Baskets of Goodness, Just Around the Corner
             </h1>
              <p className="text-base md:text-lg text-[#555555] font-medium text-left max-w-xl mt-5">
                Bred for high nutritional value and freshness. Every product is
                handpicked to deliver health, taste, and trust right to your
                doorstep.
              </p>
              <Link to="/allproduct"><Button title="Shop Now"/></Link>
            </div>
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
              <img src="/images/basket1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
