import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Pagination = ({ providersPerPage, totalProviders, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProviders / providersPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
            onClick={() => paginate(currentPage-1)}
              className="relative cursor-pointer inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
        {pageNumbers.map(number => {
            if (number === currentPage) {
                return (
                    <a key={number}
                onClick={() => paginate(number)}
                className="relative bg-blue-50 border-apexB text-apexB inline-flex items-center border px-4 py-2 text-sm font-medium hover:bg-gray-50 z-10 focus:z-20 cursor-pointer"
              >
                {number}
              </a>
                )
            }
            return (
                <a key={number}
                onClick={() => paginate(number)}
                className="relative inline-flex items-center cursor-pointer border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                {number}
              </a>

            )
        })}
        <a
        onClick={() => paginate(currentPage+1)}
              className="relative cursor-pointer inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
    </div>




    
 
          
  );
};

export default Pagination;
