import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    return;
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    return;
  };

  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
