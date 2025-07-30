import React from "react";
import { useLanguage } from "./language-context";
import { Link, useLocation } from "react-router-dom";


const Header: React.FC = () => {
    const { language, setLanguage } = useLanguage()
    const { translations } = useLanguage()
    const location = useLocation();
    const currentPage = location.pathname.split("/").filter(Boolean).pop();


    return (
        <header className="w-[90%] mx-auto flex items-center justify-between px-6 py-4">
            {/* ЛОГО */}
            <a href="/index.html">
                <img src="/logo.jpg" width="250px" alt="" /></a>

            {/* ПРАВАЯ ЧАСТЬ */}
            <div className="flex items-center gap-8">
                {/* ЯЗЫКИ */}
                <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    {["RUS", "UZB"].map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(lang as "RUS" | "UZB")}
                            className={`px-3 py-1 rounded-md transition-all outline-none
                             ${language === lang
                                    ? "bg-gray-600 text-white shadow-md"
                                    : "text-gray-600 hover:text-black focus:ring-2 focus:ring-gray-400"
                                }`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>


                {/* КАСТОМНЫЙ БАТТОН */}
                <Link to={currentPage === "register"? "/seller/auth/login" : "/seller/auth/register"}
                    className="px-4 cursor-pointer py-2 rounded-lg bg-gray-800 text-white text-md font-semibold 
                            hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 
                            transition-all duration-200 active:scale-95 shadow-md"
                >
                    {currentPage === "register"? translations.register.auth : translations.login.auth}
                </Link>

            </div>
        </header>
    );
};

export default Header;
