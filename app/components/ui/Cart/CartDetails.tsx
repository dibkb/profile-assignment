"use client";
import React from "react";
import { CartItemLayout } from "./CartItemLayout";
import { useStoreContext } from "@/app/context/StoreContext";
import { products } from "@/data/products";

export const CartDetails = () => {
  const { cart } = useStoreContext();

  return <CartItemLayout title="Cart Details">sdfsf</CartItemLayout>;
};
