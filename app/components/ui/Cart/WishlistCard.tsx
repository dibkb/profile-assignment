"use client";
import React from "react";
import { CartItemLayout } from "./CartItemLayout";
import { useStoreContext } from "@/app/context/StoreContext";
import { CartItem, Product } from "@/types/products";
import { products } from "@/data/products";
import { WishlistProduct } from "./WishlistProduct";

export const WishlistCard = () => {
  const { wishlist } = useStoreContext();
  const wishlistItems: Product[] = products.reduce<Product[]>((acc, c) => {
    const item = wishlist.has(c.id);
    if (item) {
      acc.push(c);
    }
    return acc;
  }, []);
  const renderWishlist = (
    <div>
      {wishlistItems.map((item) => {
        return <WishlistProduct key={item.id} {...item} />;
      })}
    </div>
  );
  return (
    <CartItemLayout title="Saved For Later">
      {wishlistItems.length ? (
        <div className="p-4">{renderWishlist}</div>
      ) : (
        <div className="p-4 flex items-center justify-center text-sm h-24">
          Your wishlist is empty!
        </div>
      )}
    </CartItemLayout>
  );
};
