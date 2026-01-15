import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../api/axiosConfig";
import { toast } from "react-hot-toast";
import { useAuth } from "./AuthContext";

const ProductsContext = createContext(null);

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const {user} = useAuth();
  const [products, setProducts] = useState([]);
  const [publishedProducts, setPublishedProducts] = useState([]);
  const [unPublishedProducts, setUnPublishedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(products.length !== 0) {
      setPublishedProducts(() => products.filter((product) => product.isPublished));
      setUnPublishedProducts(() => products.filter((product) => !product.isPublished));
    }
    console.log(products);
  }, [products]);
  useEffect(() => {
    if(user) {
      fetchProducts();
    }
  }, [user]);
  /* FETCH ALL PRODUCTS */
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const {data} = await axiosClient.get("/products");
      console.log("products: ", data.products);
      setProducts(data.products);
      setPublishedProducts(() => data.products.filter((product) => product.isPublished));
      setUnPublishedProducts(() => data.products.filter((product) => !product.isPublished));
    } catch (error) {
      toast.error("Failed to fetch products");
      console.log("error while fetching the products: ", error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  /* ADD PRODUCT */
  const addProduct = async (productData) => {
    try {
      const { data } = await axiosClient.post("/products", productData);
      setProducts((prev) => Array.isArray(prev) ? [...prev, data] : [data]);
      toast.success("Product added");
      return data;
    } catch (error) {
      toast.error("Failed to add product");
      console.log("error while adding the product: ", error.response?.data?.message);
    }
  };

  /* UPDATE PRODUCT */
  const updateProduct = async (id, updatedData) => {
    try {
      const { data } = await axiosClient.put(`/products/${id}`, updatedData);
      await fetchProducts();
      toast.success("Product updated");
      return data;
    } catch (error) {
      toast.error("Failed to update product");
      console.log("error while updating the product: ", error.response?.data?.message);
    }
  };
  
  /* DELETE PRODUCT */
  const deleteProduct = async (id) => {
    try {
      await axiosClient.delete(`/products/${id}`);
      await fetchProducts();
      toast.success("Product deleted");
    } catch (error) {
      toast.error("Failed to delete product");
      console.log("error while deleting the product: ", error.response?.data?.message);
    }
  };

  /* TOGGLE PUBLISH */
  const togglePublish = async (productId) => {
    try {
      await axiosClient.patch(
        `/products/${productId}/toggle-publish`
      );
      await fetchProducts();
    } catch (error) {
      toast.error("Failed to toggle publish");
  console.log("error while toggling publish: ", error.response?.data?.message);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        publishedProducts,
        unPublishedProducts,
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
