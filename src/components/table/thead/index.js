import React from 'react';
import PropTypes from 'prop-types';

const Thead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col">Избранное</th>
        <th scope="col" aria-label="delete button" />
      </tr>
    </thead>
  );
};

export default Thead;
