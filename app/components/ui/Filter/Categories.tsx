"use client";
import React, { useState } from "react";
import { FilterSubmenu } from "./FilterSubmenu";
import { Category } from "@/types/products";
import { Check } from "../svg/Check";
import { useStoreContext } from "@/app/context/StoreContext";
const categories = ["All", ...Object.keys(Category)];
export const Categories = () => {
  const { filter, setFilter } = useStoreContext();

  const isCatSelected = (ele: string) => {
    return filter.category.includes(ele);
  };
  function categoryClickHandler(ele: string) {
    setFilter((prev) => {
      if (isCatSelected(ele)) {
        // remove from cat-filter
        return { ...prev, category: prev.category.filter((p) => p !== ele) };
      } else {
        // add to cat-filter
        return { ...prev, category: [...prev.category, ele] };
      }
    });
  }
  return (
    <FilterSubmenu title="Categories">
      <div className="flex flex-col gap-2">
        {categories.map((ele, id) => {
          return (
            <span
              key={ele}
              className="flex items-center gap-2 cursor-pointer "
              onClick={() => categoryClickHandler(ele)}
            >
              <small
                className={`h-4 w-4 flex items-center justify-center border rounded-sm ${
                  isCatSelected(ele)
                    ? "bg-blue-600 border-blue-600"
                    : "hover:bg-blue-600 hover:border-blue-600"
                }`}
              >
                {isCatSelected(ele) && <Check className="text-white" />}
              </small>
              <p>{ele}</p>
            </span>
          );
        })}
      </div>
    </FilterSubmenu>
  );
};
