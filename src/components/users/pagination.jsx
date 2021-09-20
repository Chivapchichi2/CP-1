import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ totalPages, currentPage, handlePaginationClick }) => (
  <nav aria-label="Page navigation">
    <ul className="pagination">
      {Array(totalPages)
        .fill('')
        .map((_, indx) => (
          <li
            // eslint-disable-next-line
            key={indx}
            className={`page-item ${
              indx + 1 === currentPage ? 'active' : ''
            } m-1`}
            aria-current={indx + 1 === currentPage ? 'page' : null}
          >
            <a className="page-link" href="/" onClick={handlePaginationClick}>
              {indx + 1}
            </a>
          </li>
        ))}
    </ul>
  </nav>
);

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

export default Pagination;
