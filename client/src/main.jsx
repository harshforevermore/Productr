import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductsProvider>
        <App />
        <Toaster position="bottom-center" />
      </ProductsProvider>
    </AuthProvider>
  </BrowserRouter>
);
