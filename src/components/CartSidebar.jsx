import React, { useContext } from "react";
import { Link } from "react-router";
import { Cart } from "../context/CartContext";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } =
    useContext(Cart);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <aside
      className={` fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#111] border-l border-white/10
      z-50 flex flex-col transition-transform duration-300 ease-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >

      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <h2 className="text-white font-bold text-lg">Cart</h2>

        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-xl text-white/50 hover:text-white"
        >
          ✖
        </button>
      </div>


      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">


        {cartItems.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <p className="text-white/70 text-lg">Cart is empty</p>
            <p className="text-white/30 text-sm mt-1 mb-4">
              Go shop something cool!
            </p>

            <Link
              onClick={onClose}
              to="/shop"
              className="px-4 py-2 bg-[#c8f400] text-black rounded-xl font-semibold"
            >
              Browse Products
            </Link>
          </div>
        )}


        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-3 bg-white/5 border border-white/10 rounded-2xl"
          >
      
            <div className="w-[72px] h-[72px] bg-white rounded-xl flex items-center justify-center p-2">
              <img
                src={item.thumbnail || item.images?.[0]}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>


            <div className="flex-1 min-w-0">
              <p className="text-sm text-white/80 font-semibold line-clamp-2">
                {item.title}
              </p>

              <p className="text-[#c8f400] font-bold text-base mt-1">
                ${item.price}
              </p>

              <p className="text-white/30 text-xs">
                ${item.price} each
              </p>

     
              <div className="flex items-center gap-2 mt-2">

        
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg border border-white/10"
                >
                  −
                </button>

         
                <span className="text-sm font-bold w-5 text-center text-white">
                  {item.quantity}
                </span>

           
                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg border border-white/10"
                >
                  +
                </button>

          
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-auto cursor-pointer text-red-400/60 hover:text-red-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t border-white/10">
          <p className="text-white font-bold mb-3">
            Total: ${total.toFixed(2)}
          </p>

          <button className="w-full bg-[#c8f400] text-black py-3 rounded-xl font-bold">
            Checkout
          </button>
        </div>
      )}
    </aside>
  );
};

export default CartSidebar;