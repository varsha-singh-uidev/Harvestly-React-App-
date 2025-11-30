import React from "react";

const ReviewCard = ({card}) => {
  let star = [1,2,3,4,5];
   return(
      <div className="flex flex-col mx-auto shadow-[0_2px_10px_rgba(0,0,0,0.05)] w-[350px] h-[240px] sm:w-[400px] bg-gradient-to-b from-[#FAFAFA] to-[#f1e4cf] rounded-2xl p-6 sm:p-8 transition-all duration-300  hover:scale-[1.02] ease-in-out">
      {/* Top: Photo and info */}
      <div className="flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full outline-2 outline-amber-400 outline-offset-4 overflow-hidden">
            <img
            className="w-full h-full object-contain"
            src={card.image}
            alt={card.name}
          />
        </div>
        <div>
          <h4 className="text-lg sm:text-[18px] font-semibold text-[#2E2E2E]">
            {card.name}
          </h4>
          <p className="text-[14px] text-[#8C8C8C] font-medium">{card.profession}</p>
          <div className="flex gap-[2px] mt-1 text-sm">
            {star.map((num) => (num <= card.rating? "⭐": ""))}  
          </div>
        </div>
      </div>

      {/* Review Text */}
      <div className="mt-6 text-[#4B4B4B] leading-relaxed text-[15px]">
        <p>
          {card.para}
        </p>
      </div>
    </div>
    )
};

export default ReviewCard;