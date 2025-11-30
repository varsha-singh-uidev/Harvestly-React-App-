import React from 'react'
import Valuecard from '../Valuecard/Valuecard'

const Values = () => {
  return (
    <>
      <div className="mt-30">
        <div className="flex flex-col lg:flex-row items-center justify-evenly max-w-[1300px] mx-auto px-4 py-10 bg-gradient-to-br from-[#DAF1DA] to-white rounded-[1rem]">
            <div className="relative w-full lg:w-[50%] flex items-center justify-center mb-10 lg:mb-0">
            <div className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[310px] md:w-[350px] md:h-[360px] xl:w-[400px] xl:h-[425px] bg-[#C7F3C1] rounded-[2rem] rotate-6 opacity-95 shadow-lg top-3 left-20 sm:left-38 md:left-50 lg:left-20 xl:left-34"></div>

            {/* Actual image */}
            <img src="/images/valuesBanner.png" alt="Values Banner" className="relative z-10 w-[350px] sm:w-[430px] md:w-[490px] lg:w-[520px] xl:w-[580px] object-contain"/>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col justify-center w-full lg:w-[50%] px-[15px] sm:px-[40px] md:px-[50px] mt-[20px]">
            <h1 className="text-[31px] sm:text-[40px] sm:max-w-[500px] md:text-[45px] lg:text-[42px] font-semibold text-[#2E573A] mb-[10px] leading-tight">
              Bringing <span className="text-[#23ca55]">farm-fresh</span> products closer to home
            </h1>
            <h3 className="text-[15px] sm:text-[16px] sm:max-w-[450px] md:text-[18px] text-[#355f44] mb-[20px] leading-relaxed">
              We are committed to make your grocery shopping experience simple, fast and convenient.
            </h3>

            {/* Value cards */}
            <div className="flex flex-col gap-[12px] w-full max-w-[450px]">
              <Valuecard image="/Product/care.png" title="Grown with Care" text="Handled with care, harvested at its best" /> 
              <Valuecard image="/Product/leaf.png" title="Rooted in Respect" text="We choose simple, earth-friendly practices" />
              <Valuecard image="/Product/delivery.png" title="Delivered Simply" text="Packed with care, delivered to your door" /> 
              <Valuecard image="/Product/thumbs.png" title="Chosen with care" text="Carefully chosen to meet your standards" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Values
