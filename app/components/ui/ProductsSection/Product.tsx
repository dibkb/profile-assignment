import { type Product as ProductType } from "@/types/products";
import React from "react";
import { Heart } from "../svg/Heart";

export const Product = ({
  title,
  image,
  price,
  rating,
  assured,
}: ProductType) => {
  return (
    <div className="p-2 rounded-md hover:bg-blue-50 hover:text-blue-700 cursor-pointer flex flex-col gap-2">
      <div
        className="h-80 relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button className="absolute bottom-2 right-2 group">
          <Heart className="size-5 text-red-600 hover:fill-red-600 hover:animate-bounce" />
        </button>
      </div>
      <p className="text-xs font-medium">{title}</p>
      {/* rating and assured */}

      {/* price */}
    </div>
  );
};
