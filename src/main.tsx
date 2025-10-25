import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { UserRoutes } from "./user/routes";
import { AuthProvider } from "./user/context";
import { LanguageProvider } from "./seller/auth/language-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";


const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <LanguageProvider>
            <UserRoutes />
            <Toaster position="top-center" reverseOrder={false} />
          </LanguageProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
