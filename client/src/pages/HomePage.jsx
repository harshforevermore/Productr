import { useState } from "react";
import EmptyState from "../components/EmptyState";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const {products} = useProducts();
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
      <section className="products w-full h-full">
        {selectedTab === "published" ? (
          products.count === 0 ? (
            <EmptyState
              heading="No Published Products"
              description="Your Published Products will appear here 
Create your first product to publish"
            />
          ) : (
            products.map(
              (product) =>
                product.status === "published" && (
                  <ProductCard key={product.id} product={product} />
                )
            )
          )
        ) : products.count === 0 ? (
          <EmptyState
            heading="No Unpublished Products"
            description="Your Unpublished Products will appear here
Create your first product to publish "
          />
        ) : (
          products.map(
            (product) =>
              product.status === "unpublished" && (
                <ProductCard key={product.id} product={product} />
              )
          )
        )}
      </section>
    </div>
  );
};

export default HomePage;
