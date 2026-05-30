import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { products } from "../components/data/products";
import ScrollToTop from "../components/ScrollToTop";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("Усі товари");
  const [search, setSearch] = useState("");

 const filteredProducts = products.filter((product) => {
  const categoryMatch =
    selectedCategory === "Усі товари" ||
    product.category === selectedCategory;

  const searchMatch =
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.brand.toLowerCase().includes(search.toLowerCase());

  return categoryMatch && searchMatch;
});

  return (
    <>
      <Navbar />

      <section className="max-w-screen-2xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black mb-8">
          Каталог товарів
        </h1>

        <input
  type="text"
  placeholder="Пошук товарів..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full mb-8 px-5 py-4 rounded-2xl border border-gray-300 outline-none focus:border-black"
/>

        <div className="flex flex-wrap gap-3 mb-10">
  <button
    onClick={() => setSelectedCategory("Усі товари")}
    className={`px-5 py-2 rounded-full ${
      selectedCategory === "Усі товари"
        ? "bg-black text-white"
        : "bg-gray-200"
    }`}
  >
    Усі товари
  </button>

  <button
    onClick={() => setSelectedCategory("Солодощі")}
    className={`px-5 py-2 rounded-full ${
      selectedCategory === "Солодощі"
        ? "bg-black text-white"
        : "bg-gray-200"
    }`}
  >
    Солодощі
  </button>

  <button
    onClick={() => setSelectedCategory("Кава")}
    className={`px-5 py-2 rounded-full ${
      selectedCategory === "Кава"
        ? "bg-black text-white"
        : "bg-gray-200"
    }`}
  >
    Кава
  </button>

  <button
    onClick={() => setSelectedCategory("Напої")}
    className={`px-5 py-2 rounded-full ${
      selectedCategory === "Напої"
        ? "bg-black text-white"
        : "bg-gray-200"
    }`}
  >
    Напої
  </button>

  <button
    onClick={() => setSelectedCategory("Побутова хімія")}
    className={`px-5 py-2 rounded-full ${
      selectedCategory === "Побутова хімія"
        ? "bg-black text-white"
        : "bg-gray-200"
    }`}
  >
    Побутова хімія
  </button>

  <button
    onClick={() => setSelectedCategory("Для дому")}
    className={`px-5 py-2 rounded-full ${
      selectedCategory === "Для дому"
        ? "bg-black text-white"
        : "bg-gray-200"
    }`}
  >
    Для дому
  </button>
</div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />

                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-xl font-bold">
                    -{product.discount}%
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {product.brand}
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <span className="text-2xl font-black text-red-600">
                    {product.price} ₴
                  </span>

                  {product.oldPrice && (
                    <span className="text-gray-400 line-through">
                      {product.oldPrice} ₴
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-400 mt-2">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}