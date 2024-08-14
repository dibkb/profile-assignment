"use client";
import React from "react";
import { CartICon } from "../svg/Cart";

const Cart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-1 gap-1 text-xs text-white cursor-pointer rounded-md w-20  hover:bg-blue-500">
      <CartICon className="size-5" />
      <p>Cart</p>
    </div>
  );
};

export default Cart;
