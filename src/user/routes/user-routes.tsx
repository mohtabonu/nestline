import { useContext, type FunctionComponent } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { MainHeader } from "../components";
import {
  Favorites,
  Home,
  Houses,
  Login,
  Main,
  Profile,
  Register,
  Search,
  VerificationPage,
} from "../pages";
import { Footer } from "../components/footer";
import { AuthContext } from "../context";
import Header from "@/seller/auth/header";
import RegisterPage from "@/seller/auth/register";
import { Sidebar } from "@/seller/sections/sidebar";
import Navbar from "@/seller/sections/navbar";
import Posts from "@/seller/sections/posts";
import PostDetail from "@/seller/sections/details";
import Add from "@/seller/sections/add";
import AnaliticPage from "@/seller/sections/analitics";
import SellerSettingsPage from "@/seller/sections/settings";
import LoginPage from "@/seller/auth/login";
import Verification from "@/seller/auth/verification";

export const UserRoutes: FunctionComponent = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname.startsWith("/auth") ||
    location.pathname.startsWith("/seller");
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {!isAuthPage && <MainHeader />}
      <Routes>
        <Route
          path="auth"
          element={isAuthenticated ? <Navigate to="/profile" /> : <Outlet />}
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="verification" element={<VerificationPage />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Route>

        <Route path="/" element={<Main />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/houses/:id" element={<Home />} />
        <Route path="/favourites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/profile"
          element={
            isAuthenticated ? <Profile /> : <Navigate to="/auth/login" />
          }
        />

        {/* Seller Page Routes*/}

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

        <Route
          path="/seller/auth/verification"
          element={
            <div className="relative min-h-screen flex items-center justify-center px-4">
              <div className="absolute inset-0 bg-[url('/auth/dom.jpg')] bg-cover bg-center blur-sm"></div>
              <div className="absolute inset-0 bg-black/30">
                <Header />
              </div>
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform animate-fade-in transition-all">
                <Verification />
              </div>
            </div>
          }
        />
        {/* Маршруты для продавца с layout */}
        <Route
          path="/seller/posts"
          element={
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
          }
        />

        <Route
          path="/seller/posts/:id"
          element={
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
          }
        />

        <Route
          path="/seller/add"
          element={
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
          }
        />

        <Route
          path="/seller/chart"
          element={
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
          }
        />

        <Route
          path="/seller/settings"
          element={
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
                  <SellerSettingsPage />
                </main>
              </div>
            </div>
          }
        />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
};
