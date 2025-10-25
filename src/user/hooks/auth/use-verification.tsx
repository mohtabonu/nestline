import { http } from "@/user/services/http";
import type { VerifyPayload } from "@/user/types";
import { useMutation } from "@tanstack/react-query";

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: async (data: VerifyPayload) => {
      const res = await http.post("/Authentication/verify-otp", data);
      return res.data as VerifyPayload;
    },
  });
};
