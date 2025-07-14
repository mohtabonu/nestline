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
} from "../pages";
import { Footer } from "../components/footer";
import { AuthContext } from "../context";

export const UserRoutes: FunctionComponent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith("/auth");
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
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Route>

        <Route path="/" element={<Main />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/houses/:id" element={<Home />} />
        <Route path="/favourites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/auth/login" />}
        />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
};
