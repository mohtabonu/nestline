import React, { useState, useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { user } from "../services";
import { AuthContext } from "../context";

const correctCode = "123456";

const VerificationSchema = zod.object({
  code: zod
    .string()
    .min(6, "6 ta raqam kiriting")
    .max(6, "6 ta raqamdan oshmasin"),
});

type VerificationForm = zod.infer<typeof VerificationSchema>;

export const VerificationPage: React.FC = () => {
  const navigate = useNavigate();
  const { methods } = useContext(AuthContext);
  const form = useForm<VerificationForm>({
    resolver: zodResolver(VerificationSchema),
  });

  const language = "UZB";

 
  const CODE_LENGTH = 6;
  const [codeDigits, setCodeDigits] = useState(Array(CODE_LENGTH).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; 

    const updatedDigits = [...codeDigits];
    updatedDigits[index] = value;
    setCodeDigits(updatedDigits);

    if (value && index < CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const onSubmit = () => {
    const enteredCode = codeDigits.join("");
   
    form.setValue("code", enteredCode);

    if (enteredCode === correctCode) {
      const accessToken = localStorage.getItem("fake-token");
      const profile = user;

      methods.login({ accessToken, profile });
    } else {
      alert("Kod noto‘g‘ri");
    }
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm z-0"
        style={{ backgroundImage: 'url("/assets/dom.jpg")' }}
      ></div>

      <div className="relative z-10 h-full flex flex-col bg-black/50">
        {/* Header */}
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
                      className={`px-3 py-1 rounded-md transition-all outline-none ${
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

        {/* Main content */}
        <div className="flex-grow flex items-center justify-center px-4">
          <Card className="w-full max-w-sm bg-white">
            <CardHeader className="text-center space-y-4">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                  Email Tasdiqlash
                </CardTitle>
                <CardDescription>
                  Emailingizga yuborilgan 6 raqamli kodni kiriting
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Code Inputs */}
                <div className="mb-6 mt-4">
                  <div className="flex justify-between gap-2 mb-4">
                    {Array.from({ length: CODE_LENGTH }).map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={codeDigits[index]}
                        onChange={(e) =>
                          handleChange(index, e.target.value)
                        }
                        ref={(el) => {
                          if (el) inputsRef.current[index] = el;
                        }}
                        className="w-12 h-12 text-center text-xl font-semibold border border-gray-800 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                      />
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  onClick={onSubmit}
                  className="w-full text-[16px] bg-gray-800 hover:bg-gray-900 text-white font-medium p-4 rounded-md transition-colors"
                >
                  Tasdiqlash
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
