import React from "react";
import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";
import Card4 from "../Card4/Card4";

function Discount(){
  let cards = [<Card1/>,<Card2/>,<Card3/>,<Card4/>]
  return(
    <>
      <div className="mt-[80px] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-2">
          <div className="overflow-hidden w-full group">
            <div className="flex gap-[20px] min-w-max animate-[scroll_20s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...cards, ...cards].map((card, index) => (
                <div key={index} className="min-w-[350px]">
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>
          {`
            @keyframes scroll{
              0% {transform : translateX(0)}
              100% {transform : translateX(-50%)}
            }
          `}
        </style>
      </div>
    </>
  );
};
export default Discount;