import React from 'react';
import PropTypes from 'prop-types';

import User from './user';

const Users = ({ users, ...rest }) => (
  <>
    {users.length > 0 && (
      <table className="table">
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
        <tbody>
          {users.map(user => (
            <User key={user._id} {...rest} {...user} />
          ))}
        </tbody>
      </table>
    )}
  </>
);

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Users;
