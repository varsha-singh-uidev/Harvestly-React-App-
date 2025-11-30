import React from 'react'

const Header = ({first,last}) => {
  return (
    <>
    <div className='flex items-center justify-center gap-2 md:gap-4 text-4xl md:text-5xl font-semibold leading-tight tracking-tight'>
      <h2 className='text-[#2E7D32] [text-shadow:_0_2px_4px_rgba(0,0,0,0.15)]'>{first}</h2>
      <h2 className='text-[#FF9800] [text-shadow:_0_2px_4px_rgba(0,0,0,0.25)]'>{last}</h2>
    </div> 
    </>
  )
}

export default Header