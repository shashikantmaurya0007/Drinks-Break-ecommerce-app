import React, { useReducer, createContext, useContext } from "react";

import { filterinitialstate } from "../initalstate";
import { filterReducer } from "../reducers/filterReducer";

const filtercontext = createContext(filterinitialstate);

const useFilter = () => useContext(filtercontext);

const FilterProvider = ({ children }) => {
  const [filterstate, filterDispatch] = useReducer(
    filterReducer,
    filterinitialstate
  );

  return (
    <filtercontext.Provider value={{ filterstate, filterDispatch }}>
      {children}
    </filtercontext.Provider>
  );
};

export { FilterProvider, useFilter };
