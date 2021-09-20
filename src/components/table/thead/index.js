import React from 'react';
import PropTypes from 'prop-types';

const Thead = ({ columns, onSort }) => (
  <thead>
    <tr>
      {Object.keys(columns).map(column => (
        <th
          key={column}
          scope="col"
          onClick={() =>
            columns[column].path ? onSort(columns[column].path) : ''
          }
        >
          {columns[column].name}
        </th>
      ))}
    </tr>
  </thead>
);

Thead.propTypes = {
  columns: PropTypes.shape().isRequired,
  onSort: PropTypes.func.isRequired,
};

export default Thead;
