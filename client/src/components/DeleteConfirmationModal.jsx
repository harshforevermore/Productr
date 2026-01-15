import { useEffect, useRef } from "react";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, productName }) => {
  const modal = useRef(null);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center bg-black/50">
      <div
        className="w-full max-w-lg rounded-xl bg-white px-6 py-4 shadow-lg relative"
        ref={modal}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Delete Product</h3>
          <button
            onClick={onClose}
            className="cursor-pointer text-xl text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="text-md text-gray-700">
            Are you sure you really want to delete this Product{" "}
            <span className="font-semibold">"{productName}"</span> ?
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            onClick={onConfirm}
            className="cursor-pointer rounded-lg font-semibold px-6 py-2 text-white bg-[#0000FF] hover:bg-[#0000CC] transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;