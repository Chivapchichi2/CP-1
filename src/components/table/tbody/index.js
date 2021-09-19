import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Tbody = ({ data, columns }) => {
  const renderContent = (item, column) => {
    if (columns[column].component) {
      const { component } = columns[column];

      if (typeof component === 'function') {
        return component(item);
      }

      return component;
    }
    return _.get(item, columns[column].path);
  };

  return (
    <tbody>
      {data.map(item => (
        <tr key={item._id}>
          {Object.keys(columns).map(column => (
            <td key={column}>{renderContent(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

Tbody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.shape().isRequired,
};

export default Tbody;
