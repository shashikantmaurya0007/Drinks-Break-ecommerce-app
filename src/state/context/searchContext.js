import React, { createContext, useContext, useState } from "react";

const searchContext = createContext();

const useSearch = () => useContext(searchContext);

const SearchProvider = ({ children }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <searchContext.Provider value={{ showSearchModal, setShowSearchModal }}>
      {children}
    </searchContext.Provider>
  );
};

export { SearchProvider, useSearch };
