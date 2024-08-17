"use client";

import React, { useState } from "react";
import PageLayout from "../_layout";
import { PriceDetails } from "../components/ui/Cart/PriceDetails";
import { CartDetails } from "../components/ui/Cart/CartDetails";

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
    </div>
  );
};
export default Cart;
