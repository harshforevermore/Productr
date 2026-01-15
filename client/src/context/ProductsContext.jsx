import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../api/axiosConfig";
import { toast } from "react-hot-toast";
import { useAuth } from "./AuthContext";

const ProductsContext = createContext(null);

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const {user} = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  /* FETCH ALL PRODUCTS */
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axiosClient.get("/products");
      setProducts(data);
    } catch (error) {
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  /* ADD PRODUCT */
  const addProduct = async (productData) => {
    try {
      const { data } = await axiosClient.post("/products", productData);
      setProducts((prev) => [...prev, data]);
      toast.success("Product added");
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Failed to add product";
    }
  };

  /* UPDATE PRODUCT */
  const updateProduct = async (id, updatedData) => {
    try {
      const { data } = await axiosClient.put(`/products/${id}`, updatedData);
      setProducts((prev) =>
        prev.map((product) => (product.id === id ? data : product))
      );
      toast.success("Product updated");
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Failed to update product";
    }
  };

  /* DELETE PRODUCT */
  const deleteProduct = async (id) => {
    try {
      await axiosClient.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((product) => product.id !== id));
      toast.success("Product deleted");
    } catch (error) {
      throw error.response?.data?.message || "Failed to delete product";
    }
  };

  /* TOGGLE PUBLISH */
  const togglePublish = async (id) => {
    try {
      const { data } = await axiosClient.patch(
        `/products/${id}/toggle-publish`
      );
      setProducts((prev) =>
        prev.map((product) => (product.id === id ? data : product))
      );
    } catch (error) {
      throw error.response?.data?.message || "Failed to toggle publish";
    }
  };

  useEffect(() => {
    if(user) {
      fetchProducts();
    }
  }, [user]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        fetchProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        togglePublish,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
