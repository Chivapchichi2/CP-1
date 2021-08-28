import React, { useState } from "react";

import Api from "./API";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
  const [users, setUsers] = useState(Api.users.fetchAll());

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

  return (
    <>
      <SearchStatus length={users.length} />
      <Users users={users} onDelete={handleDelete} onStatusClick={handleToggleBookMarc} />
    </>
  );
};

export default App;
