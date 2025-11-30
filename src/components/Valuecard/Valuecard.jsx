import React from 'react'

const Valuecard = ({image, title, text}) => {
  return (
    <>
      <div className='flex items-center gap-[20px] max-w-[350px] bg-white px-[10px] py-[5px] mb-[10px] rounded-[10px] shadow-sm'>
        <div className='w-[40px] h-[40px] bg-[#2E573A] flex items-center justify-center rounded-[50px]'>
            <img className='w-[20px] h-[20px]' src={image}/>
        </div>
        <div>
            <p className='text-[16px] font-semibold text-[#1b4332]'>{title}</p>
            <p className='text-[14px] font-light text-[#3b3b3b] max-w-[400px]'>{text}</p>
        </div>
      </div>
    </>
  )
}

export default Valuecard