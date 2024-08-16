"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface StoreContext {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const StoreContext = createContext<StoreContext | undefined>(undefined);

export const StoreContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <StoreContext.Provider value={{ value, setValue }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = (): StoreContext => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useMyContext must be used within a StoreContextProvider");
  }
  return context;
};
