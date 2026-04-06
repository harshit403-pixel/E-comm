import React from "react";
import { useState } from "react";


const ShopFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
}) => {
  return (
    <div className="bg-[#111] border border-white rounded-2xl p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-3">

        {/* Search */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full h-10 pl-10 pr-4 bg-black border border-white/10 rounded-lg text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category */}
        <select
          className="h-10 px-3 bg-black border border-white/10 rounded-lg text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="fragrances">Fragrances</option>
          <option value="groceries">Groceries</option>
          <option value="furniture">Furniture</option>
          <option value="beauty">Beauty</option>
        </select>

        {/* Sorting */}
        <select
          className="h-10 px-3 bg-black border border-white/10 rounded-lg text-white"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Featured</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating-desc">Top Rated</option>
        </select>

      </div>
    </div>
  );
};

export default ShopFilters;