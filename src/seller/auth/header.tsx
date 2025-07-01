import React from "react";
import { useState } from "react";

type HeaderProps = {
    buttonText: string;
};

const Header: React.FC<HeaderProps> = ({ buttonText }) => {
    const [selected, setSelected] = useState<"RUS" | "UZB">("RUS");

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
                            onClick={() => setSelected(lang as "RUS" | "UZB")}
                            className={`px-3 py-1 rounded-md transition-all outline-none
                                      ${selected === lang
                                    ? "bg-gray-600 text-white shadow-md"
                                    : "text-gray-600 hover:text-black focus:ring-2 focus:ring-gray-400"
                                }`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>


                {/* КАСТОМНЫЙ БАТТОН */}
                <button
                    className="px-4 cursor-pointer py-2 rounded-lg bg-gray-800 text-white text-md font-semibold 
                            hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 
                            transition-all duration-200 active:scale-95 shadow-md"
                >
                    {buttonText}
                </button>

            </div>
        </header>
    );
};

export default Header;
