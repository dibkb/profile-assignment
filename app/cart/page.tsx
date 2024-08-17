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
      {/* Left column on md screens */}
      <div className="col-span-12 lg:col-span-8 lg:row-span-2 lg:order-1">
        <div className="mb-2">
          <CartDetails />
        </div>
        <div>
          <WishlistCard />
        </div>
      </div>

      {/* Right column on md screens */}
      <div className="col-span-12 lg:col-span-4 lg:row-span-2 lg:order-2">
        <PriceDetails />
      </div>
    </div>
  );
};

export default Cart;
