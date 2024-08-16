import { Constants } from "@/constants";
import { Category } from "@/types/products";
import { FilterMenu } from "./components/ui/FilterMenu";

export default function Home() {
  return (
    <section
      className={`bg-zinc-200 h-[calc(100vh-${Constants.NavbarHeight}px)] p-2 grid grid-cols-8 gap-2`}
    >
      {/* left section */}
      <main className="col-span-2 h-full bg-zinc-50 rounded-lg">
        <FilterMenu />
      </main>
      {/* right section */}
      <main className="col-span-6 bg-zinc-50 rounded-lg"></main>
    </section>
  );
}
