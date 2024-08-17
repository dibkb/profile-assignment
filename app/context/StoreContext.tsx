"use client";

import { Cart, Filter, Product, Sort } from "@/types/products";
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
  finalProducts: Product[];
  setFinalProducts: Dispatch<SetStateAction<Product[]>>;
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
  sort: keyof typeof Sort;
  setSort: Dispatch<SetStateAction<keyof typeof Sort>>;
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
  wishlist: Set<string>;
  setWishlist: Dispatch<SetStateAction<Set<string>>>;
}

const StoreContext = createContext<StoreContext | undefined>(undefined);

export const StoreContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [finalProducts, setFinalProducts] = useState<Product[]>(products);
  const [cart, setCart] = useState<Cart[]>([]);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<keyof typeof Sort>("Relevance");
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
  // sort
  useEffect(() => {
    let sortedProducts = [...products];
    switch (sort) {
      case "Price -- High to Low":
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "Price -- Low to High":
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "Rating":
        sortedProducts = sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "Relevance":
        sortedProducts = products;
        break;
    }

    setFinalProducts(sortedProducts);
  }, [sort, products]);
  return (
    <StoreContext.Provider
      value={{
        products,
        setProducts,
        filter,
        setFilter,
        sort,
        setSort,
        finalProducts,
        setFinalProducts,
        wishlist,
        setWishlist,
        cart,
        setCart,
      }}
    >
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
