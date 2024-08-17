import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className={`bg-zinc-200 h-[calc(100vh-64px)] p-2 grid grid-cols-8 gap-2`}
    >
      {children}
    </section>
  );
};
export default PageLayout;
