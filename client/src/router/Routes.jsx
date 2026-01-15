import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import { useAuth } from "../context/AuthContext";

const RouterNav = () => {
  const { user } = useAuth();
  if (!user) {
    return <Routes><Route path="/" element={<LoginPage />} /></Routes>;
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};

export default RouterNav;
