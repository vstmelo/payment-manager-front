import { TypeContext } from "api/schemas/interfaces";
import { createContext } from "react";

export const AuthContext = createContext<TypeContext>({
  user: {},
  isAuthenticated: false,
  SignIn: () => {},
  Logout: () => {},
});
