import React, { useState } from "react";

function MultiFilterDashboard() {
  const products = [
    { id: 1, name: "Smartphone", category: "Electronics", price: 199 },
    { id: 2, name: "T-Shirt", category: "Clothing", price: 25 },
    { id: 3, name: "Book: React Basics", category: "Books", price: 40 },
    { id: 4, name: "Headphones", category: "Electronics", price: 80 },
    { id: 5, name: "Jeans", category: "Clothing", price: 60 },
    { id: 6, name: "Keyboard", category: "Electronics", price: 120 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });

  const handlePriceChange = (range) => {
    const [min, max] = range.split("-").map(Number);
    setPriceRange({ min, max });
  };

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchPrice = p.price >= priceRange.min && p.price <= priceRange.max;
    return matchCategory && matchPrice;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[500px]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Multi-Filter Dashboard
        </h2>

        {/* Filter Controls */}
        <div className="flex justify-between mb-6">
          {/* Category Filter */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Category:</label>
            <select
              className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Price:</label>
            <select
              className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => handlePriceChange(e.target.value)}
            >
              <option value="0-50">$0–50</option>
              <option value="51-100">$51–100</option>
              <option value="101-200">$101–200</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <div
                key={p.id}
                className="border rounded-lg px-4 py-2 flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">{p.name}</span>
                <span className="text-sm text-gray-500">
                  {p.category} • ${p.price}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center py-6">
              No products match the selected filters 😅
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MultiFilterDashboard;
