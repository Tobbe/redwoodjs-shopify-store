const defaultState = {
  checkoutId: undefined,
  cartItemsCount: '#',
};

export const ShopifyContext = React.createContext({});

const stateReducer = (state, newState) => ({ ...state, ...newState})

export const ShopifyContextProvider = ({ children }) => {
  const [state, setState] = React.useReducer(stateReducer, defaultState);

  return (
    <ShopifyContext.Provider value={{ state, setState }}>
      {children}
    </ShopifyContext.Provider>
  );
};
