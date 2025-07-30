import React from "react";
import { Search, Plus } from "lucide-react";
import { useLanguage } from "../auth/language-context";
import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
    const { language, setLanguage } = useLanguage()
        const { translations } = useLanguage()
        const navigate = useNavigate()
    
 

    return (
        <nav className="w-full px-6 py-7 bg-gray-900 text-white shadow-md flex items-center justify-between">

            {/* Поиск */}
            <div className="flex items-center gap-2 w-1/3 ml-[25%]">
                <input
                    type="text"
                    placeholder={translations.navbar.placeholder}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <button className="p-2 bg-gray-700 rounded-md hover:bg-gray-600 active:scale-95 transition-all">
                    <Search className="w-5 h-5 text-white" />
                </button>
            </div>

            {/* Язык + Добавить товар */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    {["RUS", "UZB"].map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(lang as "RUS" | "UZB")}
                            className={`px-3 py-1 rounded-md transition-all outline-none
                             ${language === lang
                                    ? "bg-gray-600 text-white shadow-md"
                                    : "text-gray-500 hover:text-white focus:ring-2 focus:ring-gray-400"
                                }`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>

                <button onClick={()=>navigate("/seller/add")} className="cursor-pointer flex items-center gap-2 bg-white text-black hover:bg-gray-100 active:scale-95 transition-all font-medium px-4 py-2 rounded-lg shadow">
                    <Plus className="w-4 h-4" />
                   {translations.navbar.add}

                </button>
            </div>
        </nav>
    );
};

export default Navbar;
