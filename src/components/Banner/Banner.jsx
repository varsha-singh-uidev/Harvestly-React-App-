import React from 'react'

const Banner = ({title, bgimage}) => {
  return (
    <>
      <div className='mt-30 sm:mt-35 h-[20vh] sm:h-[35vh] overflow-hidden flex justify-center items-center '>
        <div><img src={bgimage} className='w-full object-fill relative '/></div>
        <h2 className='text-[#fff] font-Quicksand text-4xl sm:text-6xl font-bold absolute z-10'
         style={{textShadow: "5px 5px 6px rgba(0, 0, 0, 0.7)"}}
        >{title}</h2>
      </div>
    </>
  )
}

export default Banner;