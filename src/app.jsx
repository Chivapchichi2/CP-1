import React, { useState, useEffect } from 'react';

import Api from './API';
import Table from './components/table';
import SearchStatus from './components/searchStatus';
import Pagination from './components/pagination';
import GroupList from './components/groupList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [profession, setProfession] = useState();
  const [activeItem, setActiveItem] = useState();

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

  const getPartOfUsers = () => {
    const filteredUsers = activeItem
      ? users.filter(
          el => JSON.stringify(el.profession) === JSON.stringify(activeItem),
        )
      : users;

    totalPages = Math.ceil(filteredUsers.length / paginationOption);

    const partOfUsers = [...filteredUsers].splice(
      (currentPage - 1) * paginationOption,
      paginationOption,
    );

    if (!partOfUsers.length) setCurrentPage(currentPage - 1);

    return partOfUsers;
  };

  const handleItemSelect = item => {
    setActiveItem(item);
    setCurrentPage(1);
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

export default App;
