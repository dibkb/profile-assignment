import { CartItem, Product } from "@/types/products";
import React from "react";

export const ProductDetails = ({
  image,
  title,
  assured,
  price,
}: CartItem | Product) => {
  return (
    <div className="flex gap-4 p-2">
      <div
        className="w-40 h-40"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="text-sm flex flex-col gap-3">
        <p>{title}</p>
        {assured && (
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            width={70}
            alt="Assured"
          />
        )}
        <p className="font-medium">₹{price}</p>
      </div>
    </div>
  );
};
