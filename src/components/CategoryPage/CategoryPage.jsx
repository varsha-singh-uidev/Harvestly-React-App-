import React from "react";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner";
import WithSeller from "../WithSeller/WithSeller";
const CategoryPage = ({ title, bgimage, categories=[] }) => {

  const CardsComp = WithSeller(Cards)

  let filterItems = categories.includes('All')
  ? ProductList
  : ProductList.filter(item => categories.includes(item.category))

    const renderProduct = filterItems.map((product) => {
      return (
        <CardsComp
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          review={product.review}
        />
      );
    });

  return (
    <div>
      <Banner title={title} bgimage={bgimage} />
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex flex-wrap justify-center mt-[60px]">
          {renderProduct}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
