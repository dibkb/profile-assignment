"use client";
import { Constants } from "@/constants";
import React, { useState } from "react";

const popularity = ["Rating", "Price -- High to Low", "Price -- Low to High"];
export const ProductsDisplay = () => {
  const [selected, setSelected] = useState<string>();
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
    </>
  );
};
