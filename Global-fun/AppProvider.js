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
  const [phoneNavToggle, setPhoneNavToggle] = useState();

  const phoneCatToggleHandel = () => {
    setPhoneCatToggle(!phoneCatToggle);
  };
  const phoneNavToggleHandel = () => {
    setPhoneNavToggle(!phoneNavToggle);
  };

  const value = {
    categoryToggle,
    setCategoryToggle,
    phoneCatToggle,
    phoneCatToggleHandel,
    phoneNavToggle,
    phoneNavToggleHandel,
  };

  return (
    <AppContext.Provider value={value}>
      {loading ? "Loading..." : children}
    </AppContext.Provider>
  );
}
