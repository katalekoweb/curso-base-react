import Home from "./pages/Home";
import AppLayout from "./shared/layout/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Login from "./pages/public/Login";
import { useIsAuthenticated } from "./shared/context/AuthContext";

export const AppRoutes = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/details/:id" element={<Detail />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AppLayout>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );

};
