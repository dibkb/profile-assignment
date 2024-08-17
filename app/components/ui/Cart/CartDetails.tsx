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
      {cartItem.length ? (
        <div className="p-4 flex flex-col gap-4">{dispalyCartItem}</div>
      ) : (
        <div className="flex items-center flex-col gap-2 justify-center py-6">
          <img
            width={300}
            src={`https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90`}
            alt="Empty cart"
          />
          <p className="">Your cart is empty!</p>
          <p className="text-xs">
            Explore our wide selection and find something you like
          </p>
        </div>
      )}
    </CartItemLayout>
  );
};
