import React from 'react'

const Card4 = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-[340px] max-w-[600px] sm:min-w-[500px] max-h-[220px] sm:max-h-[300px] mx-auto bg-gradient-to-r from-[#FFF1E0] to-[#FFEBD2] rounded-[24px] shadow-md p-6 sm:p-10 relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
        
        {/* Decorative background shapes */}
        <div className="absolute -top-8 -right-10 w-[170px] h-[170px] bg-[#b86f20ea]/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[-30px] left-[-30px] w-[200px] h-[200px] bg-[#b86f20ea]/15 rounded-full blur-2xl"></div>
        {/* Text content */}
        <div className="z-10 relative">
          <div className="flex flex-col gap-1 sm:gap-4 max-w-[360px]">
            <p className="text-[#e9972c] text-[20px] sm:text-3xl font-bold tracking-wide">
              Fast & Fresh <br /> Delivery
            </p>
            <p className="text-[#785e43eb] text-[15px] sm:text-lg leading-snug">
              From our farm to your doorstep quick, fresh, and always on time.
            </p>
          </div>
          <button className="mt-3 sm:mt-8 w-fit px-4 py-1 sm:px-6 sm:py-2 bg-[#FFA94D] text-white font-semibold rounded-lg shadow hover:bg-[#F08C00] transition-all duration-200">
            Order Now
          </button>
        </div>

        {/* Product image */}
        <div className="sm:mt-0 flex justify-center relative z-10">
          {/* Glow behind image */}
          <div className="absolute bottom-0 right-0 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] bg-white/70 rounded-full blur-2xl"></div>
          <img
            src="/MainProducts/card4.png"
            alt="Healthy food"
            className="w-[270px] sm:w-[250px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] sm:rotate-0 rotate-[-2deg] relative"
          />
        </div>
      </div>
    </>
  )
}

export default Card4