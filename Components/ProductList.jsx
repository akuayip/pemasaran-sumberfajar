import { product_data } from "@/Assets/assets";
import React, { useState } from "react";
import ProductItem from "./Productitem";

const ProductList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Makanan")}
          className={
            menu === "Makanan" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Makanan
        </button>
        <button
          onClick={() => setMenu("Minuman")}
          className={
            menu === "Minuman" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Minuman
        </button>
        <button
          onClick={() => setMenu("Lain-lain")}
          className={
            menu === "Lain-lain"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Lain-Lain
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {product_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item) => {
            return (
              <ProductItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
