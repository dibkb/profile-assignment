import { Constants } from "@/constants";
import { ArrowLeft } from "./components/ui/svg/ArrowLeft";
import { useState } from "react";

export default function Home() {
  return (
    <section
      className={`bg-zinc-200 h-[calc(100vh-${Constants.NavbarHeight}px)] p-2 grid grid-cols-8 gap-2`}
    >
      {/* left section */}
      <main className="col-span-2 h-full bg-zinc-50 rounded-lg">
        <div className="flex items-center gap-2 border-b p-4">
          <h2 className="text-xl font-medium">Filters</h2>
        </div>
        <div className="p-4">
          <h3 className="uppercase text-xs font-medium">Categories</h3>
        </div>
      </main>
      {/* right section */}
      <main className="col-span-6 bg-zinc-50 rounded-lg"></main>
    </section>
  );
}
