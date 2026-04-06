import { Link } from "react-router";
import Footer from "../components/Footer";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";

const Home = () => {
    const { loggedInUser } = useContext(Auth);
  return (
    <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl bg-[#111] border border-white/10 p-8 sm:p-12 mb-10">
        
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          
          <div>
            <p className="text-[#c8f400]/70 text-sm tracking-widest uppercase mb-3">
              Good morning 👋
            </p>

            <h1 className="font-short font-[530] tracking-wide text-4xl sm:text-5xl text-white leading-tight mb-4">
              Welcome back,<br />
              <span className="text-[#c8f400] ">{loggedInUser?.name || "Guest"}</span>
            </h1>

            <p className="text-white/40 max-w-md">
             Discover today's picks — hand-curated products across electronics, fashion, and more.
            </p>

            <div className="flex gap-3 mt-6 flex-wrap">
              <Link
                to="/shop"
                className="px-5 py-2 bg-[#c8f400] text-black rounded-xl font-bold"
              >
                Shop Now →
              </Link>

              <Link
                to="/shop"
                className="px-5 py-2 border border-white/20 text-white rounded-xl"
              >
                View All
              </Link>
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex flex-col gap-3">
            <div className="bg-[#c8f400]/10 border border-[#c8f400]/20 rounded-2xl px-6 py-4 text-center">
              <p className="font-short font-[530] text-4xl text-[#c8f400]">20+</p>
              <p className="text-white/40 text-xs mt-1">Products Available</p>
            </div>

            <div className="bg-white/1 border border-white rounded-2xl px-6 py-4 text-center">
              <p className="font-short font-[530] text-2xl text-white">Free</p>
              <p className="text-white/40 text-xs mt-1">Delivery on ₹999+</p>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">

        <div className="bg-[#111] border flex gap-4 border-white rounded-2xl p-6">
        <div className="bg-[#c7f40025] h-fit w-fit text-[#c8f400] p-3 rounded-xl ">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path><path d="m7.5 4.27 9 5.15"></path></svg>

        </div>
        <div>
           <p className="text-white text-2xl font-bold">0</p>
          <p className="text-white/50 text-sm">Cart Items</p>
          <p className="text-white/20 text-[13px]">In your bag</p>
        </div>
        </div>
        <div className="bg-[#111] border flex gap-4 border-white rounded-2xl p-6">
        <div className="bg-[#151c28] h-fit w-fit text-[#60a5fa] p-3 rounded-xl ">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>

        </div>
        <div>
           <p className="text-white text-2xl font-bold">$0.00</p>
          <p className="text-white/50 text-sm">Cart Value</p>
          <p className="text-white/20 text-[13px]">Ready to checkout</p>
        </div>
        </div>
        <div className="bg-[#111] border flex gap-4 border-white rounded-2xl p-6">
        <div className="bg-[#201828] h-fit w-fit text-[#c084fc] p-3 rounded-xl ">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>

        </div>
        <div>
           <p className="text-white text-2xl font-bold">5</p>
          <p className="text-white/50 text-sm">Categories</p>
          <p className="text-white/20 text-[13px]">To Explore</p>
        </div>
        </div>
        <div className="bg-[#111] border flex gap-4 border-white rounded-2xl p-6">
        <div className="bg-[#281f10] h-fit w-fit text-[#f6bc23] p-3 rounded-xl ">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>

        </div>
        <div>
           <p className="text-white text-2xl font-bold">5</p>
          <p className="text-white/50 text-sm">Top Products</p>
          <p className="text-white/20 text-[13px]">Highly Rated</p>
        </div>
        </div>


      </div>

      {/* CATEGORY */}
      <section className="mb-10">
        <div className="flex justify-between mb-5">
          <h2 className="font-short font-bold text-xl text-white">
            Shop by Category
          </h2>
          <Link to="/shop" className="text-[#c8f400] text-sm">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

<Link
  to="/shop"
  className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-[2px] text-white rounded-2xl p-5 text-center"
>
  💻
  <p>Electronics</p>
  <p className="text-[13px] text-white/50">100+ Products</p>
</Link>

<Link
  to="/shop"
  className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-[2px] text-white rounded-2xl p-5 text-center"
>
  👕
  <p>Clothing</p>
  <p className="text-[13px] text-white/50">80+ Products</p>
</Link>

<Link
  to="/shop"
  className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-[2px] text-white rounded-2xl p-5 text-center"
>
  🪑
  <p>Furniture</p>
  <p className="text-[13px] text-white/50">60+ Products</p>
</Link>

<Link
  to="/shop"
  className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-[2px] text-white rounded-2xl p-5 text-center"
>
  🏠
  <p>Home</p>
  <p className="text-[13px] text-white/50">120+ Products</p>
</Link>

<Link
  to="/shop"
  className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-[2px] text-white rounded-2xl p-5 text-center"
>
  🏃
  <p>Sports</p>
  <p className="text-[13px] text-white/50">50+ Products</p>
</Link>

<Link
  to="/shop"
  className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-[2px] text-white rounded-2xl p-5 text-center"
>
  🎒
  <p>Accessories</p>
  <p className="text-[13px] text-white/50">70+ Products</p>
</Link>

        </div>
      </section>

      {/* FEATURES */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-[#111] items-center border  text-[#c8f400] border-white rounded-2xl p-5 flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap text-volt"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          <div>
            <p className="text-white font-semibold">Fast Delivery</p>
            <p className="text-white/30 text-xs">Same-day available</p>
          </div>
        </div>

        <div className="bg-[#111] border items-center  text-[#60a5fa] border-white rounded-2xl p-5 flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield text-blue-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
          <div>
            <p className="text-white font-semibold">Secure Payments</p>
            <p className="text-white/30 text-xs">100% safe</p>
          </div>
        </div>

        <div className="bg-[#111] border items-center  border-white rounded-2xl p-5 flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag text-green-400"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
          <div>
            <p className="text-white font-semibold">Best Prices</p>
            <p className="text-white/30 text-xs">Guaranteed</p>
          </div>
        </div>

      </div>

    </div>
    <Footer />
    </div>
  );
};

export default Home;