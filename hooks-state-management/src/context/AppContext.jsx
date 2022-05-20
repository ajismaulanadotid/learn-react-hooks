import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const reducer = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    default:
      return state;
  }
};

const initialValue = {
  user: {
    name: "Mureng",
  },
  theme: "dark",
};

export const AppContextProvider = ({ children }) => {
  const [state, dispacth] = useReducer(reducer, initialValue);

  return (
    <AppContext.Provider value={{ state, dispacth }}>
      {children}
    </AppContext.Provider>
  );
};
