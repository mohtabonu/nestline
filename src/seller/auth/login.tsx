import React, { useState } from "react";


const LoginPage: React.FC = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

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
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-blue-400"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Пароль</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-blue-400"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md"
                >
                    Войти
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
                Нет аккаунта?{" "}
                <a
                    className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition"
                >
                    Зарегистрироваться
                </a>
            </p>

        </>
    );
};

export default LoginPage;
