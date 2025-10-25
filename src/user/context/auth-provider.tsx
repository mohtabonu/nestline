import React from "react";
import { AuthContext, type AuthState } from "./auth-context";
import { http } from "../services/http";
import { user } from "../services";

interface ProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, setState] = React.useState<AuthState>(() => {
    const savedToken = localStorage.getItem("accessToken");
    return {
      isAuthenticated: !!savedToken,
      isLoading: !!savedToken,
      accessToken: savedToken,
      user: null,
    };
  });

  const login = ({
    accessToken,
    user,
  }: Pick<AuthState, "accessToken" | "user">) => {
    localStorage.setItem("accessToken", accessToken ?? "");
    setState({
      isAuthenticated: !!accessToken,
      isLoading: false,
      accessToken,
      user,
    });
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setState({
      isAuthenticated: false,
      isLoading: false,
      accessToken: null,
      user: null,
    });
  };

  React.useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;
    let canceled: boolean = false;

    http
      .get("/authentication/Get-User-Auth", {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 5000,
      })
      .then(({ data }) => {
        if (canceled) return;
        console.log("Get-User-Auth response:", data);

        const serverUser = data?.result ?? user;
        login({ accessToken: token, user: serverUser });
      })
      .catch((err) => {
        if (canceled) return;
        console.warn("Backend auth failed — using fake user. Error:", err);

        login({ accessToken: token, user: user });
      });

    return () => {
      canceled = true;
    };
    
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, methods: { login, logout } }}>
      {children}
    </AuthContext.Provider>
  );
};
