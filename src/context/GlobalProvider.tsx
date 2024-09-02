import { createContext, useContext, useState, ReactNode } from "react";

interface GlobalContextProps {
  isLoggedIn?: boolean;
  Login: () => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Login = () => {
    setIsLoggedIn(true);
  };

  return (
    <GlobalContext.Provider value={{ isLoggedIn, Login }}>
      {children}
    </GlobalContext.Provider>
  );
};
