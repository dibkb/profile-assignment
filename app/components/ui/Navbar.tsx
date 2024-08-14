/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MagnifyingGlass } from "./svg/Magnifying";
export const Navbar = () => {
  return (
    <main className="bg-blue-600 h-16">
      <div className="container mx-auto flex items-center justify-between h-full">
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
          width={70}
        />
        <div className="bg-zinc-100 flex rounded-lg w-96 px-2 py-1 items-center gap-1 h-9">
          <MagnifyingGlass className="size-5" />
          <input
            placeholder="Search for products, brands and more"
            type="text"
            className="text-zinc-800 flex-grow bg-transparent !outline-none text-sm"
          />
        </div>
      </div>
    </main>
  );
};
