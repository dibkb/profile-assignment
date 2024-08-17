"use client";
import React from "react";
import { CartItemLayout } from "./CartItemLayout";
import { useStoreContext } from "@/app/context/StoreContext";
import { products } from "@/data/products";
import { Product } from "@/types/products";

export const CartDetails = () => {
  const { cart } = useStoreContext();
  const cartItem: CartItem[] = products.reduce<CartItem[]>((acc, c) => {
    const item = cart.get(c.id);
    if (item !== undefined) {
      acc.push({ ...c, quantity: item });
    }
    return acc;
  }, []);
  const dispalyCartItem = cartItem.map((c) => {
    return (
      <main key={c.id}>
        <div className="flex gap-2 p-2">
          <img src={c.image} alt={c.title} width={150} />
          <div></div>
        </div>
      </main>
    );
  });
  return (
    <CartItemLayout title="Cart Details">
      <div className="p-4 flex flex-col gap-4">{dispalyCartItem}</div>
    </CartItemLayout>
  );
};

interface CartItem extends Product {
  quantity: number;
}
