"use client";

import { useStoreContext } from "@/app/context/StoreContext";
import { CartItem } from "@/types/products";
import React, { useEffect, useState } from "react";

export const CartProduct = ({ id, title, assured, price, image }: CartItem) => {
  const { cart, setCart } = useStoreContext();
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

  return (
    <main>
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
          <button className={buttonClass}>Save for later</button>
          <button className={buttonClass} onClick={removeHandler}>
            Remove
          </button>
        </div>
      </div>
    </main>
  );
};
