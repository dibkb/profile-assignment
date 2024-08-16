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
