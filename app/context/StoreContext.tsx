"use client";

import { Filter, Product } from "@/types/products";
import { products as productsData } from "@/data/products";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface StoreContext {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}

const StoreContext = createContext<StoreContext | undefined>(undefined);

export const StoreContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [filter, setFilter] = useState<Filter>({
    category: [],
    rating: [],
    assured: false,
  });
  useEffect(() => {
    // filter category
    let filteredProducts = productsData;
    // Filter by category
    if (filter.category.length > 0) {
      if (!filter.category.includes("All")) {
        filteredProducts = filteredProducts.filter((product) =>
          filter.category.includes(product.category)
        );
      }
    }
    // Filter by rating
    if (filter.rating.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filter.rating.some((rating) => product.rating >= rating)
      );
    }
    // Filter by assured
    if (filter.assured) {
      filteredProducts = filteredProducts.filter((product) => product.assured);
    }

    setProducts(filteredProducts);
  }, [filter]);
  return (
    <StoreContext.Provider value={{ products, setProducts, filter, setFilter }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = (): StoreContext => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(
      "useStoreContext must be used within a StoreContextProvider"
    );
  }
  return context;
};
