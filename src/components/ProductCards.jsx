import { NavLink } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <NavLink
      to={`/products/${product.id}`}
      className="flex flex-col group bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-[2px] transition-all duration-300"
    >
      
      {/* Image */}
      <div className="relative aspect-square bg-white overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500 hover:shadow-2xl-[#c8f400] rounded-xl"
        />

        <span className="absolute top-3 left-3 text-[10px] px-2 py-1 bg-black/60 text-white/80 rounded capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">

        {/* Category */}
        <p className="text-white/30 text-[10px] uppercase tracking-widest">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="text-white/85 text-sm leading-snug line-clamp-2 flex-1">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-[10px] text-white/40">
          ⭐ {product.rating} ({product.reviews})
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
          <span className="font-bold text-[#c8f400] text-lg">
            ${product.price}
          </span>

          <button className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#c8f400] text-black hover:bg-[#dfff4f] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg> Add
          </button>
        </div>

      </div>
    </NavLink>
  );
};

export default ProductCard;