"use client";
import { useStoreContext } from "@/app/context/StoreContext";
import { Constants } from "@/constants";
import React, { useState } from "react";
import { Product } from "./Product";

const popularity = ["Rating", "Price -- High to Low", "Price -- Low to High"];
export const ProductsDisplay = () => {
  const [selected, setSelected] = useState<string>();
  const { products } = useStoreContext();
  return (
    <>
      <div
        className={`flex items-center gap-2 border-b h-[${Constants.SidebarHeading}px] px-4 text-xs font-medium`}
      >
        <p>Sort by</p>
        {popularity.map((ele) => (
          <p
            onClick={() => setSelected(ele)}
            key={ele}
            className={`cursor-pointer px-4 py-1 rounded-lg hover:bg-blue-100 hover:text-blue-600 ${
              selected === ele && "bg-blue-100 text-blue-600"
            }`}
          >
            {ele}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 p-2">
        {products.map((prod) => {
          return <Product key={prod.id} {...prod} />;
        })}
      </div>
    </>
  );
};
