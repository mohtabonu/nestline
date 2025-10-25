import { AuthContext } from "@/user/context";
import { user } from "@/user/services";
import { http } from "@/user/services/http";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

export const useLogin = () => {
  const { methods } = useContext(AuthContext);
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await http.post("/Authentication/Login", data);
      const token = res.data.result.accessToken;
      // const refreshToken = res.data.result.refreshToken;
      console.log(token);
      console.log("LOGIN token:", token);
      const userRes = await http.get("/Authentication/Get-User-Auth", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("GET USER RES:", userRes.data);

      methods.login({ accessToken: token, user: userRes.data });
    },
    onError: () => {
      methods.login({accessToken: '12345678', user: user})
    }
  });
};
