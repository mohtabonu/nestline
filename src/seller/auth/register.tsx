import React, { useState } from "react";

const RegisterPage: React.FC = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [passport, setPassport] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !phone || !passport || !password || !confirmPassword) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        if (password !== confirmPassword) {
            alert("Пароли не совпадают");
            return;
        }

        console.log("Имя:", name);
        console.log("Телефон:", phone);
        console.log("Паспорт:", passport);
        console.log("Пароль:", password);
    };

    return (
        <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Регистрация</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Имя</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя"
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-blue-400"
                    />
                </div>

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
                    <label className="block text-sm font-medium text-gray-600 mb-1">Серия паспорта</label>
                    <input
                        type="text"
                        value={passport}
                        onChange={(e) => setPassport(e.target.value)}
                        placeholder="AA1234567"
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-blue-400 uppercase"
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

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Повторите пароль</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md"
                >
                    Зарегистрироваться
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
                Уже есть аккаунт?{" "}
                <a
                    className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition"
                >
                    Войти
                </a>
            </p>
        </>
    );
};

export default RegisterPage;
