import React, { useState } from "react";
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button"
import {Link} from 'react-router-dom';
import WithSeller from "../../WithSeller/WithSeller";
const Product = () => {
  
  let Tabs = ["All", "Vegetable", "Fruit", "Non-Veg", "Dairy"];
  const [isActive, setIsActive] = useState("All");
  function clickHandler(tab){
    setIsActive(tab);
  }

  const CardsComp = WithSeller(Cards)
  let filterProduct = (isActive === "All") ? ProductList : ProductList.filter(product => product.category === isActive)
  const renderCard = filterProduct.slice(0,8).map(product => {
      return(
        <CardsComp
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          review={product.review}  
        />
      )
  })
  return (
    <>
      <div className="mt-[80px]">
        <div className="max-w-[1300px] mx-auto px-4">
          <div>
            <Header first="Shop" last="Fresh" />
          </div>
          {/* tabs for different items */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-[10px] mt-[40px] px-2">
            {Tabs.map((tab, id) => {
                return(
                  <button key={id} 
                  onClick={() => clickHandler(tab)} 
                  className={`text-sm sm:text-[18px] py-[2px] px-3 rounded-[5px] transition-all duration-300 ${isActive === tab ? "bg-[#A5E6A5] text-[#1B4332] font-semibold" : "bg-[#F4FAF4] text-[#2E573A] hover:bg-[#E0F2E0] hover:text-[#2E7D32] hover:cursor-pointer font-medium"}`}>
                    {tab}
                  </button>
                )
            })}
          </div>
          {/* Cards of Product */}
          <div className="flex flex-wrap justify-center mt-[50px]">
            {renderCard}
          </div>
          {/* View All Product Button */}
          <div className="flex justify-center mt-[15px]">
            {/* <Link to="/allproduct" className="text-base md:text-lg mt-6 bg-[#FF9800] hover:bg-[#F57C00] text-white font-semibold py-[10px] px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">View All</Link> */}
            <Link to="/allproduct"><Button title="View All"/></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
