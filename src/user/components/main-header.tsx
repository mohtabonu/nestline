import type React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

export const MainHeader: React.FC = () => {
  const navigate = useNavigate()
  const language = "UZB";
  return (
    <header className="bg-gray-900">
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
              to={"/"}
              className="text-white hover:text-gray-400 transition-all duration-300 font-medium text-[17px] hover:scale-105"
            >
              Bosh sahifa
            </Link>
            <Link
              to={'/favourites'}
              className="text-white hover:text-gray-400 transition-all duration-300 font-medium text-[17px] hover:scale-105"
            >
              Tanlanganlar
            </Link>
            <Link
              to={'/search'}
              className="text-white hover:text-gray-400 transition-all duration-300 font-medium text-[17px] hover:scale-105"
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
                                 : "text-gray-400 hover:text-white focus:ring-2 focus:ring-gray-400"
                             }`}
                >
                  {lang}
                </button>
              ))}
            </div>

              <button
                onClick={()=>navigate('/seller/auth/login')}
                className="bg-white text-gray-900 px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg "
              >
                Sotuvchi
              </button>


            <button className="text-white hover:text-gray-400 transition-all duration-300 cursor-pointer p-1 rounded-full hover:bg-white/10 hover:scale-105 shadow-sm" onClick={() => navigate('/profile')}>
              <CircleUserRound size={30} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
