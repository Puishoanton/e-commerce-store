"use client"
import { FC, useMemo } from "react";
import { useWindowSize } from "usehooks-ts";

type Props = {
  totalItems?: number,
  itemsPerPage: number,
  currentPage: number,
  onPageChange: (p: number) => void
}

const Pagination: FC<Props> = ({ totalItems = 0, itemsPerPage, currentPage, onPageChange }) => {
  const { width: windowWidth } = useWindowSize();
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const visiblePages = useMemo(() => {
    const maxVisible = windowWidth < 640 ? 3 : windowWidth < 1024 ? 4 : 5;

    if (totalPages <= maxVisible + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (end === totalPages) {
      start = totalPages - maxVisible + 1;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [windowWidth, currentPage, totalPages]);

  const showLeftEllipsis = windowWidth >= 640 && visiblePages[0] > 2;
  const showRightEllipsis = windowWidth >= 640 && visiblePages[visiblePages.length - 1] < totalPages - 1;

  return (
    <div className="flex justify-center space-x-2 py-4">
      <button
        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        &laquo;
      </button>
      <button
        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt;
      </button>

      {showLeftEllipsis && (
        <>
          <button onClick={() => onPageChange(1)} className="px-4 py-2 rounded-md bg-white dark:bg-gray-800 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600">
            1
          </button>
          <button onClick={() => onPageChange(visiblePages[0] - 1)} className="px-4 py-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md ">...</button>
        </>
      )}

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 px-4 py-2 rounded-md ${page === currentPage ? "bg-indigo-600 text-white" : "bg-white dark:bg-gray-800"
            }`}
        >
          {page}
        </button>
      ))}

      {showRightEllipsis && (
        <>
          <button onClick={() => onPageChange(visiblePages[visiblePages.length - 1] + 1)} className="px-4 py-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md">...</button>
          <button onClick={() => onPageChange(totalPages)} className="px-4 py-2 rounded-md bg-white dark:bg-gray-800 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600">
            {totalPages}
          </button>
        </>
      )}

      <button
        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </button>
      <button
        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;

