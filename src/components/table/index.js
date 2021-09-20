import React from 'react';
import PropTypes from 'prop-types';

import Thead from './thead';
import Tbody from './tbody';
import BookMark from '../bookMark';
import Qualities from '../qualities';

const Table = ({ onStatusClick, onDelete, currentSort, onSort, ...rest }) => {
  const columns = {
    name: { path: 'name', name: 'Имя' },
    qualities: {
      name: 'Качества',
      component: ({ qualities }) => <Qualities qualities={qualities} />,
    },
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
    delete: {
      component: ({ _id, status }) => (
        <button
          type="button"
          onClick={() => onDelete(_id)}
          className="btn btn-danger"
          disabled={status}
        >
          Delete
        </button>
      ),
    },
  };

  const handleSort = item => {
    if (currentSort.iter === item) {
      return onSort({
        ...currentSort,
        order: currentSort.order === 'asc' ? 'desc' : 'asc',
      });
    }
    return onSort({ iter: item, order: 'asc' });
  };

  return (
    <table className="table">
      <Thead columns={columns} onSort={handleSort} {...rest} />
      <Tbody columns={columns} {...rest} />
    </table>
  );
};

Table.propTypes = {
  onStatusClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  currentSort: PropTypes.objectOf(PropTypes.string).isRequired,
  onSort: PropTypes.func.isRequired,
};

export default Table;
