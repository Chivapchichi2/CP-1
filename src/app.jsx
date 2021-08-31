import React, { useState } from "react";

import Api from "./API";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import Pagination from "./components/pagination";

const App = () => {
  const [users, setUsers] = useState(Api.users.fetchAll());
  const [currentPage, setCurrentPage] = useState(1);
  const paginationOption = 4;
  const totalPages = Math.ceil(users.length / paginationOption);

  const handleDelete = (id) => {
    setUsers(users.filter((el) => el._id !== id));
  };

  const handleToggleBookMarc = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          user.status = !user.status;
        }
        return user;
      })
    );
  };

  const handlePaginationClick = (e) => {
    e.preventDefault();
    setCurrentPage(+e.target.textContent);
  };
  const getPartOfUsers = () => {
    const partOfUsers = [...users].splice((currentPage - 1) * paginationOption, paginationOption);
    if (!partOfUsers.length) setCurrentPage(currentPage - 1);
    return partOfUsers;
  };

  return (
    <>
      <SearchStatus length={users.length} />
      {users.length > 0 && (
        <Users users={getPartOfUsers()} onDelete={handleDelete} onStatusClick={handleToggleBookMarc} />
      )}
      {users.length > 0 && totalPages > 1 && (
        <Pagination totalPages={totalPages} currentPage={currentPage} handlePaginationClick={handlePaginationClick} />
      )}
    </>
  );
};

export default App;
