// Node modules
import { createContext, useContext, useState } from "react";


const Context = createContext();

export function ModalProdivder({ children }) {
  // State
  const [modal, setModal] = useState(null);

  // Properties
  const value = { modal, setModal };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useModal() {
  const context = useContext(Context);
  if (!context) throw new Error("useModal is used inside <ModalProdivder>");
  return context;
}
