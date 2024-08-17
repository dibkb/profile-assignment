"use client";
import { Coupons } from "@/constants";
import { cn } from "@/utils";
import React, { useState } from "react";
import { CartItemLayout } from "./CartItemLayout";

export const PriceDetails = () => {
  const [couponStatus, setCouponStatus] = useState<"success" | "failure">();
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [input, setInput] = useState("");
  function handleCouponSubmission() {
    if (Coupons.includes(input)) {
      setCouponStatus("success");
    } else {
      setCouponStatus("failure");
    }
    setAppliedCoupon(input);
    setInput("");
  }
  return (
    <CartItemLayout title="Price Details">
      <div className="p-4 flex flex-col gap-2">
        <span className="flex justify-between gap-2">
          <p>Price</p>
          <p className="font-semibold">₹900</p>
        </span>
        <span className="flex justify-between gap-2">
          <p>Discount</p>
          <p className="font-semibold text-green-600">₹90</p>
        </span>
        <span className="flex justify-between gap-2">
          <p>Delivery Charges</p>
          <p className="font-semibold">Free</p>
        </span>
      </div>
      {/* total amount */}
      <span className="px-4 py-6 border-t border-b flex items-center justify-between">
        <p className="text-xl">Total Amount</p>
        <p className="font-bold text-xl">₹4510</p>
      </span>
      <span className="p-4 text-xs text-zinc-500 flex items-center gap-1">
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg"
          alt="Safe and Secure"
          width={30}
        />
        Safe and Secure Payments.Easy returns. 100% Authentic products.
      </span>
      {/* coupon code */}
      <div className="p-4">
        <span className="h-5 flex text-xs font-semibold">
          {couponStatus === "success" && (
            <p className="text-green-700">{`Coupon ${appliedCoupon} is applied`}</p>
          )}
          {couponStatus === "failure" && (
            <p className="text-red-700">{`Coupon ${appliedCoupon} is not valid !`}</p>
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
            className=" p-2 px-4 bg-blue-600 text-white"
            onClick={handleCouponSubmission}
          >
            Apply
          </button>
        </span>
        <span className="mt-4 text-xs text-zinc-400 font-semibold uppercase flex items-center gap-2">
          Available coupons :{" "}
          {Coupons.map((c) => (
            <p key={c}>{c}</p>
          ))}
        </span>
      </div>
    </CartItemLayout>
  );
};
