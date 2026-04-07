import { Link, NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { Cart } from "../context/CartContext";


const Navbar = ({ onCartClick }) => {
    
    const { cartItems } = useContext(Cart);
    let cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
     const { loggedInUser } = useContext(Auth);
    const [scrolled, setScrolled] = useState(false);
    const { logout } = useContext(Auth);
    const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky    w-full top-0 z-30 transition-all duration-300 bg-black/40 backdrop-blur-sm border-b  ${scrolled ? "border-white" : "border-white/10 "}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-[#c8f400] rounded-xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-ink fill-ink"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          </div>
          <span className="font-short text-[18px] font-[550]  text-white ">
            Sky<span className=" text-[#c8f400] ">Mart</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden font-semibold text-sm  text-white/60 md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? " text-[#c8f400] " : "hover:text-white "}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `${isActive ? " text-[#c8f400] " : "hover:text-white "}`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              ` ${isActive ? " text-[#c8f400] " : "hover:text-white "}`
            }
          >
            About
          </NavLink>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2 shrink-0">

          {/* User */}
          <div className="hidden sm:flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-xl">
            <div className="w-6 h-6 bg-[#c8f400] rounded-lg flex items-center justify-center text-ink text-xs font-bold">
                {loggedInUser?.name ? loggedInUser.name[0] : "G"}
            </div>
            <span className="text-[14px] text-white/70 font-body max-w-[100px] font-semibold  truncate">
                {loggedInUser?.name || "Guest"}
            </span>
          </div>

          {/* Cart */}
          <button
          
          onClick={onCartClick}
          className="relative p-2.5 cursor-pointer hover:bg-white/12 border text-white/60 border-white/10 rounded-xl transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
            <span className="absolute -top-1 -right-1 text-xs bg-[#c8f400] text-black px-1 rounded">
  {cartItemCount}
</span>
          </button>

          {/* Logout */}

<NavLink
onClick={() => {
    logout();           
    navigate("/auth");   
  }}
 
  className="p-2.5 cursor-pointer hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400 flex items-center justify-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-log-out"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" x2="9" y1="12" y2="12"></line>
  </svg>
</NavLink>

          {/* Mobile Menu */}
          <button className="md:hidden p-2.5 bg-white/8 border border-white/10 rounded-xl">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;