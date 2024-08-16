import React, { useState, useRef, useEffect } from "react";
import { ChevronUp } from "../svg/ChevronUp";
import { ChevronDown } from "../svg/ChevronDown";

interface FilterSubmenuProps {
  children: React.ReactNode;
  title: string;
}

export const FilterSubmenu: React.FC<FilterSubmenuProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className="p-4 border-b">
      <span className="flex items-center justify-between">
        <h3 className="uppercase text-xs font-medium">{title}</h3>
        <button
          className="flex hover:bg-zinc-200 p-1 rounded-full transition-colors duration-200"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
        </button>
      </span>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: isOpen ? contentHeight : 0 }}
      >
        <div className="flex flex-col gap-2 mt-4">{children}</div>
      </div>
    </div>
  );
};
