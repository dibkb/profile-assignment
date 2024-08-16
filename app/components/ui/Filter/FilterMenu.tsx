"use client";
import React from "react";
import { Categories } from "./Categories";
import { CustomerRating } from "./CustomerRating";

export const FilterMenu = () => {
  return (
    <>
      <div className="flex items-center gap-2 border-b p-4">
        <h2 className="text-xl font-medium">Filters</h2>
      </div>
      {/* Categories */}
      <Categories />
      {/* Customer rating */}
      <CustomerRating />
    </>
  );
};
