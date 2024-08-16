"use client";
import React from "react";
import { Categories } from "./Categories";
import { CustomerRating } from "./CustomerRating";
import { FlipkartAssured } from "./FlipkartAssured";

const style = `flex items-center gap-2 border-b h-[64px] px-4`;
export const FilterMenu = () => {
  return (
    <>
      <div className={style}>
        <h2 className="text-xl font-medium">Filters</h2>
      </div>
      {/* Categories */}
      <Categories />
      {/* Customer rating */}
      <CustomerRating />
      {/* Flipkart assured */}
      <FlipkartAssured />
    </>
  );
};
