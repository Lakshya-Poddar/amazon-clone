import React, { createContext, useContext, useReducer } from "react";

//preparing the data layer
export const StateContext = createContext();

//wrap our app and  provide the data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Pulll info from the data layer
export const useStateValue = () => useContext(StateContext);
