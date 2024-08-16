"use client";
import { useStoreContext } from "@/app/context/StoreContext";
import { Constants } from "@/constants";
import React, { useState } from "react";
import { Product } from "./Product";
import { ArrowUpDown } from "../svg/ArrowUpDown";

const popularity = [
  "Relevance",
  "Rating",
  "Price -- High to Low",
  "Price -- Low to High",
];

export const ProductsDisplay = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState<string>();
  const { products } = useStoreContext();
  return (
    <>
      <div
        className={`border-b h-[${Constants.SidebarHeading}px] text-xs font-medium`}
      >
        {/* smaller screens */}
        <div className="flex h-full items-center gap-2 px-2 md:hidden relative">
          <button
            className="flex gap-2 items-center border px-4 py-1 rounded-md group hover:bg-blue-600 hover:text-white hover:border-white"
            onClick={() => {
              setShowModal((prev) => !prev);
            }}
          >
            <p>Sort by</p>
            <ArrowUpDown />
          </button>
          {/* modal */}
          {showModal && (
            <div className="absolute !bottom-[-100px] bg-white shadow-light-900 p-2 rounded-lg z-[100]">
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
          )}
        </div>
        {/* bigger screens */}
        <div className="hidden md:flex items-center h-full gap-2 px-4">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
        {products.map((prod) => {
          return <Product key={prod.id} {...prod} />;
        })}
      </div>
    </>
  );
};
