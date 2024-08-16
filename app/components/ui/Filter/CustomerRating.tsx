import React, { useState } from "react";
import { FilterSubmenu } from "./FilterSubmenu";
import { Check } from "../svg/Check";
import { Star } from "../svg/Star";

const stars = [1, 2, 3, 4];

export const CustomerRating = () => {
  // Use useState to manage the selected stars
  const [selectedStars, setSelectedStars] = useState<Set<number>>(new Set());

  function categoryClickHandler(ele: number) {
    setSelectedStars((prevSelectedStars) => {
      const newSelectedStars = new Set(prevSelectedStars);
      if (newSelectedStars.has(ele)) {
        newSelectedStars.delete(ele);
      } else {
        newSelectedStars.add(ele);
      }
      return newSelectedStars;
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
                selectedStars.has(ele)
                  ? "bg-blue-600 border-blue-600"
                  : "hover:bg-blue-600 hover:border-blue-600"
              }`}
            >
              {selectedStars.has(ele) && <Check className="text-white" />}
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
