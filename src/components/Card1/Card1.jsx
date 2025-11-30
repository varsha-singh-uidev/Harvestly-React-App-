import React from "react";

const Card1 = () => {
  return (
    <div className="flex sm:flex-row items-center justify-between w-[340px] max-w-[600px] sm:min-w-[500px] max-h-[220px] sm:max-h-[300px] mx-auto bg-gradient-to-r from-[#FFF1D6] to-[#FFD8A8] rounded-[24px] shadow-md p-6 sm:p-10 relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      
      {/* Decorative background shapes */}
      <div className="absolute -top-8 -right-10 w-[150px] h-[150px] bg-[#fac788]/35 rounded-full blur-2xl"></div>
      <div className="absolute bottom-[-30px] left-[-30px] w-[200px] h-[200px] bg-[#b48750e9]/20 rounded-full blur-lg"></div>
      <div className="absolute top-[50%] right-[35%] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-white/40 rounded-full blur-lg"></div>
      
      {/* Text content */}
      <div className="relative z-10">
        <div className="flex flex-col gap-3 sm:gap-4 max-w-[360px]">
        <p className="text-[#5C3B09] text-[18px] sm:text-2xl font-semibold tracking-wide">
          Get
        </p>
        <h2 className="text-[#FF922B] text-[37px] sm:text-[50px] font-bold leading-[1.1]">
          20% Off
        </h2>
        <p className="text-[#5C3B09] text-[16px] sm:text-xl font-medium leading-snug">
          on your first order
        </p>
      </div>
        <button className="mt-4 sm:mt-8 w-fit px-3 py-0.5 sm:px-6 sm:py-2 bg-[#FF922B] text-white font-semibold rounded-lg shadow hover:bg-[#F76707] transition-all duration-200">
          Shop Now
        </button>
      </div>

      {/* Product image */}
      <div className="mt-7 sm:mt-0 flex justify-center relative z-10">
        {/* Glow behind image */}
        <div className="absolute bottom-0 right-0 w-[120px] h-[100px] sm:w-[200px] sm:h-[200px] bg-white/60 rounded-full blur-lg"></div>
        <img
          src="/MainProducts/card1.png"
          alt="Fresh Discount Offer"
          className="w-[150px] sm:w-[210px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] sm:rotate-0 rotate-[-2deg]"
        />
      </div>
    </div>
  );
};

export default Card1;
