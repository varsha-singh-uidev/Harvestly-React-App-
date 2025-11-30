import React from 'react'

const Card2 = () => {
  return (
    <>
    <div className="flex flex-row items-center justify-between w-[340px] max-w-[600px] sm:min-w-[500px] max-h-[220px] sm:max-h-[300px] mx-auto bg-gradient-to-r from-[#FFF9DB] to-[#FFE8A3] rounded-[24px] shadow-md p-6 sm:p-10 relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      
      {/* Decorative background shapes */}
      <div className="absolute -top-8 -right-10 w-[150px] h-[150px] bg-[#f7d365]/35 rounded-full blur-2xl"></div>
      <div className="absolute bottom-[-30px] left-[-30px] w-[200px] h-[200px] bg-[#d6b141f0]/20 rounded-full blur-lg"></div>
      <div className="absolute top-[50%] right-[35%] w-[50px] h-[80px] bg-white/60 rounded-full blur-2xl"></div>

      {/* Text content */}
      <div className='relative z-10'>
        <div className="flex flex-col gap-1 sm:gap-4 max-w-[360px]">
        <p className="text-[#c57f06] text-[20px] sm:text-[28px] font-bold tracking-wide">
          Organic & Fresh Vegetables
        </p>
        <p className="text-[#7a6304f0] text-[15px] sm:text-lg leading-snug">
          {/* Grown with care, free from chemicals and packed to preserve freshness. */}
          Naturally grown, chemical-free, and freshly packed
        </p>
      </div>
        <button className="mt-3 sm:mt-8 w-fit px-4 py-1 sm:px-6 sm:py-2 bg-[#FFD43B] text-white font-semibold rounded-lg shadow hover:bg-[#FFC300] transition-all duration-200">
          Explore Now
        </button>
      </div>

      {/* Product image */}
      <div className="sm:mt-0 flex justify-center relative z-10">
        {/* Glow behind image */}
        <div className="absolute bottom-0 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[250px]  bg-white/50 rounded-full blur-2xl"></div>
        <img
          src="/MainProducts/card2.png"
          alt="Fresh Discount Offer"
          className="w-[270px] sm:w-[300px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] sm:rotate-0 rotate-[-2deg]"
        />
      </div>
    </div>
    </>
  )
}

export default Card2