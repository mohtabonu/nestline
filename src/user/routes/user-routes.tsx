import type { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components";
import { Favorites, Houses, Main, Profile, Search } from "../pages";
import { Footer } from "../components/footer";

export const UserRoutes: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/favourites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
};
