// Node modules
import { createContext, useContext, useState } from "react";


const Context = createContext();

export function DataProdivder({ children }) {
  // State
  const [flagData, setFlagData] = useState([]);

  // Properties
  const value = { flagData, setFlagData };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useData() {
  const context = useContext(Context);
  if (!context) throw new Error("useData is used inside <DataProdivder>");
  return context;
}
