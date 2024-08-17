"use client";

import { useStoreContext } from "@/app/context/StoreContext";
import { CartItem } from "@/types/products";
import React, { useState } from "react";

export const CartProduct = ({ id, title, assured, price, image }: CartItem) => {
  const { cart } = useStoreContext();
  const inputButtonClass = `border w-8 h-8 flex items-center justify-center rounded-full bg-zinc-200 hover:bg-zinc-300`;
  const buttonClass =
    "uppercase font-medium text-zinc-500 px-4 hover:text-zinc-600";
  const [quantity, setQuantity] = useState(cart.get(id));
  return (
    <main key={id}>
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
            />
          )}
          <p className="font-medium">₹{price}</p>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div className="flex p-2 items-center gap-2">
          <button className={inputButtonClass}>-</button>
          <input
            type="number"
            min={1}
            value={quantity}
            className="w-12 p-1 flex items-center justify-between border rounded-md"
          />
          <button className={inputButtonClass}>+</button>
        </div>
        <div>
          <button className={buttonClass}>Save for later</button>
          <button className={buttonClass}>Remove</button>
        </div>
      </div>
    </main>
  );
};
