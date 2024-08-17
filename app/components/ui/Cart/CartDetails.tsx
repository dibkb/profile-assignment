"use client";
import React from "react";
import { CartItemLayout } from "./CartItemLayout";
import { useStoreContext } from "@/app/context/StoreContext";
import { products } from "@/data/products";
import { CartItem } from "@/types/products";
import { CartProduct } from "./CartProduct";

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
    return <CartProduct key={c.id} {...c} />;
  });
  return (
    <CartItemLayout title="Cart Details">
      <div className="p-4 flex flex-col gap-4">{dispalyCartItem}</div>
    </CartItemLayout>
  );
};
