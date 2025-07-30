import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { UserRoutes } from "./user/routes";
import { AuthProvider } from "./user/context";
import { LanguageProvider } from "./seller/auth/language-context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LanguageProvider >
          <UserRoutes />
        </LanguageProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);