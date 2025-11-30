import React from 'react'

const Button = ({title}) => {
  return (
    <>
    <button className="text-base md:text-lg mt-6 bg-[#FF9800] hover:bg-[#F57C00] text-white font-semibold py-[10px] px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
        {title}
    </button>
    </>
  )
}

export default Button