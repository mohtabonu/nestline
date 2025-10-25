import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, User, Phone, Mail, Lock } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import * as z from "zod";
import { useRegister } from "../hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import toast from "react-hot-toast";

const formSchema = z.object({
  userName: z.string().min(1, "username is required").max(50),
  phoneNumber: z.string().min(1, "phone number is ruquired"),
  email: z.email(),
  password: z.string().min(1, "password is required"),
});

type FormData = z.infer<typeof formSchema>;

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const createUser = useRegister();

  const [showPassword, setShowPassword] = useState(false);
  const language = "UZB";

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    createUser.mutate(data, {
      onSuccess: () => {
        toast.success('Ro‘yxatdan muvaffaqiyatli o\'tildi!')


        localStorage.setItem("registerEmail", data.email);
        navigate('/auth/verification')
        form.reset();
      },
      onError: (error) => {
      toast.error(error?.message || "Xatolik yuz berdi");
    },
    });
    form.reset();
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm z-0"
        style={{
          backgroundImage: 'url("/assets/dom.jpg")',
        }}
      ></div>
      <div className="relative z-10 h-full flex flex-col bg-black/50">
        <header>
          <div className="py-6 px-20">
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
                  onClick={() => navigate("/auth/login")}
                >
                  Kirish
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex items-center justify-center px-4">
          <Card className="w-full max-w-sm bg-white ">
            <CardHeader className="text-center space-y-4">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Ro'yxatdan o'tish
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* Username */}
                  <FormField
                    control={form.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 font-medium">
                          Foydalanuvchi ismi
                        </FormLabel>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="ismingiz"
                              className="pl-10 border-gray-800 focus:border-gray-900 focus:ring-gray-900"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 font-medium">
                          Telefon raqami
                        </FormLabel>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+998 90 123 45 67"
                              className="pl-10 border-gray-800 focus:border-gray-900 focus:ring-gray-900"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                    disabled={createUser.isPending}
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    {createUser.isPending ? "Ro'yxatdan o'tmoqda..." : "Ro'yxatdan o'tish"}
                  </Button>
                </form>
              </Form>

              {/* Login Link */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Allaqachon hisobingiz bormi?{" "}
                  <Link
                    to="/auth/login"
                    className="text-gray-800 hover:text-gray-900 font-medium underline"
                  >
                    Kirish
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
