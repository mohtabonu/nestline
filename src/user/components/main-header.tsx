import type React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

export const MainHeader: React.FC = () => {
  const navigate = useNavigate()
  const language = "UZB";
  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg">
      <div className="container max-w-8xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <Link to={'/'}>
            <img
              src="/assets/logo-Photoroom.png"
              width="200"
              alt="Logo"
              className="cursor-pointer"
            />
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              to={"/houses"}
              className="text-white hover:text-gray-400 transition-all duration-300 font-medium text-lg hover:scale-105"
            >
              Uylar
            </Link>
            <Link
              to={'/favourites'}
              className="text-white hover:text-gray-400 transition-all duration-300 font-medium text-lg hover:scale-105"
            >
              Tanlanganlar
            </Link>
            <Link
              to={'/search'}
              className="text-white hover:text-gray-400 transition-all duration-300 font-medium text-lg hover:scale-105"
            >
              Qidiruv
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
              {["RUS", "UZB"].map((lang) => (
                <button
                  key={lang}
                  // onClick={() => setLanguage(lang as "RUS" | "UZB")}
                  className={`px-3 py-1 rounded-md transition-all outline-none
                             ${
                               language === lang
                                 ? "bg-gray-600 text-white shadow-md"
                                 : "text-gray-600 hover:text-white focus:ring-2 focus:ring-gray-400"
                             }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button className="text-white hover:text-gray-400 transition-all duration-300 cursor-pointer p-2 rounded-full hover:bg-white/10 hover:scale-110 shadow-lg" onClick={() => navigate('/profile')}>
              <CircleUserRound size={28} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
