/* eslint-disable @next/next/no-img-element */
"use client";
import { Coupons } from "@/constants";
import { cn } from "@/utils";
import React, { useEffect, useState } from "react";
import { CartItemLayout } from "./CartItemLayout";
import { useStoreContext } from "@/app/context/StoreContext";
import { products } from "@/data/products";
import { Coupon } from "@/types/products";

export const PriceDetails = () => {
  const { cart } = useStoreContext();
  const [couponStatus, setCouponStatus] = useState<
    "success" | "failure" | undefined
  >();
  const [appliedCoupon, setAppliedCoupon] = useState<
    AppliedCoupon | undefined
  >();
  const [input, setInput] = useState("");
  const [discountPrice, setDiscountPrice] = useState<number>(0);

  function handleCouponSubmission() {
    const foundCoupon = Coupons.find((c) => c.code === input);
    if (foundCoupon) {
      setCouponStatus("success");
      setAppliedCoupon({
        code: input,
        discount: foundCoupon.discount,
      });
    } else {
      setCouponStatus("failure");
      setAppliedCoupon({
        code: input,
        discount: 0,
      });
      setDiscountPrice(0);
    }
  }

  useEffect(() => {
    if (couponStatus === "success" && appliedCoupon?.discount) {
      const discount = (appliedCoupon.discount / 100) * calculateTotal(cart);
      setDiscountPrice(discount);
    } else {
      setDiscountPrice(0);
    }
  }, [cart, couponStatus, appliedCoupon]);

  const totalPrice = calculateTotal(cart);

  return (
    <CartItemLayout title="Price Details">
      <div className="p-4 flex flex-col gap-2">
        <span className="flex justify-between gap-2">
          <p>Price</p>
          <p className="font-semibold">₹{totalPrice}</p>
        </span>
        <span className="flex justify-between gap-2">
          <p>Discount</p>
          <p className="font-semibold text-green-600">
            ₹{discountPrice.toFixed(2)}
          </p>
        </span>
        <span className="flex justify-between gap-2">
          <p>Delivery Charges</p>
          <p className="font-semibold">Free</p>
        </span>
      </div>
      {/* total amount */}
      <span className="px-4 py-6 border-t border-b flex items-center justify-between">
        <p className="text-xl">Total Amount</p>
        <p className="font-bold text-xl">
          ₹ {(totalPrice - discountPrice).toFixed(2)}
        </p>
      </span>
      <span className="p-4 text-xs text-zinc-500 flex items-center gap-1">
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg"
          alt="Safe and Secure"
          width={30}
        />
        Safe and Secure Payments. Easy returns. 100% Authentic products.
      </span>
      {/* coupon code */}
      <div className="p-4">
        <span className="h-5 flex text-xs font-semibold">
          {couponStatus === "success" && (
            <p className="text-green-700">{`Coupon ${appliedCoupon?.code} is applied`}</p>
          )}
          {couponStatus === "failure" && (
            <p className="text-red-700">{`Coupon ${appliedCoupon?.code} is not valid!`}</p>
          )}
        </span>
        <span className="flex rounded-md">
          <input
            type="text"
            className={cn(
              "border flex-grow px-4 !outline-none",
              couponStatus === "success" && "bg-green-100 border-green-500",
              couponStatus === "failure" && "bg-red-100 border-red-500"
            )}
            placeholder="Enter a coupon code"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="p-2 px-4 bg-blue-600 text-white"
            onClick={handleCouponSubmission}
          >
            Apply
          </button>
        </span>
        <span className="mt-4 text-xs text-zinc-400 font-semibold uppercase flex items-center gap-2">
          Available coupons:{" "}
          {Coupons.map((c) => (
            <p key={c.code}>{c.code}</p>
          ))}
        </span>
      </div>
    </CartItemLayout>
  );
};

interface AppliedCoupon {
  code: string;
  discount: number;
}

function calculateTotal(cart: Map<string, number>): number {
  return products.reduce((total, prod) => {
    const quantity = cart.get(prod.id);
    if (quantity !== undefined) {
      return total + quantity * prod.price;
    }
    return total;
  }, 0);
}
