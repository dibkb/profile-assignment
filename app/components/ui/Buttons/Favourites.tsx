"use client";
import React from "react";
import { Heart } from "../svg/Heart";

export const Favourites = () => {
  return (
    <div className="flex flex-col items-center gap-1 text-xs text-white cursor-pointer rounded-md w-20 justify-center hover:bg-blue-500">
      <Heart className="size-5" />
      <h2>Wishlist</h2>
    </div>
  );
};
