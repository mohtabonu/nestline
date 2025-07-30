import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "./language-context";
import { user } from "../server/http";

const Verification: React.FC = () => {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { translations } = useLanguage();

    const correctCode = user.verification

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (+code === correctCode) {
            navigate("/seller/posts");
        } else {
            setError("Неверный код подтверждения");
        }
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                {translations.verification?.title || "Подтверждение Email"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="number"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Введите код из email"
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-gray-500 transition"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="w-full py-2 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-600 active:scale-95 transition"
                >
                    {translations.verification?.button || "Подтвердить"}
                </button>
            </form>
            </>
    );
};

export default Verification;
