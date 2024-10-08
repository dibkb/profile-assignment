"use client";
import { useStoreContext } from "@/app/context/StoreContext";
import React, { useState } from "react";
import { Product } from "./Product";
import { ArrowUpDown } from "../svg/ArrowUpDown";
import { Filterby } from "../svg/Filterby";
import { FilterMenu } from "../Filter/FilterMenu";
import { Sort } from "@/types/products";

const popularity: (keyof typeof Sort)[] = [
  "Relevance",
  "Rating",
  "Price -- High to Low",
  "Price -- Low to High",
];

export const ProductsDisplay = () => {
  const { sort, setSort, finalProducts } = useStoreContext();
  const [showModal, setShowModal] = useState<"sort" | "filter">();
  const sortList = popularity.map((ele) => (
    <li
      onClick={() => setSort(ele)}
      key={ele}
      className={`cursor-pointer px-4 py-1 rounded-lg hover:bg-blue-100 hover:text-blue-600 ${
        sort === ele && "bg-blue-100 text-blue-600"
      }`}
    >
      {ele}
    </li>
  ));
  function toggleClickHandler(opt: typeof showModal) {
    setShowModal((prev) => {
      if (prev !== undefined) {
        return undefined;
      } else return opt;
    });
  }
  const butonStyle = `flex gap-2 items-center border px-4 py-1 rounded-md group hover:bg-blue-600 hover:text-white hover:border-white`;
  return (
    <>
      <div className={`border-b h-[64px] text-xs font-medium`}>
        {/* smaller screens */}
        <div className="flex h-full items-center gap-2 px-2 md:hidden relative">
          <button
            className={butonStyle}
            onClick={() => toggleClickHandler("sort")}
          >
            <span>Sort by</span>
            <ArrowUpDown />
          </button>
          <button
            className={butonStyle}
            onClick={() => toggleClickHandler("filter")}
          >
            <span>Filter by</span>
            <Filterby />
          </button>
          {/* modal */}
          {showModal === "sort" && (
            <div className="absolute bottom-0 transform translate-y-full bg-white shadow-light-900 p-2 rounded-lg z-[100]">
              <ul className="space-y-2">{sortList}</ul>
            </div>
          )}
          {showModal === "filter" && (
            <div className="absolute bottom-0 w-[99vw] left-0 transform translate-y-full bg-white shadow-light-900 p-2 rounded-lg z-[100]">
              <FilterMenu />
            </div>
          )}
        </div>
        {/* bigger screens */}
        <div className="hidden md:flex items-center h-full gap-2 px-4">
          <span>Sort by</span>
          <ul className="flex gap-2">{sortList}</ul>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
        {finalProducts.map((prod) => (
          <Product key={prod.id} {...prod} />
        ))}
      </div>
    </>
  );
};
