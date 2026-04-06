import { useParams, NavLink } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return (
      <h1 className="text-white text-center mt-10">Loading...</h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-white">

      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-sm text-white/30 mb-8">
        <NavLink to="/shop" className="hover:text-white">
          ← Products
        </NavLink>
        <span>/</span>
        <span className="capitalize text-white/50">
          {product.category}
        </span>
        <span>/</span>
        <span className="text-white/70 truncate max-w-[200px]">
          {product.title}
        </span>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

        {/* LEFT IMAGE */}
        <div className="bg-white rounded-3xl p-8 flex flex-col gap-4">

          {/* MAIN IMAGE */}
          <img
            src={product.images[activeImage]}
            alt={product.title}
            className="w-full h-[300px] object-contain transition-transform duration-500 hover:scale-105"
          />

          {/* THUMBNAILS */}
          <div className="flex gap-3 justify-center">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-16 object-contain bg-white rounded-lg cursor-pointer p-2 border 
                ${
                  activeImage === i
                    ? "border-[#c8f400]"
                    : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="flex flex-col gap-5">

          <span className="text-[#c8f400] text-xs bg-[#c8f400]/10 px-3 py-1 rounded-xl w-fit capitalize">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2 text-sm text-white/60">
            ⭐ {product.rating} ({product.stock} in stock)
          </div>

          {/* PRICE */}
          <div className="py-4 border-y border-white/10">
            <span className="text-4xl font-bold text-[#c8f400]">
              ${product.price}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-white/50 text-sm leading-relaxed">
            {product.description}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3">
            <button className="flex-1 bg-[#c8f400] text-black py-3 rounded-2xl font-bold hover:opacity-90">
              Add to Cart
            </button>

            <button className="p-3 border border-white/10 rounded-2xl hover:border-red-400 hover:text-red-400">
              ❤️
            </button>
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-3 gap-3 mt-4">

            <div className="bg-white/5 border text-[#c8f400] border-white/10 rounded-xl p-3 text-center text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck text-volt mx-auto mb-1.5"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg> Free Delivery
            </div>

            <div className="bg-white/5 border text-[#c8f400] border-white/10 rounded-xl p-3 text-center text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield text-volt mx-auto mb-1.5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Secure Pay
            </div>

            <div className="bg-white/5 border text-[#c8f400] border-white/10 rounded-xl p-3 text-center text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw text-volt mx-auto mb-1.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg> Easy Returns
            </div>

          </div>

          <div className="flex gap-3 mt-6">
            <NavLink
              to={`/products/${Number(id) - 1}`}
              className="flex-1 text-center bg-white/10 py-2 rounded-xl"
            >
              ← Previous
            </NavLink>

            <NavLink
              to={`/products/${Number(id) + 1}`}
              className="flex-1 text-center bg-[#c8f400] text-black py-2 rounded-xl"
            >
              Next →
            </NavLink>
          </div>

        </div>
      </div>

    
      <h2 className="text-2xl font-bold mb-6">
        Related Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

       
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
          >
            <p className="text-white/40 text-xs">
              Product {item}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ProductDetails;