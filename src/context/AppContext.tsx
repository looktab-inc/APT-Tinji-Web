import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext({} as any);



type AppProps = {
  children: React.ReactNode; // 👈️ type children
};

export const AppProvider = (props: AppProps) => {
  const [account, setAccount] = useState<any>(null);
  const [error, setError] = useState<any>("");
  const aptos = typeof window !== "undefined" ? (window as any).aptos : {};

  const checkAptos = () => {
    if (!aptos) {
      window.open("https://petra.app/", `_blank`);
      return false;
    }
    return true;
  };

  const getConnectedAccounts = async () => {
    setError("");
    try {
      setAccount(await aptos.account());
    } catch (error) {
      setError(error.message);
    }
  };

  const connectWallet = async () => {
    setError("");
    if (checkAptos()) {
      try {
        const accounts = await aptos.connect();
        setAccount(accounts);
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const disconnectWallet = async () => {
    setError("");
    if (checkAptos()) {
      try {
        await aptos.disconnect();
        setAccount(null);
      } catch (error) {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    if (checkAptos()) {
      getConnectedAccounts();
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ account, connectWallet, disconnectWallet, error }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
// Path: src/context/AppContext.tsx
