import { Category } from "@/types/products";
import React from "react";

export const FilterMenu = () => {
  const categories = Object.keys(Category);
  return (
    <>
      <div className="flex items-center gap-2 border-b p-4">
        <h2 className="text-xl font-medium">Filters</h2>
      </div>
      <div className="p-4">
        <h3 className="uppercase text-xs font-medium">Categories</h3>
        <div className="flex flex-col gap-2 mt-4">
          {categories.map((ele) => {
            return (
              <span key={ele} className="flex items-center gap-2 ">
                <small className="h-4 w-4 border rounded-sm"></small>
                <p>{ele}</p>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};
