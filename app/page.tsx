import PageLayout from "./_layout";
import { FilterMenu } from "./components/ui/Filter/FilterMenu";
import { ProductsDisplay } from "./components/ui/ProductsSection/ProductsDisplay";

export default function Home() {
  return (
    <PageLayout>
      {/* left section */}
      <main className="hidden md:block md:col-span-2 h-full bg-zinc-50 rounded-lg overflow-hidden">
        <FilterMenu />
      </main>
      {/* right section */}
      <main className="col-span-8 md:col-span-6 bg-zinc-50 rounded-lg overflow-y-auto">
        <ProductsDisplay />
      </main>
    </PageLayout>
  );
}
