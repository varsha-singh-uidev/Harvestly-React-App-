import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } =
    useContext(CartContext);

  const subTotal = cartItems.reduce((acc, item) => {return acc + (item.price * item.quantity)}, 0);
  const delivery = subTotal * 0.05;
  const Total = subTotal + delivery;

  return (
    <div className="max-w-[1200px] mx-auto mt-35 px-4">

      {cartItems.length === 0 ? (
        <h1 className="text-center text-xl font-semibold text-gray-600">
          No Items in Cart
        </h1>
      ) : (
        <>
          {/* ---- Header Row ---- */}
          <div className="grid grid-cols-6 font-semibold border-b border-b-zinc-500 py-3 text-gray-700 text-[14px] sm:text-[18px]">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p className="text-center">Total</p>
            <p className="text-center">Remove</p>
          </div>

          {/* ---- Cart Items ---- */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-6 items-center border-b border-b-zinc-400 py-4 text-[14px] md:text-[16px]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />

              {/* Title */}
              <p className="font-medium">{item.title}</p>

              {/* Price */}
              <p className="text-green-600 font-medium">Rs. {item.price}</p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-gray-200 px-1 md:px-2 rounded"
                >
                  -
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, +1)}
                  className="bg-gray-200 px-1 md:px-2 rounded"
                >
                  +
                </button>
              </div>

              {/* Total */}
              <p className="font-semibold text-center">
                Rs. {item.price * item.quantity}
              </p>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-semibold text-center"
              >
                ✕
              </button>
            </div>
          ))}
          {/* cart total sectoin */}
          <div className="mt-20 md:w-[500px] bg-amber-0 px-6 ">
            <h1 className="text-3xl font-semibold mb-6 ">Cart Totals</h1>
                <div className="flex w-full justify-between border-b border-b-zinc-300 py-3">
                  <p>SubTotal</p>
                  <p>{subTotal}</p>
                </div>
                <div className="flex w-full justify-between border-b border-b-zinc-300 py-3">
                  <p>Delivey Fee</p>
                  <p>{delivery}</p>
                </div>
                <div className="flex w-full justify-between py-3 text-red-500">
                  <p>Total</p>
                  <p>{Total}</p>
                </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
