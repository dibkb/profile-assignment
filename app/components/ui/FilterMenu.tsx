"use client";
import { Category } from "@/types/products";
import React, { useState } from "react";
import { Check } from "./svg/Check";

const categories = ["All", ...Object.keys(Category)];

export const FilterMenu = () => {
  // Using useState to manage selectedCategories
  const [selectedCategories, setSelectedCategories] = useState<
    Map<number, string>
  >(new Map());

  function categoryClickHandler(id: number) {
    setSelectedCategories((prevSelectedCategories) => {
      const newSelectedCategories = new Map(prevSelectedCategories);
      if (newSelectedCategories.has(id)) {
        newSelectedCategories.delete(id);
      } else {
        newSelectedCategories.set(id, categories[id]);
      }
      return newSelectedCategories;
    });
  }

  return (
    <>
      <div className="flex items-center gap-2 border-b p-4">
        <h2 className="text-xl font-medium">Filters</h2>
      </div>
      <div className="p-4">
        <h3 className="uppercase text-xs font-medium">Categories</h3>
        <div className="flex flex-col gap-2 mt-4">
          {categories.map((ele, id) => {
            return (
              <span
                key={ele}
                className="flex items-center gap-2 cursor-pointer "
                onClick={() => categoryClickHandler(id)}
              >
                <small
                  className={`h-4 w-4 flex items-center justify-center border rounded-sm ${
                    selectedCategories.has(id)
                      ? "bg-blue-600 border-blue-600"
                      : "hover:bg-blue-600 hover:border-blue-600"
                  }`}
                >
                  <Check className="text-white" />
                </small>
                <p>{ele}</p>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};
