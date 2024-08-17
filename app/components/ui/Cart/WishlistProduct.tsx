"use client";
import { Product } from "@/types/products";
import React from "react";
import { ProductDetails } from "./ProductDetails";
import { useStoreContext } from "@/app/context/StoreContext";

export const WishlistProduct = ({ id, ...rest }: Product) => {
  const { setWishlist } = useStoreContext();
  function removeHandler() {
    setWishlist((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  }
  return (
    <div>
      <ProductDetails {...rest} id={id} />
      <button
        className={
          "uppercase font-medium text-zinc-500 px-4 hover:text-zinc-600 my-4"
        }
        onClick={removeHandler}
      >
        Remove from Wishlist
      </button>
    </div>
  );
};
