import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./auth/login";
import RegisterPage from "./auth/register";
import Header from "./auth/header";
import { Sidebar } from "./sections/sidebar";
import Navbar from "./sections/navbar";
import Posts from "./sections/posts";
import Add from "./sections/add";
import AnaliticPage from "./sections/analitics";
import SellerSettingsPage from "./sections/settings";
import PostDetail from "./sections/details";

export const MyRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Редирект с главной страницы на логин */}
        <Route path="/" element={<Navigate to="/seller/auth/login" replace />} />
        
        {/* Маршруты для аутентификации */}
        <Route
          path="/seller/auth/login"
          element={
            <div className="relative min-h-screen flex items-center justify-center px-4">
              <div className="absolute inset-0 bg-[url('/auth/dom.jpg')] bg-cover bg-center blur-sm"></div>
              <div className="absolute inset-0 bg-black/30">
                <Header />
              </div>
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform animate-fade-in transition-all">
                <LoginPage />
              </div>
            </div>
          }
        />
        
        <Route
          path="/seller/auth/register"
          element={
            <div className="relative min-h-screen flex items-center justify-center px-4">
              <div className="absolute inset-0 bg-[url('/auth/dom.jpg')] bg-cover bg-center blur-sm"></div>
              <div className="absolute inset-0 bg-black/30">
                <Header />
              </div>
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform animate-fade-in transition-all">
                <RegisterPage />
              </div>
            </div>
          }
        />

        {/* Маршруты для продавца с layout */}
        <Route path="/seller/posts" element={
          <div className="flex h-screen bg-gray-100 text-black">
            {/* Sidebar */}
            <aside className="w-64 bg-black text-white">
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
                <Posts />
              </main>
            </div>
          </div>
        } />

         <Route path="/seller/posts/:id" element={
          <div className="flex h-screen bg-gray-100 text-black">
            {/* Sidebar */}
            <aside className="w-64 bg-black text-white">
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
               <PostDetail />
              </main>
            </div>
          </div>
        } />
        
        <Route path="/seller/add" element={
          <div className="flex h-screen bg-gray-100 text-black">
            {/* Sidebar */}
            <aside className="w-64 bg-black text-white">
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
                <Add />
              </main>
            </div>
          </div>
        } />

         <Route path="/seller/chart" element={
          <div className="flex h-screen bg-gray-100 text-black">
            {/* Sidebar */}
            <aside className="w-64 bg-black text-white">
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
                <AnaliticPage />
              </main>
            </div>
          </div>
        } />

           <Route path="/seller/settings" element={
          <div className="flex h-screen bg-gray-100 text-black">
            {/* Sidebar */}
            <aside className="w-64 bg-black text-white">
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
                < SellerSettingsPage/>
              </main>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
};