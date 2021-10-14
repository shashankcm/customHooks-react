import React from "react";

export default function makeStore(reducer, initialState) {
  const StoreContext = React.createContext();
  const DispatchContext = React.createContext();

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState);
    return (
      <DispatchContext.Provider value={dispatch}>
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
      </DispatchContext.Provider>
    );
  };

  function useStore() {
    return React.useContext(StoreContext);
  }

  function useDispatch() {
    return React.useContext(DispatchContext);
  }

  return [StoreProvider, useDispatch, useStore];
}
