import { type Product as ProductType } from "@/types/products";
import React from "react";
import { Heart } from "../svg/Heart";
import { Star } from "../svg/Star";

export const Product = ({
  title,
  image,
  price,
  rating,
  assured,
}: ProductType) => {
  return (
    <div className="p-2 rounded-md hover:bg-blue-50 group cursor-pointer flex flex-col gap-2">
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
      {/* title */}
      <p className="text-xs font-medium group-hover:text-blue-700 line-clamp-1">
        {title}
      </p>
      {/* rating and assured */}
      <div className="flex gap-4 items-center">
        <span className="flex text-xs gap-1 items-center w-min py-[2px] px-2 rounded-md bg-green-600 text-white">
          <p>{rating}</p>
          <Star className="size-3 fill-white" />
        </span>
        {assured && (
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            width={70}
          />
        )}
      </div>
      {/* price */}
      <p className="text-xs font-medium">₹{price}</p>
      {/* add to cart */}
      <button className="text-sm bg-blue-500 hover:bg-blue-600 transition-colors duration-400 rounded-lg py-2 text-white">
        Add to Cart
      </button>
    </div>
  );
};
