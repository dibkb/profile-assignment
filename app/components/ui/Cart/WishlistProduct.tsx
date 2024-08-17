import { Product } from "@/types/products";
import React from "react";
import { ProductDetails } from "./ProductDetails";

export const WishlistProduct = ({ id, ...rest }: Product) => {
  return (
    <div>
      <ProductDetails {...rest} id={id} />
    </div>
  );
};
