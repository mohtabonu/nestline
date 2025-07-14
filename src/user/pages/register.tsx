import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, User, Phone, Mail, Lock } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const language = "UZB";

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm z-0"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/15236126/pexels-photo-15236126.jpeg")',
        }}
      ></div>
      <div className="relative z-10 h-full container max-w-8xl mx-auto  flex flex-col ">
        <header>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link to={"/"}>
                <img
                  src="/assets/logo-Photoroom.png"
                  width="200"
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
              <form onSubmit={() => setIsLoading(true)} className="space-y-4">
                {/* Username */}
                <div className="space-y-2">
                  <Label className="text-gray-800 font-medium">
                    Foydalanuvchi ismi
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="ismingiz"
                      className="pl-10 border-gray-800 focus:border-gray-900 focus:ring-gray-900"
                    />
                  </div>
                  {/* {errors.username && (
                  <p className="text-sm text-red-600">
                    {errors.username.message}
                  </p>
                )} */}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label className="text-gray-800 font-medium">
                    Telefon raqami
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      className="pl-10 border-gray-800 focus:border-gray-900 focus:ring-gray-900"
                      // {...register("phone")}
                    />
                  </div>
                  {/* {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone.message}</p>
                )} */}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label className="text-gray-800 font-medium">
                    Email manzil
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      className="pl-10 border-gray-800 focus:border-gray-900 focus:ring-gray-900"
                      // {...register("email")}
                    />
                  </div>
                  {/* {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )} */}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label className="text-gray-800 font-medium">Parol</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="parol kiriting"
                      className="pl-10 pr-10 border-gray-800 focus:border-gray-900 focus:ring-gray-900"
                      // {...register("password")}
                    />
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
                  {/* {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )} */}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  {isLoading ? "Ro'yxatdan o'tmoqda..." : "Ro'yxatdan o'tish"}
                </Button>
              </form>

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
