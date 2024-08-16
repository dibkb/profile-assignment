import React, { useState } from "react";
import { FilterSubmenu } from "./FilterSubmenu";
import { Check } from "../svg/Check";
import { useStoreContext } from "@/app/context/StoreContext";

export const FlipkartAssured = () => {
  const { filter, setFilter } = useStoreContext();
  const isSelected = () => {
    return filter.assured;
  };
  function toggleSelectHandler() {
    setFilter((prev) => ({ ...prev, assured: !prev.assured }));
  }
  return (
    <FilterSubmenu title="Flipkart Assured">
      <span
        className="flex items-center gap-4 cursor-pointer"
        onClick={toggleSelectHandler}
      >
        <small
          className={`h-4 w-4 flex items-center justify-center border rounded-sm ${
            isSelected()
              ? "bg-blue-600 border-blue-600"
              : "hover:bg-blue-600 hover:border-blue-600"
          }`}
        >
          {isSelected() && <Check className="text-white" />}
        </small>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
          alt="Flipkart assured"
          width={80}
        />
      </span>
    </FilterSubmenu>
  );
};
