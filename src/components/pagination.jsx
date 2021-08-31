import React from "react";
const Pagination = ({ totalPages, currentPage, handlePaginationClick }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {Array(totalPages)
          .fill("")
          .map((_, indx) => (
            <li
              key={indx}
              className={`page-item ${indx + 1 === currentPage ? "active" : ""} m-1`}
              aria-current={indx + 1 === currentPage ? "page" : null}
              onClick={handlePaginationClick}
            >
              <a className="page-link" href="/">
                {indx + 1}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;

//
