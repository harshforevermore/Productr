import { useState } from "react";
import ProductCard from "../components/ProductCard";
import EmptyState from "../components/EmptyState";
import { useProducts } from "../context/ProductsContext";
import AddProductModal from "../components/AddProductModal";
import { useEffect } from "react";

const ProductsPage = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const { products } = useProducts();
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="products-page-container w-full h-full py-8 px-14 bg-gray-50">
      {Array.isArray(products) && products.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-xl font-bold text-gray-800">Products</h1>
            <button
              onClick={() => setShowAddProductModal(true)}
              className="cursor-pointer flex items-center gap-2 text-[#6B7280] hover:text-gray-900"
            >
              <span className="text-xl text-[#98A2B3]">+</span> Add Products
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <section className="Empty-state w-full h-full flex flex-col items-center">
          <EmptyState
            heading="Feels a little empty over here..."
            description="You can create products without connecting store 
you can add products to store anytime "
          />
          <button
            onClick={() => setShowAddProductModal(true)}
            className="add-product cursor-pointer w-[362px] h-9 mt-5 rounded-md text-md font-medium text-white bg-linear-to-b from-[#000FB4] to-[#4050FF] transition-colors"
          >
            Add your Products
          </button>
        </section>
      )}

      {showAddProductModal && (
        <AddProductModal
          isOpen={showAddProductModal}
          onClose={() => setShowAddProductModal(false)}
        />
      )}
    </div>
  );
};

export default ProductsPage;
