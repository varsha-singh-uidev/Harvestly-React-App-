import React,{useEffect, useState} from 'react'
import Cards from "../Cards/Cards"
import ProductList from "../ProductList/ProductList";

const LikePage = () => {
  const[likeId, setLikeId] = useState([]);    
  
  useEffect(() => {
    let stored = localStorage.getItem("likeItem");
    setLikeId(stored ? JSON.parse(stored) : []);
  },[]);

  function updateLikes(next){
    setLikeId(next);
    localStorage.setItem("likeItem", JSON.stringify(next));
  }

  const render = ProductList.filter((product) => likeId.includes(product.id))

  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-35 px-4">
        {/* Banner */}
        <div className="text-center mb-15">
            <h1 className="text-4xl font-bold text-[#2E573A] tracking-wide drop-shadow-md">
              Your Favorite Picks
            </h1>
            <p className="mt-2 text-lg text-[#555]">
              Curated with care — the products you love most
            </p>
          </div>

        <div className="flex flex-wrap justify-center mt-[50px]">
          {render.length === 0 ? (
            <h1 className="text-center text-xl font-semibold text-gray-600">
              No Liked item
            </h1>
          ) : (
            <>
              {render.map((product) => {
                return (
                  <Cards
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    review={product.review}
                    onLikeChange={updateLikes}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default LikePage