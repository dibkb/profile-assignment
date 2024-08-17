/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { MagnifyingGlass } from "./svg/Magnifying";
import { Login } from "./Buttons/Login";
import ButtonContainer from "./Buttons/ButtonContainer";
import { CartICon } from "./svg/Cart";
import { Heart } from "./svg/Heart";
import { Bars3 } from "./svg/Bars3";
import { Xmark } from "./svg/Xmark";
import { useStoreContext } from "@/app/context/StoreContext";
import { Cart } from "@/types/products";
export const Navbar = () => {
  const { cart, wishlist } = useStoreContext();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const cartTotal = calculateCartTotal(cart);
  console.log(cart);
  return (
    <main className={`bg-blue-600 h-[64px]`}>
      <div className="w-[90%] sm:container mx-auto flex items-center justify-between gap-4 h-full">
        {/* mobile */}
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
          width={70}
        />
        <button
          className={`flex items-center min-w-7 md:hidden transition-transform transform duration-300 ${
            navbarOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setNavbarOpen((p) => !p)}
        >
          {navbarOpen ? (
            <Xmark className="text-white" />
          ) : (
            <Bars3 className="text-white" />
          )}
        </button>
        {/* larger screens */}
        <div className="hidden md:flex items-center justify-between flex-1">
          <>
            <div className="bg-zinc-100 flex rounded-lg w-96 px-2 py-1 items-center gap-1 h-9">
              <MagnifyingGlass className="size-5" />
              <input
                placeholder="Search for products, brands and more"
                type="text"
                className="text-zinc-800 flex-grow bg-transparent !outline-none text-sm"
              />
            </div>

            <div className="flex gap-3 items-center">
              <ButtonContainer
                Svg={<CartICon />}
                number={cartTotal}
                title="Cart"
              />
              <ButtonContainer
                Svg={<Heart className="size-6" />}
                number={wishlist.size}
                title="Wishlist"
              />
              <Login />
            </div>
          </>
        </div>
      </div>
      {/* mobile modal */}
      {navbarOpen && (
        <div className="absolute z-[1000] top-[64px] w-full left-0 h-[calc(100vh-64px)] bg-blue-600 p-4">
          <>
            <div className="bg-zinc-100 flex rounded-lg w-full px-2 py-1 items-center gap-1 h-9">
              <MagnifyingGlass className="size-5" />
              <input
                placeholder="Search for products, brands and more"
                type="text"
                className="text-zinc-800 flex-grow bg-transparent !outline-none text-sm"
              />
            </div>

            <div className="flex flex-col mt-4 gap-3 items-center">
              <ButtonContainer Svg={<CartICon />} number={4} title="Cart" />
              <ButtonContainer
                Svg={<Heart className="size-6" />}
                number={4}
                title="Wishlist"
              />
              <Login />
            </div>
          </>
        </div>
      )}
    </main>
  );
};

function calculateCartTotal(cart: Cart[]): number {
  let total = 0;
  cart.forEach((c) => {
    total += c.quantity;
  });
  return total;
}
