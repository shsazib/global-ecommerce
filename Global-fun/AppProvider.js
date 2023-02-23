import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const AppContext = React.createContext();

export function useApp() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [phoneCatToggle, setPhoneCatToggle] = useState();

  const phoneCatToggleHandel = () => {
    setPhoneCatToggle(!phoneCatToggle);
  };

  const value = {
    categoryToggle,
    setCategoryToggle,
    phoneCatToggle,
    phoneCatToggleHandel,
  };

  return (
    <AppContext.Provider value={value}>
      {loading ? "Loading..." : children}
    </AppContext.Provider>
  );
}
