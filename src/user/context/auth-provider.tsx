import React from "react";
import { AuthContext, type AuthState } from "./auth-context";
import { user } from "../services";



interface ProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, setState] = React.useState<AuthState>(() => ({
    isAuthenticated: false,
    isLoading: localStorage.getItem("fake-token") ? true : false,
    accessToken: localStorage.getItem("fake-token"),
    profile: null,
  }));

  const login = ({
    accessToken,
    profile,
  }: Pick<AuthState, "accessToken" | "profile">) => {
    localStorage.setItem("fake-token", "12345678");
    setState({
      isAuthenticated: accessToken ? true : false,
      isLoading: false,
      accessToken,
      profile,
    });
    

  };

  const logout = () => {
    localStorage.removeItem("fake-token");
    setState({
      isAuthenticated: false,
      isLoading: false,
      accessToken: null,
      profile: null,
    });
  };

  React.useEffect(() => {
    const { accessToken } = state;
    if (accessToken) {
      login({ accessToken, profile: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, methods: { login, logout } }}>
      {children}
    </AuthContext.Provider>
  );
};

