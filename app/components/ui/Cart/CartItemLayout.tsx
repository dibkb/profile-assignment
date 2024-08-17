import React from "react";

interface CartItemLayout {
  children: React.ReactNode;
  title: string;
}
export const CartItemLayout = ({ children, title }: CartItemLayout) => {
  return (
    <div className="bg-white rounded-lg flex flex-col">
      <span className="border-b p-4 uppercase text-zinc-600 font-semibold">
        {title}
      </span>
      {children}
    </div>
  );
};
