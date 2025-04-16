import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import { ReactNode } from "react";

interface AuthState {
  currentUser: any;
  dispatch?: React.Dispatch<any>;
}

const INITIAL_STATE: AuthState = {
  currentUser: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
};

export const AuthContext = createContext<AuthState>(INITIAL_STATE);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
