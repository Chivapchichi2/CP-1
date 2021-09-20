import React from 'react';
import PropTypes from 'prop-types';

const Qualities = ({ qualities }) => (
  <>
    {' '}
    {qualities.map(({ color, name, _id }) => (
      <span className={`badge bg-${color} m-1`} key={_id}>
        {name}
      </span>
    ))}
  </>
);

Qualities.propTypes = {
  qualities: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Qualities;
