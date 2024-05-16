import React, { Dispatch, SetStateAction } from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const ItemStyle =
  "border-black border-solid border-2 pagination-item w-8 cursor-pointer" as const;
const ButtonStyle = "text-gray-500 cursor-pointer" as const;

const PaginationController: React.FC<Props> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex justify-center mt-4">
      <nav>
        <ul className="pagination flex">
          <li
            className={`${ItemStyle} ${isFirstPage ? "disabled" : ""}`}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <button className={ButtonStyle} disabled={isFirstPage}>
              이전
            </button>
          </li>

          {[...Array(totalPages).keys()].map((pageNumber) => (
            <li
              key={pageNumber}
              className={`${ItemStyle} ${
                pageNumber + 1 === currentPage ? "active" : ""
              }`}
              onClick={() => setCurrentPage(pageNumber + 1)}
            >
              <button className={ButtonStyle}>{pageNumber + 1}</button>
            </li>
          ))}

          <li
            className={`${ItemStyle} ${isLastPage ? "disabled" : ""}`}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <button className={ButtonStyle} disabled={isLastPage}>
              다음
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationController;
