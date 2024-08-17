"use client";

import React, { useState } from "react";
import PageLayout from "../_layout";
import { Coupons } from "@/constants";
import { cn } from "@/utils";

const Cart = () => {
  const [couponStatus, setCouponStatus] = useState<"success" | "failure">();
  const [input, setInput] = useState("");
  function handleCouponSubmission() {
    if (Coupons.includes(input)) {
      setCouponStatus("success");
    } else {
      setCouponStatus("failure");
    }
    setInput("");
  }
  console.log(couponStatus);
  return (
    <PageLayout>
      {/* mobile screens */}
      <div className="col-span-8 bg-white rounded-lg flex flex-col h-min">
        <span className="border-b p-4 uppercase text-zinc-600 font-semibold">
          Price Details
        </span>
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
          <p className="mb-2">Have a coupon code?</p>
          <span className="flex rounded-md">
            <input
              type="text"
              className={cn(
                "border flex-grow px-4",
                couponStatus === "success" && "bg-green-100 border-green-500",
                couponStatus === "failure" && "bg-red-100 border-red-500"
              )}
              placeholder="Enter a coupon code"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="border-t border-r border-b p-2 px-4"
              onClick={handleCouponSubmission}
            >
              Apply
            </button>
          </span>
          <span className="mt-4 text-xs text-zinc-600 font-semibold uppercase">
            Available coupons :{" "}
            {Coupons.map((c) => (
              <p key={c}>{c}</p>
            ))}
          </span>
        </div>
      </div>
    </PageLayout>
  );
};
export default Cart;
