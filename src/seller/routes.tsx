import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./auth/login";
import RegisterPage from "./auth/register";
import Header from "./auth/header";
import { Sidebar } from "./sections/sidebar";
import Navbar from "./sections/navbar";

export const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/seller/auth/login" replace />} />
        <Route
          path="*"
          element={
            <div className="relative min-h-screen flex items-center justify-center px-4">
              <div className="absolute inset-0 bg-[url('/auth/dom.jpg')] bg-cover bg-center blur-sm"></div>
              <div className="absolute inset-0 bg-black/30">
                <Header />
              </div>
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform animate-fade-in transition-all">
                <Routes>
                  <Route path="/seller/auth/login" element={<LoginPage />} />
                  <Route path="/seller/auth/register" element={<RegisterPage />} />
                </Routes>
              </div>
            </div>
          }
        />
        <Route path="/seller"
          element={
            <div className="flex h-screen bg-gray-100 text-black">
              {/* Sidebar */}
              <aside className="w-64 bg-black text-white ">
                <Sidebar />
              </aside>

              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <header className="shadow-md z-10">
                  <Navbar />
                </header>

                {/* Основная часть под навбаром */}
                <main className="flex-1 p-6 bg-white overflow-auto">
                  {/* Здесь будет контент продавца */}
                  <h1 className="text-2xl font-semibold">Добро пожаловать, продавец!</h1>
                </main>
              </div>
            </div>

          } />
      </Routes>
    </Router>
  );
};
