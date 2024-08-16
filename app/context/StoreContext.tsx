"use client";

import { Product } from "@/types/products";
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
}

const StoreContext = createContext<StoreContext | undefined>(undefined);

export const StoreContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(productsData);

  return (
    <StoreContext.Provider value={{ products, setProducts }}>
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
