import React, { useState } from "react";

function PaginatedList() {
  
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  // 5️⃣ Navigation functions
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px]">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Paginated List
        </h2>

        <ul className="flex flex-col gap-2 mb-6">
          {currentItems.map((item, index) => (
            <li
              key={index}
              className="border rounded-lg px-3 py-2 text-gray-700 text-center"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center gap-2">
          {/* Prev */}
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded-lg font-medium ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-3">
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default PaginatedList;
