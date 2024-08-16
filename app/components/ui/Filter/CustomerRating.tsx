import React, { useState } from "react";
import { FilterSubmenu } from "./FilterSubmenu";
import { Check } from "../svg/Check";
import { Star } from "../svg/Star";
import { useStoreContext } from "@/app/context/StoreContext";

const stars = [1, 2, 3, 4];

export const CustomerRating = () => {
  const { filter, setFilter } = useStoreContext();

  const isRatingSelected = (ele: number) => {
    return filter.rating.includes(ele);
  };
  function categoryClickHandler(ele: number) {
    setFilter((prev) => {
      if (isRatingSelected(ele)) {
        //   remove rating to filer
        return { ...prev, rating: prev.rating.filter((r) => r !== ele) };
      } else {
        //   add rating from filter
        return { ...prev, rating: [...prev.rating, ele] };
      }
    });
  }

  return (
    <FilterSubmenu title="Customer Ratings">
      {stars.map((ele, id) => {
        return (
          <div
            key={ele}
            className="items-center grid grid-cols-11 gap-1 cursor-pointer max-w-[150px]"
            onClick={() => categoryClickHandler(ele)}
          >
            <small
              className={`col-span-2 h-4 w-4 flex items-center justify-center border rounded-sm ${
                isRatingSelected(ele)
                  ? "bg-blue-600 border-blue-600"
                  : "hover:bg-blue-600 hover:border-blue-600"
              }`}
            >
              {isRatingSelected(ele) && <Check className="text-white" />}
            </small>
            <p className="col-span-1 flex items-center gap-[1px]">{ele}</p>
            <Star
              className="col-span-2 size-4"
              fill="#52525b"
              stroke="#52525b"
            />
            <p className="col-span-6 text-sm">& above</p>
          </div>
        );
      })}
    </FilterSubmenu>
  );
};
