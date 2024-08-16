"use client";
import React, { useState } from "react";
import { FilterSubmenu } from "./FilterSubmenu";
import { Category } from "@/types/products";
import { Check } from "../svg/Check";
const categories = ["All", ...Object.values(Category)];
export const Categories = () => {
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
    <FilterSubmenu title="Categories">
      <div className="flex flex-col gap-2">
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
                {selectedCategories.has(id) && <Check className="text-white" />}
              </small>
              <p>{ele}</p>
            </span>
          );
        })}
      </div>
    </FilterSubmenu>
  );
};
