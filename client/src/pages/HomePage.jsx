import { useState } from "react";
import EmptyState from "../components/EmptyState";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const {products, publishedProducts, unPublishedProducts} = useProducts();
  const [selectedTab, setSelectedTab] = useState("published");

  return (
    <div className="home-page-container w-full h-full">
      <section className="tabs w-full flex items-center gap-6 px-8 border-b border-b-[#D1D5DB]">
        <section onClick={() => setSelectedTab("published")} className={`tab-1 cursor-pointer py-4 border-b-2 ${selectedTab === "published" ? 'border-b-[#0B99FF]' : 'border-b-transparent'} transition-all duration-200 ease-in`}>
          <h3>Published</h3>
        </section>
        <section onClick={() => setSelectedTab("unpublished")} className={`tab-2 cursor-pointer py-4 border-b-2 ${selectedTab === "unpublished" ? 'border-b-[#0B99FF]' : 'border-b-transparent'} transition-all duration-200 ease-in`}>
          <h3>Unpublished</h3>
        </section>
      </section>
      <section className="products w-full h-full py-8 px-14">
        
        {selectedTab === "published" ? (
          publishedProducts.length === 0 ? (
            <EmptyState
              heading="No Published Products"
              description="Your Published Products will appear here 
Create your first product to publish"
            />
          ) : (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(
              (product) =>
                product.isPublished && (
                  <ProductCard key={product.id} product={product} />
                )
            )}
            </section>
          )
        ) : unPublishedProducts.length === 0 ? (
          <EmptyState
            heading="No Unpublished Products"
            description="Your Unpublished Products will appear here
Create your first product to publish "
          />
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(
            (product) =>
              !product.isPublished && (
                <ProductCard key={product.id} product={product} />
              )
          )}
          </section>
        )}
      </section>
    </div>
  );
};

export default HomePage;
