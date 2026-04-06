import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCards";
import ShopFilters from "../components/ShopFilters";
import axios from "axios";
import { set } from "react-hook-form";


const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [filter, setFilter] = useState([])

  
  let fetchProducts = async ()=>{
    try {
        let res = await axios.get ("https://dummyjson.com/products")
        res = res.data.products
        setFilter(res)
        
    } catch (error) {
            console.log(error)
    }
  }
  useEffect (()=>{
    fetchProducts()
  },[])

  console.log(filter)

 let filteredProducts = [...filter];

 


  // Search
  if (search) {
    filteredProducts = filteredProducts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Category
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === category
    );
  }

  // Sorting
  if (sort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating-desc") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">All Products</h1>
        <p className="text-white/40 text-sm">
          {filteredProducts.length} products found
        </p>
      </div>

      {/* Filters */}
      <ShopFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default Shop;