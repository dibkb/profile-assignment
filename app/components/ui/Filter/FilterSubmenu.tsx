import React from "react";
interface FilterSubmenu {
  children: React.ReactNode;
  title: string;
}
export const FilterSubmenu = ({ title, children }: FilterSubmenu) => {
  return (
    <div className="p-4 border-b">
      <h3 className="uppercase text-xs font-medium">{title}</h3>
      <div className="flex flex-col gap-2 mt-4">{children}</div>
    </div>
  );
};
