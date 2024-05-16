import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationController: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex justify-center mt-4">
      <nav>
        <ul className="pagination">
          <li className={`pagination-item ${isFirstPage ? "disabled" : ""}`}>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              이전
            </button>
          </li>

          {[...Array(totalPages).keys()].map((pageNumber) => (
            <li
              key={pageNumber}
              className={`pagination-item ${
                pageNumber + 1 === currentPage ? "active" : ""
              }`}
            >
              <button onClick={() => onPageChange(pageNumber + 1)}>
                {pageNumber + 1}
              </button>
            </li>
          ))}

          <li className={`pagination-item ${isLastPage ? "disabled" : ""}`}>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              다음
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationController;
