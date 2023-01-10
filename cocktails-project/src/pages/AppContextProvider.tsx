import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  searchText: string;
  newSearchText: (text: string) => void;
}

const AppContext = createContext<AppContextType>(null!);

function useAppContext() {
  return useContext(AppContext);
}

const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [searchText, setSearchText] = useState('');

  function newSearchText(text: string) {
    setSearchText(text);
  }

  return (
    <AppContext.Provider
      value={{
        searchText,
        newSearchText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, useAppContext };
