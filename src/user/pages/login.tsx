import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLogin } from "../hooks";
import toast from "react-hot-toast";

const loginSchema = zod.object({
  email: zod.string().min(1, "Phone number is required"),
  password: zod.string().min(1, "Password is required"),
});

type LoginForm = zod.infer<typeof loginSchema>;

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const loginUser = useLogin();

  const language = "UZB";

  const onSubmit = (data: LoginForm) => {
    loginUser.mutate(data, {
      onSuccess: () => {
        toast.success("Hisobga muvafaqiyatli kirildi!");
        form.reset();
      },
      onError(error) {
        toast.error(error?.message || "Email yoki parol xato");
      },
    });
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm z-0"
        style={{
          backgroundImage: 'url("/assets/dom.jpg")',
        }}
      ></div>
      <div className="relative z-10 h-full max-w-8xl mx-auto  flex flex-col bg-black/50">
        <header>
          <div className="pt-6 px-20">
            <div className="flex items-center justify-between">
              <Link to={"/"}>
                <img
                  src="/assets/logo-Photoroom.png"
                  width="230"
                  alt="Logo"
                  className="cursor-pointer"
                />
              </Link>

              <div className="flex items-center space-x-6">
                <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                  {["RUS", "UZB"].map((lang) => (
                    <button
                      key={lang}
                      // onClick={() => setLanguage(lang as "RUS" | "UZB")}
                      className={`px-3 py-1 rounded-md transition-all outline-none
                             ${
                               language === lang
                                 ? "bg-gray-600 text-white shadow-md"
                                 : "text-white hover:text-white focus:ring-2 focus:ring-gray-400"
                             }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <button
                  className="text-white bg-gray-900 px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-all"
                  onClick={() => navigate("/auth/register")}
                >
                  Ro'yhatdan o'tish
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-grow flex items-center justify-center">
          <Card className="w-full max-w-sm bg-white ">
            <CardHeader className="text-center space-y-4">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Hisobga kirish
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 font-medium">
                          Email manzil
                        </FormLabel>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="example@email.com"
                              className="pl-10 border-gray-800 focus:border-gray-900 focus:ring-gray-900"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 font-medium">
                          Parol
                        </FormLabel>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                          <FormControl>
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="parol kiriting"
                              className="pl-10 pr-10 border-gray-800 focus:border-gray-900 focus:ring-gray-900"
                              {...field}
                            />
                          </FormControl>
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Kirish
                  </Button>
                </form>
              </Form>

              {/* Register Link */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Hisobingiz yo‘qmi?{" "}
                  <Link
                    to="/auth/register"
                    className="text-gray-800 hover:text-gray-900 font-medium underline"
                  >
                    Ro'yxatdan o'tish
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
