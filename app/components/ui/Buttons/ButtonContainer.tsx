"use client";
import { cn } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ButtonContainer {
  number: number;
  title: string;
  Svg: React.ReactNode;
  className?: string;
  link: string;
}

const ButtonContainer = ({
  title,
  number,
  Svg,
  className,
  link,
}: ButtonContainer) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [number]);

  return (
    <Link
      href={link}
      className={cn(
        "flex flex-col items-center justify-center py-1 gap-1 text-xs text-white cursor-pointer rounded-md w-20 hover:bg-blue-500 relative",
        className
      )}
    >
      <p
        className={cn(
          "absolute right-1 top-1 rounded-full bg-amber-500 px-2 font-medium transition-transform duration-600",
          animate ? "animate-pulse scale-125" : ""
        )}
      >
        {number}
      </p>
      {Svg}
      <h2>{title}</h2>
    </Link>
  );
};

export default ButtonContainer;
