import React from 'react'
import { Link } from 'react-router';
const CartSidebar = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#111] border-l border-white/10
      z-50 flex flex-col transition-transform duration-300 ease-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <h2 className="text-white font-bold text-lg">Cart</h2>

        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-xl text-white/50 hover:text-white"
        >
          ✖
        </button>
      </div>

    
      <div className="flex-1 flex items-center justify-center text-center">
        <div>
           
                <svg xmlns="http://www.w3.org/2000/svg"  width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide ml-15 lucide-package-open text-white/20"><path d="M12 22v-9"></path><path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"></path><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"></path><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"></path></svg>
            
          <p className="text-white/70 text-lg">Cart is empty</p>
          <p className="text-white/30 text-sm mt-1 mb-4">
            Go shop something cool!
          </p>

          <Link
          onClick={onClose}
          to="/shop" className="mt-5 px-4 py-2 bg-[#c8f400] text-black rounded-xl font-semibold">
            Browse Products
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default CartSidebar;
