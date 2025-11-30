import React from "react";

const Card3 = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-[340px] max-w-[600px] sm:min-w-[500px] max-h-[220px] sm:max-h-[300px] mx-auto bg-gradient-to-l from-[#c9f8e3] to-[#99efc1] rounded-[24px] shadow-md p-6 sm:p-10 relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
        
        {/* Decorative background shapes */}
        <div className="absolute -top-8 -right-10 w-[150px] h-[150px] bg-[#1ec952db]/35 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[-30px] left-[-30px] w-[200px] h-[200px] bg-[#187f6bd6]/20 rounded-full blur-lg"></div>
        <div className="absolute top-[50%] right-[35%] w-[50px] h-[80px] sm:w-[100px] sm:h-[100px] bg-white/40 rounded-full blur-lg"></div>

        {/* Text content */}
        <div className="z-10 relative">
          <div className="flex flex-col gap-1.75 sm:gap-4 max-w-[360px]">
            <p className="text-[#0B5345] text-[21px] sm:text-3xl font-bold tracking-wide">
              Eat Healthy, <br /> Be Healthy
            </p>
            <p className="text-[#0b5345d2] text-[15px] sm:text-lg leading-snug">
              {/* Fresh, nutritious, and natural because good health starts with what's on your plate. */}
              Fresh, natural, nourishing because health begins on your plate
            </p>
          </div>
          <button className="mt-3 sm:mt-8 w-fit px-3 py-0.5 sm:px-6 sm:py-2 bg-[#23CA55] text-white font-semibold rounded-lg shadow hover:bg-[#20b14b] transition-all duration-200">
            Order Now
          </button>
        </div>

        {/* Product image */}
        <div className="sm:mt-0 flex justify-center relative z-10">
          {/* Glow behind image */}
          <div className="absolute bottom-0 right-0 w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] bg-white/50 rounded-full blur-lg"></div>
          <img
            src="/MainProducts/card3.png"
            alt="Healthy food"
            className="w-[270px] sm:w-[320px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] sm:rotate-0 rotate-[-2deg] relative"
          />
        </div>
      </div>
    </>
  );
};

export default Card3;

