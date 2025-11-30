import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const Category = () => {
  // render the data on the card dynamically
  const renderCard = category.map((card) => {
    return (
      <div
        key={card.id}
        className="w-[320px] sm:w-[340px] lg:w-[350px] flex flex-col gap-3 mr-[10px] p-4 bg-white rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:-translate-y-[4px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.19)] transition-all duration-300">
        <div className="w-full h-[180px] md:h-[200px] flex justify-center items-center rounded-lg">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-fill px-[20px]"/>
        </div>

        <div className="flex flex-col items-center text-center px-2">
          <h3 className="text-2xl font-semibold mb-2 text-[#2E7D32]">
            {card.title}
          </h3>
          <h5 className="text-gray-700 mb-4 text-sm leading-relaxed text-justify">
            {card.desp}
          </h5>
          <Link
            to={card.path}
            className="text-base md:text-lg mt-4 mb-2 bg-[#FF9800] hover:bg-[#F57C00] text-white font-semibold py-[10px] px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
            See All
          </Link>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="mt-[80px]">
        <div className="max-w-[1300px] mx-auto px-4">
          <div>
            <Header first="Select Your" last="Basket" />
          </div>
          {/* cards */}
          <div className="flex flex-wrap justify-center gap-[25px] mt-[60px]">
            {renderCard}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;

const category = [
  {
    id: 1,
    image: "/Product/fruit-veg.png",
    title: "Fruit & Vegetable",
    desp: "Bursting with color and nutrition, our handpicked fruits and vegetables are sourced for peak freshness. From crisp greens to juicy citrus, every bite is a celebration of nature best.",
    path: "/fruits",
  },
  {
    id: 2,
    image: "/Product/dairy.png",
    title: "Dairy Products",
    desp: "Creamy, wholesome, and locally sourced our dairy selection brings you the richness of farm-fresh milk, artisanal cheeses, and probiotic-packed yogurts. Taste the purity in every pour.",
    path: "/diary",
  },
  {
    id: 3,
    image: "/Product/meat.png",
    title: "Meat & Seafood",
    desp: "Expertly selected for quality and taste, our meat and seafood offerings deliver protein-packed goodness with every cut. Responsibly sourced and ready to elevate your next meal.",
    path: "/nonveg",
  },
];
