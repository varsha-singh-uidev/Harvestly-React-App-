import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState(findLocal);
    // getting the items from the local storage 
    function findLocal(){
        let cart = localStorage.getItem("cartItems");
        if(cart === null){
           return [];
        }else{
           let item = JSON.parse(cart);
           return item;
        }
    }

    // save the cartItem inside the local Storage
    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems])

// Add item to cart
  function addToCart(product) {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      return [...prev, product];
    });
  }

    function removeFromCart(id){
        const update = cartItems.filter((item) => item.id !== id);
        setCartItems(update)
    }

 // Update quantity
  function updateQuantity(id, qty) {
    setCartItems((prev) => {
      return prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove 0 qty items
    });
  }


    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}