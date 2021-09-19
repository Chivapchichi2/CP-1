import React from 'react';
import PropTypes from 'prop-types';

const Thead = ({ columns }) => (
  <thead>
    <tr>
      {Object.keys(columns).map(column => (
        <th key={column} scope="col">
          {columns[column].name}
        </th>
      ))}
    </tr>
  </thead>
);

Thead.propTypes = {
  columns: PropTypes.shape().isRequired,
};

export default Thead;
