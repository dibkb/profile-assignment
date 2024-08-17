"use client";

import React from "react";
import { PriceDetails } from "../components/ui/Cart/PriceDetails";
import { CartDetails } from "../components/ui/Cart/CartDetails";
import { WishlistCard } from "../components/ui/Cart/WishlistCard";

const Cart = () => {
  return (
    <div
      className={`bg-zinc-200 p-2 grid grid-cols-12 gap-2 min-h-[calc(100vh-64px)] grid-rows-[auto_1fr]`}
    >
      {/* mobile screens */}
      <div className="col-span-12">
        <PriceDetails />
      </div>
      <div className="col-span-12">
        {/* Cart details */}
        <CartDetails />
      </div>
      <div className="col-span-12">
        {/* Wishlist details */}
        <WishlistCard />
      </div>
    </div>
  );
};
export default Cart;
