import React from 'react'
import { useState, useContext, useEffect } from "react";
import { CartContext } from '../CartContext/CartContext'

const Cards = ({id, title, price, image, review, onLikeChange}) => {

  // state and function that is used to handle the quantity value
  const [value, setValue] = useState(1);

  function handlerQuan(e){
    setValue(Number(e.target.value));
  }
  // useContext apply to the cart icon
  const {addToCart} = useContext(CartContext);
  function handleCart(){
    addToCart({
      id, 
      title,
      price,
      image,
      quantity : Number(value)
    });
  }

  // const [isClick, setIsClick] = useState(false);
  if(!title || !price || !image || !review) return null;


  // getting the values so can i update the heart icon on the card
  const[isLike, setIsLike] = useState(false);

  useEffect(() => {
    let stored = localStorage.getItem("likeItem");
    if(!stored) return;

    let likeArr = JSON.parse(stored);
    if(Array.isArray(likeArr) && likeArr.includes(id)){
      setIsLike(true);
    }
  },[id]);

  function handler(){
    let stored = localStorage.getItem("likeItem");
    let likeArr = stored ? JSON.parse(stored) : [];
    let exists = likeArr.includes(id);
    let next;
    if(exists){
      next = likeArr.filter(itemId => itemId !== id);
      setIsLike(false);
    }else{
      next = [...likeArr, id];
      setIsLike(true);
    }
    localStorage.setItem("likeItem", JSON.stringify(next));

    if(onLikeChange){
      onLikeChange(next);
    }
  }


  return (
    <>
      <div className='relative flex flex-col w-[300px] sm:w-[250px] bg-gradient-to-b from-[#ffffff] to-[#f6fff6] border border-[#E3F2E1] p-[20px] sm:p-[18px] mx-[25px] mt-[40px] mb-[15px] rounded-[12px] shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out'>
        {/* heart image */}
        <div onClick={handler} className='absolute top-3 right-3 w-[22px] cursor-pointer hover:scale-110 transition-transform duration-200'>
          <img src={isLike ? "/MainProducts/colorHeart.png" : "/MainProducts/heart.png"} alt="heart png"/>
        </div>
        {/* Product image */}
        <div className='h-[160px] mt-[20px] flex items-center justify-center '>
           <img src={image} className='w-[200px] sm:w-[170px] h-[150px] object-contain ' />
        </div>

        {/* card information */}
        <div className='mt-2'>
           <div className='flex items-center justify-between'>
            <h3 className='text-[18px] font-semibold text-[#2E573A]'>{title}</h3>
            <p className='text-[16px] font-medium text-[#23CA55]'>Rs. {price}</p>
           </div>
           <p className='text-[14px] text-[#777] mt-1'>⭐ {review}</p>
        </div>
        <div className='flex items-center justify-between mt-[20px]'>
          <input className='w-[60px] border border-[#BDE3BD] rounded-md px-2 py-1 text-center text-[#2E573A] focus:outline-none' type="number" max={10} min={1} value={value} onChange={handlerQuan}/>
          <div onClick={handleCart} className='p-2 bg-[#23CA55] hover:bg-[#1B9E45] rounded-lg transition-all duration-200 cursor-pointer'>
            <img className='w-[18px]' src="/MainProducts/cart.png" alt="" />
          </div>
        </div>
     </div>
    </>
  )
}

export default Cards