"use client";
import { cn } from "@/utils";
import React from "react";

interface ButtonContainer {
  number: number;
  title: string;
  Svg: React.ReactNode;
  className?: string;
}
const ButtonContainer = ({
  title,
  number,
  Svg,
  className,
}: ButtonContainer) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-1 gap-1 text-xs text-white cursor-pointer rounded-md w-20 hover:bg-blue-500 relative",
        className
      )}
    >
      <p className="absolute right-1 top-1 rounded-full bg-yellow-400 px-2 font-medium">
        {number}
      </p>
      {Svg}
      <h2>{title}</h2>
    </div>
  );
};

export default ButtonContainer;
