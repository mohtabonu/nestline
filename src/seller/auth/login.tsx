import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useLanguage } from "./language-context";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../server/http";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { translations } = useLanguage();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === user.email && password === user.password) {
            navigate("/seller/posts");
            console.log("Email:", email);
            console.log("Пароль:", password);
        }
    };

    return (
        <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                {translations.login.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        {translations.login.email_label}
                    </label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all duration-200 hover:border-gray-400"
                    />
                </div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    {translations.login.password_label}
                </label>
                <div className="relative">
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 pr-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all duration-200 hover:border-gray-400"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 hover:text-gray-800 transition"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-600 active:scale-95 transition-all duration-200 shadow-md"
                >
                    {translations.login.button}
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
                {translations.login.text}{" "}
                <Link
                    to="/seller/auth/register"
                    className="cursor-pointer text-gray-800 font-medium hover:underline hover:text-gray-600 transition"
                >
                    {translations.login.auth}
                </Link>
            </p>
        </>
    );
};

export default LoginPage;
