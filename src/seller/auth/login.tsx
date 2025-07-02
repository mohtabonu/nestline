import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // или любой другой icon-пакет


const LoginPage: React.FC = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!phone || !password) {
            alert("Заполните все поля");
            return;
        }
        console.log("Телефон:", phone);
        console.log("Пароль:", password);
    };

    return (
        <>
            < h2 className="text-3xl font-bold text-center text-gray-800 mb-8" > Вход в аккаунт</h2 >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Номер телефона</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+998901234567"
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all duration-200 hover:border-gray-400"
                    />
                </div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Пароль</label>
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
                <button
                    type="submit"
                    className="w-full py-2 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-600 active:scale-95 transition-all duration-200 shadow-md"
                >
                    Войти
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
                Нет аккаунта?{" "}
                <a
                    className="cursor-pointer text-gray-800 font-medium hover:underline hover:text-gray-600 transition"
                >
                    Зарегистрироваться
                </a>
            </p>

        </>
    );
};

export default LoginPage;
