import React from 'react';
import PropTypes from 'prop-types';

import Thead from './thead';
import Tbody from './tbody';
import BookMark from '../bookMark';

const Table = ({ onStatusClick, ...rest }) => {
  const columns = {
    name: { path: 'name', name: 'Имя' },
    qualities: { name: 'Качества' },
    profession: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: ({ _id, status }) => (
        <BookMark status={status} onStatus={() => onStatusClick(_id)} />
      ),
    },
    delete: { component: 'del' },
  };

  return (
    <table className="table">
      <Thead columns={columns} {...rest} />
      <Tbody columns={columns} {...rest} />
    </table>
  );
};

Table.propTypes = {
  onStatusClick: PropTypes.func.isRequired,
};

export default Table;
