import { http } from "@/user/services/http";
import type { User } from "@/user/types";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (newUser: User) => {
      const res = await http.post("/Authentication/RegisterTenant", newUser);
      return res.data as User;
    },
  });
};
