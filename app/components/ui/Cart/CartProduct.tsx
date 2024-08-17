"use client";

import { useStoreContext } from "@/app/context/StoreContext";
import { CartItem } from "@/types/products";
import React, { useEffect, useState } from "react";
import { ProductDetails } from "./ProductDetails";

export const CartProduct = ({ id, ...rest }: CartItem) => {
  const { cart, setCart, setWishlist } = useStoreContext();
  const inputButtonClass = `border w-8 h-8 flex items-center justify-center rounded-full bg-zinc-200 hover:bg-zinc-300`;
  const buttonClass =
    "uppercase font-medium text-zinc-500 px-4 hover:text-zinc-600";

  const [quantity, setQuantity] = useState(cart.get(id) ?? 0);

  useEffect(() => {
    setQuantity(cart.get(id) ?? 0);
  }, [cart, id]);

  function changeQuantityHandler(type: "increment" | "decrement") {
    setCart((prev) => {
      const newCart = new Map(prev);
      const currentQuantity = newCart.get(id) ?? 0;

      if (type === "increment") {
        newCart.set(id, currentQuantity + 1);
      } else if (type === "decrement" && currentQuantity > 1) {
        newCart.set(id, currentQuantity - 1);
      }

      return newCart;
    });
  }

  function removeHandler() {
    setCart((prev) => {
      const newCart = new Map(prev);
      newCart.delete(id);
      return newCart;
    });
  }

  function removeAndAddtoWishlist() {
    removeHandler();
    setWishlist((prev) => {
      const newSet = prev;
      newSet.add(id);
      return newSet;
    });
  }
  return (
    <main>
      <ProductDetails {...rest} id={id} />
      <div className="flex gap-8 items-center">
        <div className="flex p-2 items-center gap-2">
          <button
            className={inputButtonClass}
            onClick={() => changeQuantityHandler("decrement")}
          >
            -
          </button>
          <input
            type="number"
            min={1}
            value={quantity}
            readOnly
            className="w-12 p-1 flex items-center justify-between border rounded-md"
          />
          <button
            className={inputButtonClass}
            onClick={() => changeQuantityHandler("increment")}
          >
            +
          </button>
        </div>
        <div>
          <button className={buttonClass} onClick={removeAndAddtoWishlist}>
            Save for later
          </button>
          <button className={buttonClass} onClick={removeHandler}>
            Remove
          </button>
        </div>
      </div>
    </main>
  );
};
