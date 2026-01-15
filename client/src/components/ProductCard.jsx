import { useState } from "react";

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [published, setPublished] = useState(true);

  const images = product.images || [];

  return (
    <div className="product-card w-[363px] bg-white rounded-2xl p-4 shadow-[0px_2px_4px_0px_#00000010] flex flex-col gap-4 border border-gray-100 font-['Inter']">
      <div className="image-container w-full h-[200px] aspect-318/220 bg-gray-50 border border-[#DCDFE3] rounded-lg relative group">
        {/* Images */}
        <div className="wrapper w-full h-full overflow-hidden">
          <div
            className="images overflow-hidden flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.length > 0 ? (
              images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} - view ${idx + 1}`}
                  className="w-[331px] h-[198px] object-contain shrink-0"
                />
              ))
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </div>
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="z-99 absolute -bottom-2 left-1/2 -translate-x-1/2 w-fit px-2 py-1 bg-white flex items-center gap-1.5 rounded-full">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  idx === currentImageIndex ? "bg-[#FE6041]" : "bg-[#DCDFE3]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="details-container flex flex-col gap-2">
        <h3 className="font-bold text-[15px] leading-5 text-[#111827]">
          {product.name}
        </h3>

        <div className="specs text-[13px] leading-6 text-[#6B7280] flex flex-col gap-0.5">
          <div className="flex justify-between">
            <span className="text-[#98A2B3]">Product type -</span>
            <span className="text-[#344054]">{product.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#98A2B3]">Quantity Stock -</span>
            <span className="text-[#344054]">{product.stock}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#98A2B3]">MRP -</span>
            <span className="text-[#344054]">₹ {product.mrp}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#98A2B3]">Selling Price -</span>
            <span className="text-[#344054]">₹ {product.sellingPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#98A2B3]">Brand Name -</span>
            <span className="text-[#344054]">{product.brand}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#98A2B3]">Total Number of images -</span>
            <span className="text-[#344054]">{images.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#98A2B3]">Exchange Eligibility -</span>
            <span className="text-[#344054]">
              {product.exchangeEligibility ? ".YES" : ".NO"}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="actions flex items-center gap-2 mt-2">
        <button
          onClick={() => setPublished(!published)}
          className={`cursor-pointer flex-1 h-9 rounded-md text-md font-medium text-white transition-colors ${
            published
              ? "bg-linear-to-b from-[#000FB4] to-[#4050FF]"
              : "bg-linear-to-b from-[#52D407] to-[#37C100]"
          }`}
        >
          {published ? "Publish" : "Unpublish"}
        </button>

        <button className="cursor-pointer flex-1 h-9 px-2 rounded-lg border border-[#D4D4D4] text-md font-medium text-[#344054] hover:border-[#344054] flex items-center justify-center gap-2 group">
          Edit
        </button>

        <button className="cursor-pointer w-9 h-9 rounded-md border border-[#D4D4D4] flex items-center justify-center transition-colors">
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.75 0C5.33579 0 5 0.335786 5 0.75V1.5H0.75C0.335786 1.5 0 1.83579 0 2.25C0 2.66421 0.335786 3 0.75 3H14.75C15.1642 3 15.5 2.66421 15.5 2.25C15.5 1.83579 15.1642 1.5 14.75 1.5H10.5V0.75C10.5 0.335786 10.1642 0 9.75 0H5.75Z"
              fill="#98A2B3"
            />
            <path
              d="M5.75 8.39999C6.16421 8.39999 6.5 8.73578 6.5 9.14999L6.5 16.15C6.5 16.5642 6.16421 16.9 5.75 16.9C5.33579 16.9 5 16.5642 5 16.15L5 9.14999C5 8.73578 5.33579 8.39999 5.75 8.39999Z"
              fill="#98A2B3"
            />
            <path
              d="M10.5 9.14999C10.5 8.73578 10.1642 8.39999 9.75 8.39999C9.33579 8.39999 9 8.73578 9 9.14999V16.15C9 16.5642 9.33579 16.9 9.75 16.9C10.1642 16.9 10.5 16.5642 10.5 16.15V9.14999Z"
              fill="#98A2B3"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.74142 5.66718C1.78363 5.28735 2.10468 5 2.48684 5H13.0132C13.3953 5 13.7164 5.28735 13.7586 5.66718L13.9587 7.46852C14.3215 10.7338 14.3215 14.0293 13.9587 17.2946L13.939 17.472C13.795 18.7681 12.7904 19.8017 11.4989 19.9825C9.01176 20.3307 6.48823 20.3307 4.00108 19.9825C2.70954 19.8017 1.705 18.7681 1.56098 17.472L1.54128 17.2946C1.17846 14.0293 1.17846 10.7338 1.54128 7.46852L1.74142 5.66718ZM3.15812 6.5L3.0321 7.63417C2.68152 10.7894 2.68152 13.9738 3.0321 17.129L3.0518 17.3063C3.12011 17.921 3.59652 18.4112 4.20905 18.497C6.55822 18.8258 8.94177 18.8258 11.2909 18.497C11.9035 18.4112 12.3799 17.921 12.4482 17.3063L12.4679 17.129C12.8185 13.9738 12.8185 10.7894 12.4679 7.63417L12.3419 6.5H3.15812Z"
              fill="#98A2B3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
