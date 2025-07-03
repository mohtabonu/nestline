import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useLanguage } from "./language-context";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [passport, setPassport] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { translations } = useLanguage()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !phone || !passport || !password) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        console.log("Имя:", name);
        console.log("Телефон:", phone);
        console.log("Паспорт:", passport);
        console.log("Пароль:", password);
    };

    return (
        <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{translations.register.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">{translations.register.name_label}</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя"
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all duration-200 hover:border-gray-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">{translations.register.phone_label}</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+998901234567"
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all duration-200 hover:border-gray-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">{translations.register.passport_label}</label>
                    <input
                        type="text"
                        value={passport}
                        onChange={(e) => setPassport(e.target.value)}
                        placeholder="AA1234567"
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all duration-200 hover:border-gray-400 uppercase"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">{translations.register.password_label}</label>
                    <div className="relative">
                        <input
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
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-600 active:scale-95 transition-all duration-200 shadow-md"
                >
                    {translations.register.button}
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
                {translations.register.text}{" "}
                <Link to="/seller/auth/login"
                    className="cursor-pointer text-gray-800 font-medium hover:underline hover:text-gray-500 transition"
                >
                    {translations.register.auth}
                </Link>
            </p>
        </>
    );
};

export default RegisterPage;
