import React from "react";
import PageLayout from "../_layout";

const Cart = () => {
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
      </div>
    </PageLayout>
  );
};
export default Cart;
