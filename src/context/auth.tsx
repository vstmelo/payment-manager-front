import { ISign } from "api/schemas/interfaces";
import { FC, useEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { login } from "util/login";
import { AuthContext } from "./context";

const AuthProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("id")
  );
  useEffect(() => {
    setUser({
      id: localStorage.getItem("id"),
      emaill: localStorage.getItem("userEmail"),
    });
  }, []);

  async function SignIn({ email, password, navigate }: ISign) {
    try {
      const {
        data: { id, eMail },
      } = await login(email, password);
      if (id) {
        localStorage.setItem("id", id);
        localStorage.setItem("eMail", eMail);
      }
      setUser({ id, eMail });
      setIsAuthenticated(true);
      navigate("/clients");
    } catch (err) {
      console.log("erro");
    }
  }
  async function Logout({ navigate }: { navigate: NavigateFunction }) {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("eMail");
    navigate("/");
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        SignIn,
        Logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
