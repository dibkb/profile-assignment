"use client";
import React from "react";

interface ButtonContainer {
  number: number;
  title: string;
  Svg: React.ReactNode;
}
const ButtonContainer = ({ title, number, Svg }: ButtonContainer) => {
  return (
    <div className="flex flex-col items-center justify-center py-1 gap-1 text-xs text-white cursor-pointer rounded-md w-20  hover:bg-blue-500 relative">
      <p className="absolute right-0 top-0 rounded-full bg-yellow-400 text-black px-2 font-medium">
        {number}
      </p>
      {Svg}
      <h2>{title}</h2>
    </div>
  );
};

export default ButtonContainer;
