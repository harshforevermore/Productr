import { useEffect, useRef, useState } from "react";
import { useProducts } from "../context/ProductsContext";

const PRODUCT_TYPES = [
  "foods",
  "electronics",
  "clothes",
  "beauty products",
  "others",
];

const AddProductModal = ({ isOpen, onClose }) => {
  const modal = useRef(null);
  const { addProduct } = useProducts();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modal.current && !modal.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    productName: "",
    productType: "",
    quantity: "",
    mrp: "",
    sellingPrice: "",
    brandName: "",
    images: [],
    exchangeEligible: "",
  });
  
  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...previews]);
    setImageUrls((prev) => [...prev, previews.map((val) => val.url)])
    setErrors({ ...errors, images: "" });
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = "This field is required";
    });

    if (images.length === 0) {
      newErrors.images = "At least one image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setFormData((prev) => ({...prev, images: imageUrls}));
    addProduct(formData);
    onClose();
  };

  const inputClass = (error) =>
    `w-full rounded-md border ${
      error ? "border-red-500" : "border-[#DCDFE3]"
    } placeholder:text-[#98A2B3] mt-1 px-3 py-1 outline-none`;

  return (
    <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center bg-black/50">
      <div
        className="w-full max-w-md rounded-xl bg-white p-4 pt-3 shadow-lg relative"
        ref={modal}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-b-gray-200">
          <h2 className="text-lg font-semibold">Add Product</h2>
          <button
            onClick={onClose}
            className="cursor-pointer text-lg text-gray-500"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="text-sm font-medium">Product Name</label>
            <input
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className={inputClass(errors.productName)}
              placeholder="Product Name"
            />
            {errors.productName && (
              <p className="text-sm text-red-500 mt-1">{errors.productName}</p>
            )}
          </div>

          {/* Product Type */}
          <div>
            <label className="text-sm font-medium">Product Type</label>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className={`${inputClass(errors.productType)}`}
            >
              <option value="" className="text-[#98A2B3]">
                Select product type
              </option>
              {PRODUCT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.productType && (
              <p className="text-sm text-red-500 mt-1">{errors.productType}</p>
            )}
          </div>

          {/* Quantity */}
          <div>
            <label className="text-sm font-medium">Quantity Stock</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className={inputClass(errors.quantity)}
              placeholder="Total numbers of Stock available"
            />
            {errors.quantity && (
              <p className="text-sm text-red-500 mt-1">{errors.quantity}</p>
            )}
          </div>

          {/* Prices */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">MRP</label>
              <input
                type="number"
                name="mrp"
                value={formData.mrp}
                onChange={handleChange}
                className={inputClass(errors.mrp)}
                placeholder="Total numbers of Stock available"
              />
              {errors.mrp && (
                <p className="text-sm text-red-500 mt-1">{errors.mrp}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Selling Price</label>
              <input
                type="number"
                name="sellingPrice"
                value={formData.sellingPrice}
                onChange={handleChange}
                className={inputClass(errors.sellingPrice)}
                placeholder="Total numbers of Stock available"
              />
              {errors.sellingPrice && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.sellingPrice}
                </p>
              )}
            </div>
          </div>

          {/* Brand Name */}
          <div>
            <label className="text-sm font-medium">Brand Name</label>
            <input
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              className={inputClass(errors.brandName)}
              placeholder="Total numbers of Stock available"
            />
            {errors.brandName && (
              <p className="text-sm text-red-500 mt-1">{errors.brandName}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-sm font-medium">Upload Product Images</label>
            <div class="mt-1 flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-20 border border-dashed border-gray-400 cursor-pointer"
              >
                <div class="flex flex-col items-center justify-center text-body pt-5 pb-6">
                  <p class="mb-1 text-sm text-gray-400">Enter Description</p>
                  <p class="text-md font-bold">Browse</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  class="hidden"
                />
              </label>
            </div>
            {errors.images && (
              <p className="text-sm text-red-500 mt-1">{errors.images}</p>
            )}

            <div className="flex gap-3">
              {images.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img.url}
                    alt="preview"
                    className="h-16 w-16 rounded object-cover border"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-white border rounded-full px-1 text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Exchange Eligibility */}
          <div>
            <label className="text-sm font-medium">
              Exchange or Return Eligibility
            </label>
            <select
              name="exchangeEligible"
              value={formData.exchangeEligible}
              onChange={handleChange}
              className={inputClass(errors.exchangeEligible)}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.exchangeEligible && (
              <p className="text-sm text-red-500 mt-1">
                {errors.exchangeEligible}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="cursor-pointer rounded-lg font-medium px-6 py-2 text-white bg-linear-to-b from-[#000FB4] to-[#4050FF]"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
