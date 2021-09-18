import React from 'react';

import Table from './table';

const Users = ({ ...rest }) => {
  const column = {
    name: { iter: 'name', name: 'Имя' },
    qualities: { name: 'Качества' },
    profession: { iter: 'profession.name', name: 'Профессия' },
    completedMeetings: { iter: 'completedMeetings', name: 'Встретился, раз' },
    rate: { iter: 'rate', name: 'Оценка' },
    bookmark: { iter: 'bookmark', name: 'Избранное' },
    delete: {},
  };

  return <Table {...rest} column={column} />;
};

export default Users;
