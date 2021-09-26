import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import Api from '../../API';
import Table from '../table/table';
import SearchStatus from './searchStatus';
import Pagination from './pagination';
import GroupList from './groupList';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [profession, setProfession] = useState();
  const [activeItem, setActiveItem] = useState();
  const [sortBy, setSortBy] = useState({ iter: '', order: 'asc' });

  useEffect(() => {
    Api.users.fetchAll().then(setUsers);
  }, []);
  useEffect(() => {
    Api.professions.fetchAll().then(setProfession);
  }, []);

  const paginationOption = 4;
  let totalPages = Math.ceil(users.length / paginationOption);

  const handleDelete = id => {
    setUsers(users.filter(el => el._id !== id));
  };

  const handleToggleBookMarc = id => {
    setUsers(
      users.map(user => {
        if (user._id === id) {
          return { ...user, status: !user.status };
        }
        return user;
      }),
    );
  };

  const handlePaginationClick = e => {
    e.preventDefault();
    setCurrentPage(+e.target.textContent);
  };

  const handleSort = item => {
    setSortBy(item);
  };

  const getPartOfUsers = () => {
    const filteredUsers = activeItem
      ? users.filter(
          el => JSON.stringify(el.profession) === JSON.stringify(activeItem),
        )
      : users;

    totalPages = Math.ceil(filteredUsers.length / paginationOption);

    const sortedUsers = sortBy.iter
      ? _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order])
      : filteredUsers;

    const partOfUsers = [...sortedUsers].splice(
      (currentPage - 1) * paginationOption,
      paginationOption,
    );

    if (!partOfUsers.length && currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (sortedUsers.length === 0) {
        setCurrentPage(1);
        return users;
      }
    }
    return partOfUsers;
  };

  const handleItemSelect = item => {
    setActiveItem(item);
    setCurrentPage(1);
    if (!item) {
      setSortBy({ iter: '', order: 'asc' });
    }
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-shrink-0 p-3">
        {profession && users.length > 0 && (
          <GroupList
            items={profession}
            onItemSelect={handleItemSelect}
            itemSelected={activeItem}
          />
        )}
        <div className="d-flex flex-column ms-5">
          <SearchStatus length={users.length} />
          {users.length > 0 && (
            <Table
              data={getPartOfUsers()}
              onDelete={handleDelete}
              onStatusClick={handleToggleBookMarc}
              onSort={handleSort}
              currentSort={sortBy}
            />
          )}
          <div className="d-flex justify-content-center">
            {users.length > 0 && totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePaginationClick={handlePaginationClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
